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
  padding: 40px 5px 40px 5px;
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

const ImageToggleContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const ImageToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ selected }) => (selected ? '#7dd23a' : 'transparent')};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  background-color: ${({ selected }) => (selected ? 'rgba(125, 210, 58, 0.2)' : 'white')};

  &:hover {
    background-color: rgba(125, 210, 58, 0.1);
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;
`;

const ImageLabel = styled.span`
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
`;
const ImageInputOnly = styled.input`
  text-align: center;
`;

const ImageInputLabel = styled.label`
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items:center;
`;

const ImageInputSelect = styled.select`
  text-align: center;
`;

const ImageInput = ({ title, type, value, onClick, onChange, options }) => (
  <div>
    <ImageInputLabel>{title}</ImageInputLabel>
    {type === 'select' ? (
      <ImageInputSelect value={value} onClick={onClick} onChange={onChange}>
        <option value="">Selecione um valor</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </ImageInputSelect>
    ) : (
      <ImageInputOnly type={type} value={value} onClick={onClick} onChange={onChange} />
    )}
  </div>
);


const SectionWithHeader = ({ title, description="", children }) => (
  <Section>
    <SectionHeader>{title}</SectionHeader>
    <SectionDescription>{description}</SectionDescription>
    {children}
  </Section>
);

const SubSection = ({ title,description="", children }) => (
  <div>
    <SubSectionHeader>{title}</SubSectionHeader>
    <SectionDescription>{description}</SectionDescription>
    {children}
  </div>
);

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.8);;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the icon */
  left: 50%;
  margin-left: -150px;
  opacity: 0;
  transition: opacity 0.3s;

  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const TooltipIcon = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  background: yellow;
  border-radius: 50%;
  padding: 2px 5px;
  margin-left: 5px;

  &:hover + ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = ({ text }) => (
  <TooltipContainer>
    <TooltipIcon>!</TooltipIcon>
    <TooltipText>{text}</TooltipText>
  </TooltipContainer>
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
  ImageToggleContainer,
  ImageToggle,
  Image,
  ImageLabel,
  ImageInput,
  Tooltip
};
