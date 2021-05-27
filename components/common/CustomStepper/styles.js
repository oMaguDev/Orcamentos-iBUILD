import styled from "styled-components";


export const StepperDot = styled.div`

    width: 10px;
    height: 10px;

    border-radius: 50%;
    border: 2px solid #fff;

    ${(props) => props.stepCompleted ? `
        background: ${props.theme.colors.primary.green };
        border: none;
    ` : ''}

    ${(props) => props.currentStep ? `
        background: #fff;
        border: none;
    ` : ''}

`

export const StepperLine = styled.div`

    width: 0;
    height: 25px;

    border: none;
    border-left: 2px solid ${({ theme }) => theme.colors.primary.lightGrey};

`


export const StepTitle = styled.div`

    margin: 0 0 0 10px;
    font-size: 0.8rem;
    font-weight: 400;

    margin-bottom: 17px;

`