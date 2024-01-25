import { useState } from "react";
import classes from "./Search.module.scss";

const Search = ({ setSearch, setPageNum }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(value);
    setPageNum(1);
    setSearch(value);
  };

  return (
    <form
      className="d-flex flex-sm-row flex-column align-items-center justify-content-center mb-5 gap-4"
      onSubmit={(event) => handleSubmit(event)}
    >
      {/* Search for one or multiple characters usng search bar */}

      <input
        className={`${classes.input}`}
        type="text"
        placeholder="Search..."
        onChange={(event) => handleChange(event)}
      />
      <button type="submit" className={`${classes.btn} btn btn-primary fs-5`}>
        Search
      </button>
    </form>
  );
};

export default Search;
