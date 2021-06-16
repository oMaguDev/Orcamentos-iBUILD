import styled from "styled-components";


// export const RadioContainer = styled.label`
//     display: block;
//     position: relative;
//     padding-left: 35px;
//     margin-bottom: 12px;
//     cursor: pointer;
//     font-size: 22px;
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
// `

// export const StyledRadio = styled.input`

//     background-color: chartreuse;

//     &:checked ~ span:after {
//         display: block
//     }
// `

// export const Checkmark = styled.span`

//     &:after {
//         top: 9px;
// 	left: 9px;
// 	width: 8px;
// 	height: 8px;
// 	border-radius: 50%;
// 	background: white;
//     }
// `



export const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  margin: auto;

  display: flex;
  ${(props) => props.row ? `
    align-items: center;
    justify-content: flex-start;
  ` : 'flex-direction: column;'}
  
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
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