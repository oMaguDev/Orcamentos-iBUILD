import { StyledToggle } from "./styles";
import React from 'react';

const ToggleButton = ({ value, onChange }) => {
  return (
    <StyledToggle
      type="checkbox"
      checked={value === 'Y'}
      onChange={(e) => onChange(e.target.checked ? 'Y' : 'N')}
    />
  );
};

export default ToggleButton;
