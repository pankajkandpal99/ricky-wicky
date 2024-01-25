import React, { useEffect, useState } from "react";
import Filter from "../components/Filters/Filter";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";

const HomePage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
    <>
      <h1 className="d-flex justify-content-center my-4">Characters</h1>
      <Search setSearch={setSearch} setPageNum={setPageNum} />
      <div className="container">
        <div className="row">
          <Filter
            setStatus={setStatus}
            setPageNum={setPageNum}
            setGender={setGender}
            setSpecies={setSpecies}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNum={pageNum} setPageNum={setPageNum} />;
    </>
  );
};

export default HomePage;
