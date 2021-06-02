import styled from "styled-components";


export const Layout = styled.div`

    height: 100%;
    width: 100%;
    // max-width: 900px;
    // margin: auto;
    padding: 50px;

    min-height: 100vh;
    min-width: 100vw;

`

export const Flex = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${(props) => props.column ? 'flex-direction: column;' : ''}
    ${(props) => props.fullHeight ? 'height: 100%;' : ''}

    ${(props) => props.top ? `top: ${props.top};` : ''}
    ${(props) => props.left ? `left: ${props.left};` : ''}
    ${(props) => props.bottom ? `bottom: ${props.bottom};` : ''}
    ${(props) => props.right ? `right: ${props.right};` : ''}
    ${(props) => props.flex ? `flex: ${props.flex};` : ''}
    ${(props) => props.transform ? `transform: ${props.transform};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}
    ${(props) => props.height ? `height: ${props.height};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.textAlign ? `text-align: ${props.textAlign};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
`


export const Box = styled.div`

    ${(props) => props.width ? `width: ${props.width};` : ''}

    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

    ${(props) => props.textAlign ? `text-align: ${props.textAlign};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}

    ${(props) => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minWidth ? `min-width: ${props.minWidth};` : ''}

`

export const CarouselContainer = styled.div`

    

`

export const TitleContainer = styled.div`

    text-align: left;

    color: ${({ theme }) => theme.colors.primary.purple};

    h4 {
        margin: 0;
        font-weight: 400;
        font-size: 0.75rem;
        letter-spacing: 2px;
    }
    
    h2 {
        margin: 0 0 10px;
        font-size: 2.2rem;
    }
    
    h1 {
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

export const LogoMedium = styled.img`

    height: 55%;
    width: 100%;

`