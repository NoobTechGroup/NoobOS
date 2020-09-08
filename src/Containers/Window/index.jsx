// Dependencies
import React, { Component } from "react";

import { WindowStyles } from "./styles";

// Components
import Content from "Components/Content";
import FolderHeader from "Components/FolderHeader";

export default class Window extends Component {
    render () {
        return (
            <WindowStyles>
            <FolderHeader 
            Name= "Home"
            Name2= "Documents"
            Name3= "Programming"
            />
            <Content 
            content= ""
            />
            </WindowStyles>
        )
    }
}
