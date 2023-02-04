import React from 'react'

const ResidentForm = ({ handleSubmit }) => {
    return (

        <form onSubmit={handleSubmit}>
            <input id='idLocation' type="text" placeholder='type a location id' />
            <button>Search</button>
        </form>
    )
}

export default ResidentForm