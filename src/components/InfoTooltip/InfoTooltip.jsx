import "./InfoTooltip.css";
import successLogo from "../../images/action_success.svg";
import failLogo from "../../images/action_fail.svg";
import { SOMETHING_WRONG } from "../../utils/responses.js";

export default function InfoTooltip({ status, tooltipMessage, onClose }) {
  return (
    <div className={`popup ${status && 'popup_opened'}`}>
      <div className='popup__container'>
        <button
          className='popup__close-button button-hover'
          type='button'
          aria-label='Закрыть попап'
          onClick={onClose}
        ></button>
        <img
          className='popup__status-img'
          src={`${status === 'success' ? successLogo : failLogo}`}
          alt="Логотип статуса"
        />

        <h2 className='popup__status-text'>{`${
          status === 'success' ? tooltipMessage : SOMETHING_WRONG
        }`}</h2>
      </div>
    </div>
  )
};