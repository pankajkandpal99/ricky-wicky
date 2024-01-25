import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filter = ({ setPageNum, setStatus, setGender, setSpecies }) => {
  const clearFilterHandler = () => {
    setPageNum(1);
    setStatus("");
    setGender("");
    setSpecies("");

    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div className="text-center mb-4">
        <span
          style={{
            cursor: "pointer",
            color: "blue",
          }}
          onMouseOver={(e) => (e.target.style.color = "red")}
          onMouseOut={(e) => (e.target.style.color = "blue")}
          onClick={clearFilterHandler}
        >
          clear filter
        </span>
      </div>

      <div className="accordian" id="accordionExample">
        <Status setPageNum={setPageNum} setStatus={setStatus} />
        <Species setPageNum={setPageNum} setSpecies={setSpecies} />
        <Gender setGender={setGender} setPageNum={setPageNum} />
      </div>
    </div>
  );
};

export default Filter;
