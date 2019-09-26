import React from 'react'

import './card.style.css'

export const Card = (props) => (
    <div className="card-container">
        <img 
            alt="robos" 
            src={`https://robohash.org/${ props.robo.id }?set=set1&size=180x180`}     
        />
        <h2>{props.robo.name}</h2>
        <p>{props.robo.email}</p>        
    </div>
)