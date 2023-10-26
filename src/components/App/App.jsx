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
import { SOMETHING_WRONG, SUCCESS_AUTHORIZATION, SUCCESS_REGISTRATION, SUCCESS_UPDATED } from "../../utils/responses.js";
import { STATUS_FAIL, STATUS_SUCCESS } from "../../utils/constants.js";

export default function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function handleRegister({name, email, password}) {
    setIsSending(true);
    mainApi.authentication({name, email, password})
      .then(() => {
        setIsSuccess(true);
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_REGISTRATION);
        handleLogin({email, password});
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error);
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_REGISTRATION);
        console.error("Ошибка:", error);
      })
      .finally(() => setIsSending(false));
  }

  function handleLogin({email, password}) {
    setIsSending(true);
    setErrorMessage("");
    mainApi.authorization({email, password})
      .then((email, password) => {
        setIsSuccess(true);
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_AUTHORIZATION);
        setIsLoggedIn(true);
        setCurrentUser({email, password});
        navigate("/movies");
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error);
        setTooltipStatus(STATUS_FAIL);
        setTooltipMessage(SOMETHING_WRONG);
        console.error("Ошибка:", error);
      })
      .finally(() => setIsSending(false));
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

  const successResult = useCallback(() => {
    setIsSuccess(false);
  }, [])

  function editProfile(name, email) {
    setIsSending(true);
    mainApi.setUserInfo(name, email, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
        setIsSuccess(true);
        setIsEdit(false);
        setTooltipStatus(STATUS_SUCCESS);
        setTooltipMessage(SUCCESS_UPDATED);
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error);
        setTooltipStatus(STATUS_FAIL);
        setTooltipMessage(SOMETHING_WRONG);
        console.error(error);
      })
      .finally(() => {

        setIsSending(false)
      });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn}/>} />
          <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn} isSending={isSending} />} />
          <Route path="/saved-movies" element={<SavedMovies isLoggedIn={isLoggedIn} isSending={isSending} />} />
          <Route path="/profile" element={<Profile logOut={logOut} editProfile={editProfile} isEdit={isEdit} setIsEdit={setIsEdit} isSuccess={isSuccess} successResult={successResult} setIsError={setIsError} isError={isError} isSending={isSending} errorMessage={errorMessage} />} />
          <Route path="/signup" element={<Register onRegister={handleRegister} errorMessage={errorMessage} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} errorMessage={errorMessage} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InfoTooltip isOpen={isSuccess} status={tooltipStatus} tooltipMessage={tooltipMessage} onClose={closePopup} />
      </div>

    </CurrentUserContext.Provider>

  );
};