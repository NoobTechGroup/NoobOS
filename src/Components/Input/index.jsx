// Dependencies
import React from "react";
import { useState } from 'react'
// Components

// Styles
import { StyledInput } from "./styles";
import IconSVG from 'Components/Icon/IconSVG'

// handle prop renders the placeholder for certain input

const Input = ({ type, handle }) => {

    const [value, setValue] = useState("");

    let [isPasswordShown, setIsPasswordShown] = useState(false);

    const containerStyle = { width: "25%", overflow: "hidden", borderRadius: "0.3rem", display: "inline-block", backgroundColor: "#111" }


    return (

        <div style={containerStyle}>
            <StyledInput
                type={isPasswordShown ? "text" : type}
                placeholder={handle}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {type === "password" &&


                <div style={{ display: "inline-block", color: "#fff", position: "relative", top: "0.2rem" }} onMouseDown={e => setIsPasswordShown(true)} onMouseUp={e => setIsPasswordShown(false)}><IconSVG name="eye" size='list' color="white" /></div>

            }


        </div >
    );
};

export default Input;