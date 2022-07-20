import React from 'react';

import iconStart from "../img/iconStar.png"



export default function Card(props) {
    console.log(props)
    const {rate ,rateNumber , imgAvatar , location , money ,status  } = props ; 
    return (
        <div className="card">
            <button className='card__btn'>{status}</button>
            <img src={imgAvatar} className="card--image" />
            <div className="card--stats">
                <img src={iconStart} className="card--star" />
                <span>{rate}</span>
                <span className="gray">({rateNumber}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From {money}</span> / person</p>
        </div>
    )
}