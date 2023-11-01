import { Link } from "react-router-dom";
import "./Logo.css";
import mainLogo from "../../images/main_logo.svg";

export default function Logo() {

  return (
    <Link to="/" className="logo__link link-hover">
      <img
        src={mainLogo}
        alt="Логотип"
        className="logo"
      />
    </Link>
  )
};