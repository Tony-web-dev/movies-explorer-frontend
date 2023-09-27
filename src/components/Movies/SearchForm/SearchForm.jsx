import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" noValidate="">
        <div className="search__form-container">
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            name="searchInput"
            defaultValue=""
            required=""
          />
          <button className="search__button button-hover">Найти</button>
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
    </section>
  )
};

