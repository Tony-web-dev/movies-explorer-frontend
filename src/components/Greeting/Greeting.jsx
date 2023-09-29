import "./Greeting.css";
import Logo from "../Logo/Logo.jsx";

export default function Greeting({ children }) {
  return (
    <div className="greeting">
      <Logo />
      <h1 className="greeting__title">{children}</h1>
    </div>
  )
};