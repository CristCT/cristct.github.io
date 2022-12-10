import React from "react";
import './Toggle.css'

const Toggle = (props) => {
    const themeToggler = () => {
        props.theme === "light" ? props.setTheme("dark") : props.setTheme("light");
    }

    return (
        <div className='toggle-container' onClick={themeToggler}>
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
            <div className="toggle-container__button"
                style={{
                    transform: props.theme === "light" ? "translateX(0)" : "translateX(100%)",
                    background: props.theme === "light" ? "yellow" : "black",
                }}>
            </div>
        </div>
    )
}

export default Toggle;