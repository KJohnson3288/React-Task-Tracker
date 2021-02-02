import React, { useState } from 'react';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ title, onAdd }) => {

    const [buttonText, setButtonText] = useState("Add");
    const [btnClass, setBtnClass] = useState("btn btn-outline-success")

    const switchButton = () => {
        onAdd();
        if(buttonText === "Add") {
            setButtonText("Close")
            setBtnClass("btn btn-outline-warning")
        } else {
            setButtonText("Add")
            setBtnClass("btn btn-outline-success")
        }
        
    }

    return (
        <div>
            <div className="header">
                <h1>{title}</h1>
                <button className={btnClass} onClick={switchButton}> {buttonText} </button>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header
