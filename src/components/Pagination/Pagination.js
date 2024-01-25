import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.scss";

const Pagination = ({ info, pageNum, setPageNum }) => {
  const [width, setWidth] = useState(window.innerWidth);
  // console.log(info?.pages);
  // console.log(width);

  useEffect(() => {
    const handleResize = () => () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReactPaginate
      className={` pagination justify-content-center gap-4 my-4`}
      pageCount={info?.pages}
      forcePage={pageNum === 1 ? 0 : pageNum - 1}
      previousLabel="Prev"
      nextLabel="Next"
      previousLinkClassName={`${classes.customPrevLink}`}
      nextLinkClassName={`${classes.customNextLink}`}
      previousClassName={`btn btn-primary ${classes.prev}`}
      nextClassName={`btn btn-primary ${classes.next}`}
      pageClassName={`page-item ${classes.paginate}`}
      pageLinkClassName="page-link"
      activeClassName="active"
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      onPageChange={(data) => setPageNum(data.selected + 1)}
    />
  );
};

export default Pagination;

/*
const next = () => {
    console.log(pageNum);
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  const prev = () => {
    console.log(pageNum);
    if (pageNum > 1) {
      setPageNum((prevPageNum) => prevPageNum - 1);
    } else {
      return;
    }
  };

  return (
     <div className="container d-flex justify-content-center gap-5 my-5">
      <button
        className={`btn btn-primary ${pageNum === 1 ? "disabled" : ""}`}
        onClick={prev}
      >
        Prev
      </button>
      <button className="btn btn-primary" onClick={next}>
        Next
      </button>
    </div>
  );
 */
