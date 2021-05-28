import styled from "styled-components"

export const CarouselItem = styled.div`
    height: 250px;
    background: #343434;
    border: solid 1px #444;


    display: flex;
    align-items: center;
    justify-content: center;
`

export const Dots = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    
    background: ${({ theme }) => theme.colors.primary.purplePink};
    opacity: 1;

    margin-right: 12px;

    ${props => (props.isActive ? `background: ${props.theme.colors.primary.green};` : "")}
`


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

    padding: 0;
    
    &:hover {
        background: #eee;
    }
    border-radius: 50%;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
`