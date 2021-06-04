import styled from "styled-components";




export const IconContainer = styled.div`

  cursor: pointer;

  margin-bottom: 10px;  

  background: ${({ theme }) => theme.colors.primary.lightGrey };
  height: 180px;
  width: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    padding: 60px 25px;
  }
  
  &:hover {
      background: ${({ theme }) => theme.colors.primary.lightGreen };
    }
    
  ${(props) => props.active ? `
    background: ${props.theme.colors.primary.green };
  ` : ''}
`

export const OptionItem = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 200px;

  margin: 15px;

  &:first-child, &:last-child {
    margin: 15px 0;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`

export const OptionsContainer = styled.div`

  margin:  20px 0;
  padding-bottom: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  border-bottom: solid 2px ${({ theme }) => theme.colors.text.neutral400 };
`





// export const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
//   // margin: auto;

//   display: flex;
//   justify-content: space-evenly;
// `;

// export const Item = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
//   // height: 48px;

// `;

// export const RadioButtonLabel = styled.label`

// width: 100px;
// height: 100px;
  
//   `;
  
//   export const RadioButton = styled.input`
//   cursor: pointer;  
  
//   background: ${({ theme }) => theme.colors.primary.lightGrey };

//   opacity: 0;
//   z-index: 1;
//   // border-radius: 50%;
//   width: 100px;
//   height: 100px;

//   margin-right: 10px;
//   &:hover ~ ${RadioButtonLabel} {
//     background: #eee;
//     &::after {
//       content: "";
//       display: block;
//       border-radius: 50%;
//       width: 100px;
//       height: 100px;
//       margin: 6px;
//     }
//   }
//   ${(props) =>
//     props.checked &&
//     ` 
//     &:checked + ${RadioButtonLabel} {
//       background: ${props.theme.colors.primary.green};
//       border: 2px solid #bebebe;
//       &::after {
//         content: "";
//         display: block;
//         border-radius: 50%;
//         width: 12px;
//         height: 12px;
//         margin: 6px;
//         // box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
//         // background: white;
//       }
//     }
//   `}
// `;