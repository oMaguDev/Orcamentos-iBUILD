import styled from "styled-components";


export const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.primary.purple };

    font-size: 4rem;
    font-weight: 300;
`

export const H2 = styled.h2`
    color: ${({ theme }) => theme.colors.text.neutral600 };

    font-size: 2rem;
    font-weight: 300;

    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    ${(props) => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
`

export const H3 = styled.h3`
    color: ${({ theme }) => theme.colors.text.neutral600 };

    font-weight: 700;

    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
`

export const Parag = styled.p`

color: ${({ theme }) => theme.colors.text.neutral600 };

font-weight: 400;

${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}

`

export const ExplainingP = styled.p`

    color: ${({ theme }) => theme.colors.text.main};
    font-weight: 400;
    font-size: 0.8rem;
    

    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

    `