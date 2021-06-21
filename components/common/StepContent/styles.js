import styled from "styled-components";


export const StepContentContainer = styled.div`

    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin:  20px;
    width: 450px;
    min-width: 450px;

    z-index: 0;

    ${(props) => props.isCheckout ? `
        width: 70%;
        align-items: center;
    ` : ''}

`

export const StepImageContainer = styled.div`

    height: 100%;
    width: 400px;


`

export const MiddleContainer = styled.div`

    width: 100%;
    // height: 300px;
    min-height: 200px;
    max-height: 300px;

    margin: 20px 0;


    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    // flex-wrap: wrap;

    overflow: auto;

`

export const SlideContainer = styled.div`

    width: 100%;
    max-height: calc(100vh - 200px);

    display: flex;
    align-items: center;
    justify-content: space-evenly;

`