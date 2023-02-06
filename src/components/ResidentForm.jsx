import React from 'react'
import './styles/ResidentForm.css'

const ResidentForm = ({ handleSubmit }) => {
    return (

        <form className='header' onSubmit={handleSubmit}  >
            <input id='idLocation' type="text" placeholder='Type a location id' />
            <button>Search</button>
        </form>
    )
}

export default ResidentForm