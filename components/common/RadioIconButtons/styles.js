import styled from "styled-components";


export const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  position: relative;

`;

export const RadioButtonLabel = styled.label`
  position: absolute;0
  top: 25%;
  left: 4px;
  width: 100px;
  height: 100px;
//   background: white;
  border: 2px solid #bebebe;
  
`;
export const RadioButton = styled.input`
  cursor: pointer;  


  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #eee;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
    //   background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: ${props.theme.colors.primary.green};
      border: 2px solid #bebebe;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        // box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        // background: white;
      }
    }
  `}
`;