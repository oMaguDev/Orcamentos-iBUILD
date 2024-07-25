import React, { useState } from "react";
import {
  Section,
  Label,
  InputText,
  InputNumber,
  Select,
  RadioGroup,
  RadioLabel,
  SubmitButton,
} from "../components/Inputs";

export default function Home() {
  const [formData, setFormData] = useState({
    text: "",
    number: "",
    select: "",
    radio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Section>
        <Label htmlFor="text">Text Input</Label>
        <InputText
          type="text"
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </Section>

      <Section>
        <Label htmlFor="number">Number Input</Label>
        <InputNumber
          type="number"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </Section>

      <Section>
        <Label htmlFor="select">Select Input</Label>
        <Select
          id="select"
          name="select"
          value={formData.select}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Section>

      <Section>
        <Label>Radio Input</Label>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              name="radio"
              value="radio1"
              checked={formData.radio === "radio1"}
              onChange={handleChange}
            />
            Radio 1
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="radio"
              value="radio2"
              checked={formData.radio === "radio2"}
              onChange={handleChange}
            />
            Radio 2
          </RadioLabel>
        </RadioGroup>
      </Section>

      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
}
