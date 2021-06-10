import styled from "styled-components";


export const ResourcesIndexColumn = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    // margin: 20px;
    padding: 15px 35px;

    width: 100%;

    &:first-child {
        border-right: solid 1px ${({ theme }) => theme.colors.text.neutral200 };
    }

`