import { Link } from "react-router-dom";
import "./Logo.css";
import mainLogo from "../../images/main_logo.svg";

export default function Logo({ setIsLogged }) {

  // временная авторизация
  function tempAuthClick() {
    setIsLogged(prev => !prev)
  };

  return (
    <Link to="/" className="logo__link link-hover" onClick={tempAuthClick}>
      <img
        src={mainLogo}
        alt="Логотип"
        className="logo"
      />
    </Link>
  )
};