const USER_ALREADY_EXISTS = "Пользователь с таким e-mail уже существует"; //use
const USER_INVALID_AUTH = "Указан неверный логин или пароль"; //use
const SUCCESS_UPDATED = "Данные успешно обновлены!"; //use
const SUCCESS_REGISTRATION = "Вы успешно зарегистрировались!"; //use
const SUCCESS_AUTHORIZATION = "Вы успешно вошли на сайт!"; //use
const SOMETHING_WRONG = "Что-то пошло не так! Попробуйте еще раз"; //use
const RESULT_NO_QUERY = "Выполните поисковый запрос, чтобы увидеть список фильмов";
const RESULT_NOTHING = "Ничего не найдено"; //use
const RESULT_SERVER_ERROR = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"; //use
const RESULT_NO_SAVED = "Нет сохранённых фильмов";

const getErrorMessage = (errorStatus, defaultText) => {
  switch (errorStatus) {
    case "401 Unauthorized":
      return USER_INVALID_AUTH;
    case "409 Conflict":
      return USER_ALREADY_EXISTS;
    default:
      return defaultText;
  }
};


export {
  USER_ALREADY_EXISTS,
  USER_INVALID_AUTH,
  SUCCESS_UPDATED,
  SUCCESS_REGISTRATION,
  SUCCESS_AUTHORIZATION,
  SOMETHING_WRONG,
  RESULT_NO_QUERY,
  RESULT_NOTHING,
  RESULT_SERVER_ERROR,
  RESULT_NO_SAVED,
  getErrorMessage,
};