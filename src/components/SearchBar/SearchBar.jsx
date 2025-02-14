import { useState } from "react";
import s from "../SearchBar/SearchBar.module.css";
// import toast from "react-hot-toast";

const SearchBar = ({ handleSetQuery }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetQuery(value);
    // value.preventDefault > 0 ? handleQuery(value) : toast.error;
  };
  return (
    <div className={s.searchBar_container}>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setValue(e.target.value)}
            type="text"
            value={value}
            autoComplete="off"
            placeholder="Search images and photos"
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
