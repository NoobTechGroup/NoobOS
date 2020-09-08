import React from 'react'

// Logos/Img

import IconImg from "assets/Icons/svgsample.svg";
import NavImg from "assets/Icons/NavImg.svg";
import ListImg from "assets/Icons/svgsample.svg";
import SearchImg from "assets/Icons/svgsample.svg";
import SettingsImg from "assets/Icons/svgsample.svg";

import {
    Box,
        Icon,
        ArrowPanel,
            ArrowBack,
            ArrowForward,
        ContentPanel,
            NavForward,
            FolderName,
            NavBack,
        OptionsPanel,
            OptionIcon,
        SizePanel,
            Minimize,
            Restore,
            Close, 
} from "./styles";


const FolderHeader = (props) => {
    return (
        <div>
            <Box>
                
                <Icon>
                    <img src={IconImg} alt="App icon"/>
                </Icon>
                
                <ArrowPanel>
                    <ArrowBack> 
                        <img src={NavImg} alt="Nav"/>   
                    </ArrowBack>
                    
                    <ArrowForward>
                        <img src={NavImg} alt="Nav"/>   
                    </ArrowForward>
                </ArrowPanel>
                
                <ContentPanel>
                    <NavBack>
                        <img src={NavImg} alt="Nav"/>
                    </NavBack>
                    <FolderName> 
                        {props.Name}
                    </FolderName>
                    <FolderName>
                        {props.Name2}
                    </FolderName>
                    <FolderName>
                        {props.Name3}
                    </FolderName>
                    <NavForward>
                        <img src={NavImg} alt="Nav"/>
                    </NavForward>
                </ContentPanel>        
                
                <OptionsPanel>
                    <OptionIcon>  
                        <img src={IconImg} alt="Search"/>
                    </OptionIcon>
                    <OptionIcon>
                        <img src={IconImg} alt="List"/>
                    </OptionIcon>
                    <OptionIcon>
                        <img src={IconImg} alt="Settings"/>
                    </OptionIcon>
                </OptionsPanel>
                <SizePanel>
                    <Minimize>🗕</Minimize>
                    <Restore>□</Restore>
                    <Close>✖</Close>
                </SizePanel>
                
            </Box>
        </div>
    );
}

export default FolderHeader;
