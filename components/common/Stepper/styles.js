import styled from "styled-components";


export const Background = styled.div`

    width: 250px;
    height: max(calc(100vh - 50px), 650px);
    // height: 900px;
    min-height: 650px;
    
    background: ${({ theme }) => theme.colors.primary.purple};
    color: ${({ theme }) => theme.colors.text.white};
    
    overflow: visible;
    z-index: 1;
    
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align:right;
    
    `

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-style: inset;
    border-style: solid;
    border-width: max(calc(100vh - 50px), 650px) 200px 0 0;
    // border-width: 650px 200px 0 0;
    border-color: ${({ theme }) => theme.colors.primary.purple} transparent transparent transparent;
    
    `

export const StepperContainer = styled.div`

margin-top: 10px;

    display: block;
    z-index: 5;

    width: 350px;
    // text-align: left;

    // transform: translateX(24px);

`

export const StepDot = styled.div`

    width: 12px;
    height: 12px;

    border-radius: 50%;
    background-color: chartreuse;

    z-index: 2;

    position: absolute;

    // ${(props) => props.index > 0 ? `transform: translateY(-${props.index + 1}px)` : ''}

    `
    
    export const StepLine = styled.div`
    
    width: 0;
    height: 40px;
    
    border: none;
    border-left: solid 5px #ccc;
    opacity: 0.8;
    
    
    
    transform: translate(3.5px,5px);
    // transform: translateX(3.5px)
    `
    
    export const StepDotsContainer = styled.div`
    
    position: relative;
    // height: 900px;
    height: 100%;
    // width: 200px;
    align-items: center;
    
    
    `
    
    export const Label = styled.label`
    
    ${(props) => props.first ? '' : 'margin-top: 22px;' }
    
    font-size: 0.8rem; 
    // width: 200px;
    
    transform: translateY(-5px);
`