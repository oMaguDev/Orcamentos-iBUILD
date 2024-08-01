import styled from "styled-components";

const Section = styled.section`
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 3px solid #0070f3;
`;

const SectionHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 1.75em;
  font-weight: bold;
  background-color: #e0e0e0;
  padding: 20px 5px 20px 5px;
`;

const SectionDescription = styled.p`
  margin-bottom: 20px;
`;

const SubSectionHeader = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.5em;
  font-weight: bold;
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

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SwitchInput = styled.input`
  display: none;
`;

const SwitchSlider = styled.span`
  position: relative;
  width: 50px;
  height: 24px;
  background-color: ${props => (props.checked ? '#4caf50' : '#ccc')};
  border-radius: 34px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
    transform: ${props => (props.checked ? 'translateX(26px)' : 'translateX(0)')};
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const SectionWithHeader = ({ title, description, children }) => (
  <Section>
    <SectionHeader>{title}</SectionHeader>
    <SectionDescription>{description}</SectionDescription>
    {children}
  </Section>
);

const SubSection = ({ title, children }) => (
  <div>
    <SubSectionHeader>{title}</SubSectionHeader>
    {children}
  </div>
);

export {
  Section,
  Label,
  InputText,
  InputNumber,
  Select,
  RadioGroup,
  RadioLabel,
  SubmitButton,
  SectionWithHeader,
  SubSection,
  SwitchContainer,
  SwitchLabel,
  SwitchInput,
  SwitchSlider,
  Column,
  Row,
};
