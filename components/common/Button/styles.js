import styled from "styled-components";


export const StyledButton = styled.button`
    
    ${(props) => props.fullWidth ? 'width: 100%;' : ''}
    ${(props) => props.width ? `width: ${props.width};` : ''}
    height: 48px;
    padding: 15px;
    
    font: inherit;
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    ${(props) => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
    
    border: none;
    border-radius: 24px;
    
    cursor: pointer;
    
    background: ${({ theme }) => theme.colors.primary.pink };
    color: ${({ theme }) => theme.colors.text.white };
    
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    
    ${(props) => !props.secondary ? '' : `
        border: 1px solid ${props.theme.colors.primary.pink};
        color: ${props.theme.colors.primary.pink};
        background: inherit;
    `}

    ${(props) => !props.tertiary ? '' : `
        color: ${props.theme.colors.primary.pink};
        background: inherit;
    `}


    ${(props) => !props.disabled ? '' : `
        color: ${props.theme.colors.text.neutral400};
        background: ${props.theme.colors.text.neutral400};
        cursor: not-allowed;
    `}

    ${(props) => !props.small ? '' : `
        height: 48px;
        width: 120px;
    `}
    ${(props) => !props.big ? '' : `
        height: 64px;
        width: 270px;
    `}
`