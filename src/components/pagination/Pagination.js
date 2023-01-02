import React from "react";
// import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentProducts,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            style={{
              width: "40px",
              height: "40px",
              fontFamily: "inherit",
              margin: "0 10px",
              background: "transparent",
              color: "#eee",
              borderRadius: "6px",
              borderColor: "#eee",
              color: "black",
              cursor: "pointer",
            }}
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentProducts ? `active` : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
