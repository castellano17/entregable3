import React from 'react'
import './styles/Pagination.css'

const Pagination = ({ numbersPage, setPage, location, RESIDENTS_PERPAGE, currentPage, setCurrentPage }) => {
    return (
        <ul className="pagination">
            {
                numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <li className={currentPage === numberPage ? 'selected' : ''} onClick={() => { setPage(numberPage); setCurrentPage(numberPage); }} key={numberPage}> {numberPage}</li>)
            }
        </ul>
    )
}


export default Pagination