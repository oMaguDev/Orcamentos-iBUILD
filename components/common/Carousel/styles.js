import styled from "styled-components";


export const CarouselButtonContainer = styled.div`

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.primary.purple };


    position: absolute;
    z-index: 15;

    bottom: 30px;

    ${(props) => !props.left ? '' : `
        left: 300px;
    `}

    ${(props) => !props.right ? '' : `
        right: 40px;
    `}


`

export const CarouselButton = styled.button`

    cursor: pointer;

    background: none;
    border: 3px solid ${({ theme }) => theme.colors.primary.purple };


    height: 30px;
    width: 30px;
    
    &:hover {
        background: #eee;
    }
    border-radius: 50%;

    margin: 10px;

`