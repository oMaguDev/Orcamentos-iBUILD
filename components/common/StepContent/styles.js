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