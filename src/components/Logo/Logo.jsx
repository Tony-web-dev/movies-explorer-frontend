import { Link } from "react-router-dom";
import "./Logo.css";
import headerLogo from "../../images/header_logo.svg";

export default function Logo() {
  return (
    <Link to="https://www.artlebedev.ru/typograf/" className="header__link_logo link-hover">
      <img
        src={headerLogo}
        alt="Логотип"
        className="header__logo"
      />
    </Link>
  )
};