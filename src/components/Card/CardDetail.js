import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const params = useParams();
  const { name, image, status, location, gender, species, origin, type } =
    fetchedData;

  //   console.log(fetchedData);

  const api = `https://rickandmortyapi.com/api/character/${params?.id}`;

  // conditional color rendering with status
  const chooseColor = (status) => {
    switch (status) {
      case "Alive":
        return "badge bg-success";
      case "Dead":
        return "badge bg-danger";
      case "unknown":
        return "badge bg-secondary";
      default:
        return "badge bg-success";
    }
  };

  const chooseTextColor = (status) => {
    switch (status) {
      case "Alive":
        return `text-success`;
      case "Dead":
        return `text-danger`;
      case "unknown":
        return `text-secondary`;
      default:
        return `text-primary`;
    }
  };

  useEffect(() => {
    // IIFE
    (async function () {
      const response = await fetch(api);
      const data = await response.json();
      if (data) {
        setFetchedData(data);
      }
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mt-3">
      <div className="d-flex flex-column gap-2">
        <h1 className={`text-center ${chooseTextColor(status)}`}>{name}</h1>

        <img src={image} alt={name} className="img-fluid rounded-3" />
        <div className={`${chooseColor(status)} py-2 fs-5`}>{status}</div>

        <div className="content ">
          <div className="fw-bold">
            Gender : <span className="">{gender}</span>
          </div>

          <div className="fw-bold">
            Location :{" "}
            <span className={`${chooseTextColor(status)}`}>
              {location?.name}
            </span>
          </div>

          {type?.length > 0 && (
            <div className="fw-bold">
              Type : <span className="">{type}</span>
            </div>
          )}

          <div className="fw-bold">
            Origin :{" "}
            <span className={`${chooseTextColor(status)}`}>{origin?.name}</span>
          </div>
          <div className="fw-bold">Species : {species}</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
