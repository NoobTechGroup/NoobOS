import React from 'react'

// Styles
import {
    Content,
} from "./styles";



const FolderWindow = (props) => {
   
    return (
        <div>
            <Content>{props.content}
                              
            </Content>
        </div>
    )
}

export default FolderWindow;