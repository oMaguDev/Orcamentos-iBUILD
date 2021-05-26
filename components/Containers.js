import styled from "styled-components";


export const Layout = styled.div`

    height: 100%;
    width: 100%;
    max-width: 900px;
    margin: auto;

    min-height: 100vh;

`

export const Flex = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${(props) => props.column ? 'flex-direction: column;' : ''}
    ${(props) => props.fullHeight ? 'height: 100%;' : ''}

    ${(props) => props.flex ? `flex: ${props.flex};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}
    ${(props) => props.height ? `height: ${props.height};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.flex ? `flex: ${props.flex};` : ''}
    ${(props) => props.textAlign ? `text-align: ${props.textAlign};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
`

export const CarouselContainer = styled.div`

    

`