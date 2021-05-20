import styled from "styled-components";


export const Layout = styled.div`

    width: 100%;
    max-width: 900px;
    margin: auto;

`

export const Flex = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${(props) => props.column ? 'flex-direction: column;' : ''}

    ${(props) => props.margin ? `margin: ${props.margin}` : ''}
    ${(props) => props.width ? `width: ${props.width}` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth}` : ''}
    ${(props) => props.flex ? `flex: ${props.flex}` : ''}
    ${(props) => props.textAlign ? `text-align: ${props.textAlign}` : ''}
`