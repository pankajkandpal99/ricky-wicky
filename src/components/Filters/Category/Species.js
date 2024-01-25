import React from "react";
import FilterButton from "../FilterButton";

const Species = ({ setSpecies, setPageNum }) => {
  const specieses = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {specieses.map((species, idx) => {
            return (
              <FilterButton
                key={idx}
                item={species}
                index={idx}
                name="species"
                setSpecies={setSpecies}
                setPageNum={setPageNum}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Species;
