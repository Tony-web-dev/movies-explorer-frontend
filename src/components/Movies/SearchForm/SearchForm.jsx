import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import useFormValidation from "../../../utils/useFormValidation";
import { useEffect } from "react";

export default function SearchForm({
  isChecked,
  setIsChecked,
  searchMovies,
  savedSearch,
  filterMovies,
  primaryEntrance,
  allMovies
}) {
  const location = useLocation();
  const { values, handleChange, resetForm, errors } = useFormValidation();

  useEffect(() => {
    const searchValue = localStorage.getItem("searchValue");
    if ((location.pathname === "/saved-movies" && searchValue)) {
      resetForm({search: ""})
    } else {
      resetForm({search: savedSearch})
    }
  }, [resetForm, location.pathname, savedSearch])

  function toggleCheckboxFilter() {
    if (isChecked) {
      setIsChecked(false)
      filterMovies(values.search, false, allMovies)
    } else {
      setIsChecked(true)
      filterMovies(values.search, true, allMovies)
    }
    if (location.pathname === "/movies") {
      localStorage.setItem("searchValue", values.search || "")
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.search.value;
    searchMovies(e.target.search.value);
    if (searchValue && location.pathname === "/movies") {
      localStorage.setItem("searchValue", searchValue)
    }
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={onSubmit} noValidate>
        <div className="search__form-container">
          <label>
            <input
              type="text"
              className="search__input input-focus"
              placeholder="Фильм"
              name="search"
              value={values.search || ""}
              onChange={(e) => {
                handleChange(e)
              }}
              required
            />
          </label>
          <button type="submit" className={`search__button ${allMovies ? (location.pathname === "/saved-movies" && allMovies.length === 0) && "search__button_disactive" : ""} button-hover`}>Найти</button>
        </div>

          <span className="search__error">{errors.search}</span>

        <div className="search__checkbox-container">
          <input
            type="checkbox"
            className="search__checkbox-input"
            name="checkboxInput"
            id="checkboxInput"
            placeholder=""
            onChange={() => {
              toggleCheckboxFilter()
            }}
            checked={isChecked}
            disabled={primaryEntrance}
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

