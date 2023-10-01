import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-container">
          <label>
            <input
              type="text"
              className="search__input input-focus"
              placeholder="Фильм"
              name="searchInput"
              defaultValue=""
              required
            />
          </label>
          <button type="submit" className="search__button button-hover">Найти</button>
        </div>
        <span className="search__error">Введите ключевое слово для поиска!</span>
        <div className="search__checkbox-container">
          <input
            type="checkbox"
            className="checkbox__input"
            name="checkboxInput"
            id="checkboxInput"
            placeholder=""
          />
          <label htmlFor="checkboxInput">
            <div className="search__checkbox-slider button-hover">
              <span className="search__checkbox-ball" />
            </div>
          </label>
          <span className="search__checkbox-title">Короткометражки</span>
        </div>
      </form>
    </section>
  )
};

