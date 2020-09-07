import React from 'react'

import IconImg from "assets/Icons/svgsample.svg";

import NavImg from "assets/Icons/NavImg.svg";
import SearchImg from "assets/Icons/svgsample.svg";
import SettingsImg from "assets/Icons/svgsample.svg";
import ListImg from "assets/Icons/svgsample.svg";

import {
    Box,
    Icon,
    ArrowPanel,
    ArrowBack,
    ArrowForward,
    NavBack,
    ContentPanel,
    FolderLoc,
    NavForward,
    SearchPanel,
    Searcher,
    List,
    Settings,
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
                    <FolderLoc> 
                        {props.title1}
                    </FolderLoc>
                    <FolderLoc>{props.title2}</FolderLoc>
                    <FolderLoc>{props.title3}</FolderLoc>
                    <NavForward>
                        <img src={NavImg} alt="Nav"/>
                    </NavForward>
                </ContentPanel>        
                
                <SearchPanel>
                    <Searcher>  
                        <img src={IconImg} alt="Search"/>
                    </Searcher>
                    <List>
                        <img src={IconImg} alt="List"/>
                    </List>
                    <Settings>
                        <img src={IconImg} alt="Search"/>
                    </Settings>
                </SearchPanel>
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