import styled from "styled-components";


export const StatusBoxContainer = styled.div`

z-index: 10;

    background: #ccc;
    width: 350px;
    height: 100px;

    position: fixed;
    bottom: 50px;
    right: 80px;

`

export const Status = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    background: chartreuse;
    width: 100%;
    height: 45%;

    color: red;
`

export const StatusNumbers = styled.div`
    
    background: inherit;
    width: 100%;
    height: 55%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px;
`

export const ValueBoxes = styled.div`

    display: flex;
    flex-direction: column;
    align-items: left;

    height: 100%;
    width: 33%;

    margin-right: ${(props) => props.last ? '' : '5px'};

    .valueTag {
        margin: 0 0 5px;
        font-size: 0.65rem;
        height: 20%;
        
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    
    .value {
        background: #fff;
        
        // width: 90%;
        height: 70%;
        font-size: 0.9rem;

        // padding: 5px;
        // margin: 0 5px;

        
        display: flex;
        align-items: center;
        justify-content: center;
    }
`