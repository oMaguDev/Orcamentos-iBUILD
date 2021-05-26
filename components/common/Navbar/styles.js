import styled from "styled-components";


export const StyledNav = styled.nav`
    height: 50px;
    width: 550px;

    color: ${({ theme }) => theme.colors.text.white };
    background: ${({ theme }) => theme.colors.primary.purplePink };

`

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-style: inset;
    border-style: solid;
    border-width: 50px 15px 0 0;
    border-color: ${({ theme }) => theme.colors.primary.purplePink } transparent transparent transparent;

`