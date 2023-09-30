import { Link } from "react-router-dom";
import "./Logo.css";
import headerLogo from "../../images/header_logo.svg";

export default function Logo({ setIsLogged }) {

  // временная авторизация
  function tempAuthClick() {
    setIsLogged(prev => !prev)
  };

  return (
    <Link to="/" className="header__link_logo link-hover" onClick={tempAuthClick}>
      <img
        src={headerLogo}
        alt="Логотип"
        className="header__logo"
      />
    </Link>
  )
};