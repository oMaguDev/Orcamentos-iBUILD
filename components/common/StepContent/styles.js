import styled from "styled-components";


export const TitleContainer = styled.div`

    text-align: left;

    color: ${({ theme }) => theme.colors.primary.purple};

    h4 {
        margin: 0;
        font-weight: 400;
    }
    
    h2 {
        margin: 0 0 10px;
        font-size: 2.2rem;
    }
    
    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.text.main};
        font-weight: 400;
        font-size: 0.8rem;
    }

`

export const StepContentContainer = styled.div`

    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    // justify-content: flex
    margin:  100px;
    width: 450px;

    z-index: 0;

`