import { StyledButton } from "./styles"


const Button = ({ children, secondary, tertiary, disabled, small, fontSize, fontWeight, fullWidth, onClick, margin }) => {
    return (
        <StyledButton
            secondary={secondary}
            tertiary={tertiary}
            disabled={disabled}
            small={small}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fullWidth={fullWidth}
            onClick={onClick}
            margin={margin}
        >
            { children }
        </StyledButton>
    )
}

export default Button