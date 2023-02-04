import React from 'react'

const Pagination = ({ numbersPage, setPage, location, RESIDENTS_PERPAGE }) => {
    return (
        <ul>
            {
                numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}> {numberPage}</li>)
            }
        </ul>
    )
}

export default Pagination