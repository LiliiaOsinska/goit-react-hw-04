import { useState } from "react";
import s from "../SearchBar/SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ handleSetQuery }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Будь ласка, введіть текст для пошуку!");
      return;
    }
    handleSetQuery(value);
    setValue(""); // Очищення поля після пошуку
  };
  return (
    <div className={s.searchBar_container}>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            className={s.input_search}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            value={value}
            autoComplete="off"
            placeholder="Search images and photos"
            aria-label="Search input"
          />
          <button className={s.search_bar_btn} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};
export default SearchBar;
