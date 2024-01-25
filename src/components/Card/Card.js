import { Link } from "react-router-dom";
import classes from "./Card.module.scss";

const Card = ({ page, results }) => {
  // conditional color rendering for badges
  const chooseColor = (status) => {
    switch (status) {
      case "Alive":
        return "position-absolute badge bg-success";
      case "Dead":
        return "position-absolute badge bg-danger";
      case "unknown":
        return "position-absolute badge bg-secondary";
      default:
        return "position-absolute badge bg-success";
    }
  };

  let searchResult;

  if (results) {
    searchResult = results?.map((result, idx) => {
      // console.log(page);
      return (
        <Link
          to={`${page}${result?.id}`}
          key={idx}
          className="col-lg-4 col-md-6 col-12 position-relative mb-4"
          style={{ textDecoration: "none" }}
        >
          <div
            className={`${classes.card} d-flex flex-column justify-content-center text-dark`}
          >
            <img
              src={result.image}
              alt=""
              className={`${classes.img} img-fluid`}
            />
            <div className={`${classes.content}`}>
              <div className="fs-5 fw-bold mb-4"> {result.name} </div>
              <div className="">
                <div className="fs-6">last location</div>
                <div className="fs-5">{result.location.name}</div>
              </div>
            </div>
          </div>

          <div className={`${classes.badge} ${chooseColor(result.status)}`}>
            {result.status}
          </div>
        </Link>
      );
    });
  } else {
    searchResult = "Sorry, No Characters Found!";
  }

  return <>{searchResult}</>;
};

export default Card;
