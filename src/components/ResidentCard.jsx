import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({ residentUrl }) => {
    const [residentinfo, setResidentinfo] = useState()

    useEffect(() => {

        axios.get(residentUrl)
            .then((res) => setResidentinfo(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <article>
            <div>
                <img src={residentinfo?.image} alt="" />
            </div>
            <section>
                <h3>{residentinfo?.name}</h3>
                <ul>
                    <li><span>Specie: </span>{residentinfo?.species}</li>
                    <li><span>Origin: </span>{residentinfo?.origin.name}</li>
                    <li><span>Episodes where apppears: </span>{residentinfo?.episode.length}</li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard