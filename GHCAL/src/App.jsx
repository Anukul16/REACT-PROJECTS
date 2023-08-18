import React, { useState } from "react";
import './App.css'
import Keys from "./Keys";
import Numbers from "./Numbers";

const App = () => {
    const [value,setValue]=useState('')
    const handleClick = (keyValue) => {
        if (keyValue === "=") {
            try {
                const result = eval(value);
                setValue(result);
            } catch (error) {
                setValue("Error");
            }
        } else if (keyValue === "AC") {
            setValue("");
        } else {
            setValue((prevValue) => prevValue + keyValue);
        }
    };
    
    return(
        <>
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-sm-12 d-flex justify-content-center mt-5">
                        <div className="main-div ">
                            <div className="row">
                                <div className="col-md-12 inputbox">
                                    <input type="text" name="" id="" value={value} />
                                </div>
                            </div>
                            <div className="row ps-3 pe-3">
                                {Keys.map((value)=>(
                                    <Numbers
                                    key={value.id}
                                    exp={value.exp} 
                                    onKeyClick={()=> handleClick(value.exp)}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;