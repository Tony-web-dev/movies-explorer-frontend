import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import { SUCCESS_AUTHORIZATION, SUCCESS_REGISTRATION } from "../../utils/responses.js";
import { STATUS_SUCCESS } from "../../utils/constants.js";

export default function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleRegister({name, email, password}) {
    mainApi.authentication({name, email, password})
      .then(() => {
        setIsSuccess(true);
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_REGISTRATION);
        handleLogin({email, password});
      })
      .catch((error) => {
        setErrorMessage(error);
        console.error("Ошибка:", error);
      });
  }

  function handleLogin({email, password}) {
    setErrorMessage("");
    showLoading(true);
    mainApi.authorization({email, password})
      .then(({email, password}) => {
        setIsSuccess(true);
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_AUTHORIZATION);
        setIsLoggedIn(true);
        setCurrentUser({email, password});
        navigate("/movies");
      })
      .catch((error) => {
        setTimeout(() => {
          setErrorMessage(error);
          console.error("Ошибка:", error);
        }, 300);
      })
      .finally(() => {
        setTimeout(() => {
          showLoading(false)
        }, 300)
      })
  }

  const checkToken = useCallback(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi.getUserInfo(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser({...res});
          }
        })
        .catch((error) => {
          console.error(error);
          localStorage.clear();
          setIsLoggedIn(false);
        })
    }
  }, [])

  useEffect(() => {
    checkToken();
  }, [isLoggedIn, checkToken])

  function logOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  }


  function closePopup() {
    setTooltipStatus(false);
    setTooltipMessage("");
    setIsSuccess(false);
  }

  function showLoading(loadInProgress) {
    loadInProgress ? setIsLoading(true) : setIsLoading(false);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn}/>} />
          <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} isLoading={isLoading} />} />
          <Route path="/saved-movies" element={<SavedMovies isLoggedIn={isLoggedIn} isLoading={isLoading} />} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} logOut={logOut} />} />
          <Route path="/signup" element={<Register onRegister={handleRegister} errorMessage={errorMessage} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} errorMessage={errorMessage} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InfoTooltip isOpen={isSuccess} status={tooltipStatus} tooltipMessage={tooltipMessage} onClose={closePopup} />
      </div>

    </CurrentUserContext.Provider>

  );
};