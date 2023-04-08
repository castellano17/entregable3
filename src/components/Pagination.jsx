import React from "react";
import "./styles/Pagination.css";

const Pagination = ({
  numbersPage,
  setPage,
  location,
  RESIDENTS_PERPAGE,
  currentPage,
  setCurrentPage,
}) => {
  const MAX_PAGES = 4;
  const startPage = Math.max(currentPage - MAX_PAGES, 1);
  const endPage = Math.min(
    currentPage + MAX_PAGES,
    numbersPage(location, RESIDENTS_PERPAGE).length
  );

  return (
    <ul className="pagination">
      {/* Botón "anterior" */}
      {currentPage > 1 && (
        <li
          className="pagination__page"
          onClick={() => {
            setPage(currentPage - 1);
            setCurrentPage(currentPage - 1);
          }}
          key="previous"
        >
          {"<"}
        </li>
      )}

      {/* Páginas */}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => i + startPage
      ).map((numberPage) => (
        <li
          className={`pagination__page ${
            currentPage === numberPage && "selected"
          }`}
          onClick={() => {
            setPage(numberPage);
            setCurrentPage(numberPage);
          }}
          key={numberPage}
        >
          {numberPage}
        </li>
      ))}

      {/* Botón "siguiente" */}
      {currentPage < numbersPage(location, RESIDENTS_PERPAGE).length && (
        <li
          className="pagination__page"
          onClick={() => {
            setPage(currentPage + 1);
            setCurrentPage(currentPage + 1);
          }}
          key="next"
        >
          {">"}
        </li>
      )}
    </ul>
  );
};

export default Pagination;
