import "./App.css";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import InfoTooltip from "../InfoTooltip/InfoTooltip.jsx";
import { mainApi } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext.js"
import { useCallback, useEffect, useState } from "react";
import { SUCCESS_AUTHORIZATION, SUCCESS_REGISTRATION, SUCCESS_UPDATED, getErrorMessage } from "../../utils/responses.js";
import { STATUS_FAIL, STATUS_SUCCESS } from "../../utils/constants.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSavedMovies, setIsSavedMovies] = useState([]);


  function handleRegister({name, email, password}) {
    setIsSending(true);
    mainApi.authentication({name, email, password})
      .then(() => {
        handleLogin({email, password});
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_REGISTRATION);
      })
      .catch((error) => {
        const resMessage = getErrorMessage(error);
        setErrorMessage(`Ошибка при регистрации: ${resMessage}`);
        setIsError(true);
        setTooltipStatus(STATUS_FAIL);
        console.error("Ошибка при регистрации:", error);
      })
      .finally(() => setIsSending(false));
  }

  function handleLogin({email, password}) {
    setIsSending(true);
    setErrorMessage("");
    mainApi.authorization({email, password})
      .then((email, password) => {
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_AUTHORIZATION);
        setIsLoggedIn(true);
        setCurrentUser({email, password});
        navigate("/movies");
      })
      .catch((error) => {
        const resMessage = getErrorMessage(error);
        setErrorMessage(`Ошибка при авторизации: ${resMessage}`);
        setIsError(true);
        setTooltipStatus(STATUS_FAIL);
        console.error("Ошибка при авторизации:", error);
      })
      .finally(() => setIsSending(false));
  }

  useEffect(() => {
    setErrorMessage("")
  }, [location])

  const checkToken = useCallback(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      Promise.all([
        mainApi.getUserInfo(token),
        mainApi.getSavedMovies(token)
      ])
        .then(([userData, moviesData]) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
          setIsSavedMovies(moviesData);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке начальных данных:", error);
          localStorage.clear();
          setIsLoggedIn(false);
        })
    } else {
      setIsLoggedIn(false);
      localStorage.clear();
    }
  }, [])

  useEffect(() => {
    checkToken();
  }, [isLoggedIn, checkToken])

  function handleEditProfile(name, email) {
    setIsSending(true);
    mainApi.setUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setIsEdit(false);
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_UPDATED);
      })
      .catch((error) => {
        const resMessage = getErrorMessage(error);
        setErrorMessage(`Ошибка при изменении профиля: ${resMessage}`);
        setIsError(true);
        setTooltipStatus(STATUS_FAIL);
        console.error("Ошибка при изменении профиля:", error);
      })
      .finally(() => setIsSending(false));
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  }

  function handleClosePopup() {
    setTooltipStatus(false);
    setTooltipMessage("");
  }

  function handleDeleteMovie(movieId) {
    mainApi.deleteSavedMovie(movieId)
      .then(() => {
        setIsSavedMovies(isSavedMovies.filter((movie) => movie._id !== movieId));
      })
      .catch((error) => console.error("Ошибка при удалении фильма:", error));
  }

  function toggleSaveMovie(movie) {
    const savedMovie = isSavedMovies.some((item) => item.movieId === movie.id);
    if (savedMovie) {
      const clickedMovie = isSavedMovies.find((item) => item.movieId === movie.id);
        if (clickedMovie) {
          handleDeleteMovie(clickedMovie._id)
        }
    } else {
      mainApi.saveMovie(movie)
        .then((res) => {
          setIsSavedMovies([res, ...isSavedMovies]);
        })
        .catch((error) => console.error("Ошибка при сохранении фильма:", error));
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>

          <Route path="/" element={
            <Main
              isLoggedIn={isLoggedIn} />
          } />

          <Route path="/signup" element={
            isLoggedIn ? <Navigate to="/" replace /> :
              <Register
                onRegister={handleRegister}
                errorMessage={errorMessage}
                isSending={isSending} />
          } />

          <Route path="/signin" element={
            isLoggedIn ? <Navigate to="/" replace /> :
              <Login
                onLogin={handleLogin}
                errorMessage={errorMessage}
                isSending={isSending} />
          } />

          <Route element={<ProtectedRoute />}>
            <Route path="/movies" element={
              <Movies
                toggleSaveMovie={toggleSaveMovie}
                savedMovies={isSavedMovies} />
            } />

            <Route path="/saved-movies" element={
              <SavedMovies
                onDelete={handleDeleteMovie}
                savedMovies={isSavedMovies} />
            } />

            <Route path="/profile" element={
              <Profile
                onLogout={handleLogout}
                onEdit={handleEditProfile}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                isError={isError}
                setIsError={setIsError}
                errorMessage={errorMessage}
                isSending={isSending} />
            } />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
        <InfoTooltip
          tooltipStatus={tooltipStatus}
          tooltipMessage={tooltipMessage}
          onClose={handleClosePopup} />
      </div>
    </CurrentUserContext.Provider>
  );
};