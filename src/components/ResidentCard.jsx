import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/ResidentCard.css'

const ResidentCard = ({ residentUrl }) => {
    const [residentinfo, setResidentinfo] = useState()

    useEffect(() => {

        axios.get(residentUrl)
            .then((res) => setResidentinfo(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <article className='residentCard'>
            <div className='residentCard__img'>
                <img src={residentinfo?.image} alt="" />
            </div>
            <div className="residentCard__status">
                <div className={`residentCard__status-circle ${residentinfo?.status}`}></div>
                <h4 className='residentCard__status-name'>{residentinfo?.status}</h4>
            </div>
            <section className='residentCard__info'>
                <h3 className='residentCard__name'>{residentinfo?.name}</h3>
                <hr className='residentCard__line' />
                <ul className='residentCard__list'>
                    <li className='residentCard__item'><span>Specie: </span>{residentinfo?.species}</li>
                    <li className='residentCard__item'><span>Origin: </span>{residentinfo?.origin.name}</li>
                    <li className='residentCard__item'><span>Episodes where apppears: </span>{residentinfo?.episode.length}</li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard