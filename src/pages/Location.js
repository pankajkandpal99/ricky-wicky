import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  const [locationId, setLocationId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState("");

  const locationApi = `https://rickandmortyapi.com/api/location/${locationId}`;

  // console.log(info);

  useEffect(() => {
    (async function () {
      const response = await fetch(locationApi);
      const data = await response.json();
      if (data) {
        // console.log(data);
        setInfo(data);
        const episode = await Promise.all(
          data?.residents?.map((resid) => {
            // console.log(char);
            return fetch(resid).then((res) => res.json());
          })
        );

        setResults(episode);
      }
    })();
  }, [locationApi]);

  return (
    <div className="container">
      <div className="row my-4">
        <h1 className="text-center my-2">
          Location : <span className="text-danger">{info?.name}</span>
        </h1>
        <h4 className="text-center">Dimension : {info?.dimension}</h4>
        <h6 className="text-center">Type : {info?.type}</h6>
      </div>

      <div className="row">
        <div className="col-lg-3 col-12">
          <h5 className="text-center mb-4">Pick Location</h5>
          <InputGroup setEpisodeId={setLocationId} name="Locaton" total={126} />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page='/location/' results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
