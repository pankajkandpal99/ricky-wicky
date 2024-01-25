import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filters/Category/InputGroup";

// display episodeId based characters - multiple characters available there in single episodeId
const Episodes = () => {
  const [episodeId, setEpisodeId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState("");

  const episodeApi = `https://rickandmortyapi.com/api/episode/${episodeId}`;

  useEffect(() => {
    (async function () {
      const response = await fetch(episodeApi);
      const data = await response.json();
      if (data) {
        // console.log(data);                  // here we have data property of each episodeId and each episodeId will have multiple characters then we have to go map of data.characters, then we got multiple characters and fetch the data of each characters which is belongs to Card component..
        setInfo(data);
        const episode = await Promise.all(
          data.characters.map((char) => {    // map to the each character in characters array.
            // console.log(char);
            return fetch(char).then((res) => res.json()); // return the character api which is receive the Card component..
          })
        );
        setResults(episode);
      }
    })();
  }, [episodeApi]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center my-2">
          Episode : <span className="text-danger">{info?.name}</span>
        </h1>
        <h4 className="text-center">Air Date : {info?.air_date}</h4>
      </div>

      <div className="row">
        <div className="col-lg-3 col-12">
          <h5 className="text-center mb-4">Pick Episodes</h5>
          {/* You can access the list of episodes by using the /episode endpoint. */}
          <InputGroup setEpisodeId={setEpisodeId} name="Episode" total={51} />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page='/episodes/' results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
