import React from "react";
import "./Cards.css"

export const Card = (props) => (

        <div className="card-container">
            
            <img src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
            <p>{props.monster.name}</p>
            <p>{props.monster.email}</p>

        </div>
    
)