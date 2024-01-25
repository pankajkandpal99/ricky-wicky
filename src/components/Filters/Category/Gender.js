import React from "react";
import FilterButton from "../FilterButton";

const Gender = ({ setGender, setPageNum }) => {
  const genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>

      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        area-aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders?.map((gender, idx) => {
            return (
              <FilterButton
                key={idx}
                name="gender"
                index={idx}
                item={gender}
                setGender={setGender}
                setPageNum={setPageNum}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;
