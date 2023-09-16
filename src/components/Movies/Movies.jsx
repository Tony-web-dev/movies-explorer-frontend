function Movies() {

  return (
    <>
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__link_logo">
          <img
            src="/images/header_logo.svg"
            alt="Логотип"
            className="header__logo_main"
          />
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list header__nav-list_movies">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link header__nav-link_movies">
                Фильмы
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link header__nav-link_movies">
                Сохранённые фильмы
              </a>
            </li>
          </ul>
        </nav>
        <a href="#" className="header__link_account">
          <img
            src="./images/account_icon.svg"
            alt="Логотип"
            className="header__logo_account"
          />
          <span className="header__span">Аккаунт</span>
        </a>
      </div>
    </header>
    <main className="main_movies">
      <section className="search">
        <div className="search__container">
          <form className="search__form" noValidate="">
            <div className="search__form-container">
              <img
                src="./images/loop_grey_icon.svg"
                alt="Иконка"
                className="search__icon"
              />
              <input
                type="text"
                className="search__input"
                placeholder="Фильм"
                name="searchInput"
                defaultValue=""
                required=""
              />
              <button className="search__button" />
            </div>
            <div className="search__checkbox-container">
              <input
                type="checkbox"
                className="checkbox__input"
                name="checkboxInput"
                id="checkboxInput"
              />
              <label htmlFor="checkboxInput">
                <div className="search__checkbox-slider">
                  <span className="search__checkbox-ball" />
                </div>
              </label>
              <span className="search__checkbox-title">Короткометражки</span>
            </div>
          </form>
        </div>
      </section>
      <section className="movies">
        <ul className="movies__list">
          <li className="movie">
            <img
              src="./images/poster-test.jpg"
              alt=""
              className="movie__poster"
            />
            <div className="movie__description">
              <div className="movie__info">
                <h2 className="movie__title">Терминатор. Судный день</h2>
                <p className="movie__duration">1ч 4м</p>
              </div>
              <button
                className="movie__like"
                type="button"
                aria-label="Поставить лайк"
              />
            </div>
          </li>
          <li className="movie">
            <img
              src="./images/poster-test.jpg"
              alt=""
              className="movie__poster"
            />
            <div className="movie__description">
              <div className="movie__info">
                <h2 className="movie__title">Терминатор. Судный день</h2>
                <p className="movie__duration">1ч 4м</p>
              </div>
              <button
                className="movie__like"
                type="button"
                aria-label="Поставить лайк"
              />
            </div>
          </li>
          <li className="movie">
            <img
              src="./images/poster-test.jpg"
              alt=""
              className="movie__poster"
            />
            <div className="movie__description">
              <div className="movie__info">
                <h2 className="movie__title">Терминатор. Судный день</h2>
                <p className="movie__duration">1ч 4м</p>
              </div>
              <button
                className="movie__like"
                type="button"
                aria-label="Поставить лайк"
              />
            </div>
          </li>
        </ul>
      </section>
    </main>
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__columns">
        <div className="footer__column">
          <p className="footer__author">© 2023 Антонина Тимуш</p>
        </div>
        <div className="footer__column">
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  </>


  )
};

export default Movies;