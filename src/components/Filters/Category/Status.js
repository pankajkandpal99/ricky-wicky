import React from "react";
import FilterButton from "../FilterButton";

const Status = ({ setStatus, setPageNum }) => {
  const statuses = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {statuses?.map((status, idx) => {
            return (
              <FilterButton
                key={idx}
                index={idx}
                item={status}
                name="status"
                setStatus={setStatus}
                setPageNum={setPageNum}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
