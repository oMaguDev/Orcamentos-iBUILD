import styled from "styled-components";


export const TrapezoidsContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;


    // position: absolute;

`

export const HomeStylePic = styled.img`

    width: 220px;
    height: 190px;

    border: solid 2px #fff;
    margin: 10px;

    &:hover {
        border: solid 2px ${({ theme }) => theme.colors.primary.lightGreen };
    }

`

export const HomeStylePicContainer = styled.div`

    // display: flex;
    // flex-direction: column;
    // align-items: center;

    P {
        width: 100%;
    }

    ${(props) => props.imageSrc ? `
    
        div {
            width: ${(props) => props.width ? `${props.width}` : '200px'};
            height: ${(props) => props.height ? `${props.height}` : '170px'};
            // border: solid 2px #fff;
            margin: 10px;
            background-image: url(${props.imageSrc});

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }
    
    
    ` : ''}
    
    div > div {
        cursor: pointer;

        width: ${(props) => props.width ? `${props.width}` : '200px'};
        height: ${(props) => props.height ? `${props.height}` : '200px'};
        margin: 0 0 10px;
        // transform: translateX(-10px);
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
            background: ${({ theme }) => theme.colors.primary.fadedLightGreen };
        }
        ${(props) => !props.active ? `` : `
        background: ${props.theme.colors.primary.fadedGreen };
        &:hover {
            background: ${props.theme.colors.primary.fadedGreen };
        }
        `}
        
        img {
            height: 25px;
            width: 25px;
            color: #fff;
        }

    }

    // img {
    //     width: ${(props) => props.width ? `${props.width}` : '200px'};
    //     height: ${(props) => props.height ? `${props.height}` : '200px'};

    //     border: solid 2px #fff;
    //     margin: 10px;

    //     transition-duration: 0.2s;

    //     &:hover {
    //         // border: solid 2px ${({ theme }) => theme.colors.primary.lightGreen };
    //         margin: 0;
    //     }
    // }

`