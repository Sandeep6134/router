import React from "react";
import "./search-bar.css";

export const SearchBox = (props) => {
    return(
        <div className="search-div">
            <input className="search" type="search" placeholder={props.placeholder} onChange={props.handleChange}></input>
        </div>
)}