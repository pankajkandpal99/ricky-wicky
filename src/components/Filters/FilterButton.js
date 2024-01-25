import React from "react";

const FilterButton = ({
  item,
  index,
  name,
  setPageNum,
  setStatus,
  setSpecies,
  setGender,
}) => {
  const handleClick = () => {
    setPageNum(1);
    switch (name) {
      case "status":
        return setStatus(item);
      case "gender":
        return setGender(item);
      case "species":
        return setSpecies(item);
      default:
        return "Something went wrong!";
    }
  };

  return (
    <>
      <style>
        {`
        .title:checked + label {
          background-color: #0b5ed7;
          color: white;
        }
        `}
      </style>

      <div className="form-check" onClick={handleClick}>
        <input
          className="form-check-input title"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          style={{
            display: "none",
          }}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </>
  );
};

export default FilterButton;
