import styled from "styled-components";

const Section = styled.section`
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const InputText = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputNumber = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  margin-right: 15px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export {
  Section,
  Label,
  InputText,
  InputNumber,
  Select,
  RadioGroup,
  RadioLabel,
  SubmitButton,
};
