import React from "react";
import './App.css';

const Numbers = ({exp,onKeyClick}) => {
    return(
        <>
            <div className="col-md-3 keys">
                <h3 className="mt-3 "onClick={onKeyClick}>{exp}</h3>
            </div>
        </>
    )
}

export default Numbers;
