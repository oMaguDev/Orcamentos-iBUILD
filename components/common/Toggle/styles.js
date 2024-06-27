import styled from "styled-components";

export const StyledToggle = styled.input`
  width: 50px;
  height: 25px;
  appearance: none;
  background-color: ${({ theme, checked }) => (checked ? theme.colors.primary.purple : theme.colors.text.neutral400)};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &::before {
    content: '';
    width: 23px;
    height: 23px;
    background-color: ${({ theme }) => theme.colors.text.white};
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: ${({ checked }) => (checked ? '26px' : '1px')};
    transition: left 0.3s;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.text.neutral400};
    cursor: not-allowed;
  }
`;
