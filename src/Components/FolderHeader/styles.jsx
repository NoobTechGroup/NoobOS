import styled from "styled-components";

// Containers / Boxes / Panels

export const ArrowPanel = styled.div`
display:flex;
margin: 0.3rem; 
`;

export const Box = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: #292929;
    font-size: .7rem;
    font-family: Verdana, sans-serif;
    color: #aaa;
    align-content: center;
    align-items: center;
    border-bottom: 0.05rem solid black; 
`;

export const ContentPanel = styled.div`
    display: flex;
    width: 65%;
    align-items: center;
`;

export const FolderName = styled.button`
    overflow:hidden; 
    white-space:nowrap; 
    text-overflow: ellipsis;
    color: #909090;
    outline: none;
    height: 2rem;
    max-width: 6rem;
    border: 0.01rem solid #171717;
    background-color: #181818;
    padding: 0.2rem 0.5rem;

    &:hover {
        color: #fff;
        transition: 0.4s;
        background-color: #307bad;
    }

    &:active {
        background-color: #307bad;
    }    
`;

export const OptionsPanel = styled.div`
    display:flex;
    margin-left: auto;
`;

export const SizePanel = styled(OptionsPanel)`
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.3rem;
    margin-right: .3rem; 
`;

//Icons

export const Icon = styled.div`
    object-fit: contain;
    height: 1.2rem;
    width: 1.2rem;
    padding: 0.2rem;
    margin: 0.3rem;
    border: none;
    background-color: none;   
}
`;

//Logos

export const IconImg = styled.img`
`;

export const NavImg = styled.img`
    transform: rotate(90deg);
    transform: [{ rotate: '90deg' }]     
`;

//Buttons / Navigation

    export const ArrowBack = styled(FolderName)`
    width: 2rem;
    &:hover {
        color: #fff;
        transition: 0.4s;
        background-color: #606060;
    }    
`;

export const ArrowForward = styled(ArrowBack)`
    transform: rotate(180deg);
`;

export const NavBack = styled(ArrowBack)`
    border-radius: none;
    height: 1.2rem;
    object-fit: contain;
    transform: rotate(90deg);
`;

export const NavForward = styled(NavBack)`
transform: rotate(270deg);
`;

export const OptionIcon = styled(Icon)` 
    margin: 0.1rem;
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    background-color: #101010;
    &:hover {
        transition: 0.4s;
        background-color: #a0a0a0;
    }
`;


export const Minimize = styled(FolderName)` 
    height: 2rem;
    width: 2rem;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    &:hover { 
        background-color: #f5b333;
    }

    &:active { 
        transition: 0.4s;
        background-color: #307bad;
    }
`;

export const Restore = styled(Minimize)` 
    &:hover {
        background-color: #78d687;
    }
`;

export const Close = styled(Minimize)` 
    &:hover {
        background-color: #f53333;
    }
`;
