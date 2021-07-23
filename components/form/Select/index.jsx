import { Box } from "../../Containers"
import { AssistentP, SelectContainer, StyledSelect } from "./styles"


const Select = ({
    id = 'select_id',
    type = 'text',
    value,
    onChange,
    placeholder,
    label,
    Icon,
    iconIsButton,
    onIconButtonClick,
    success,
    error,
    assistentText,
    margin = '32px 0 16px',
    width = '100%',
    options,
    small
}) => {

    // console.log('error: ', error, id)

    return (
        <Box
            width={width}
            height='100%'
            textAlign='left'
            margin={margin}
        >
            <Box
                margin='0 0 16px'
            >
                <label htmlFor={id}>
                    {label}
                </label>
            </Box>
            <SelectContainer
                error={error}
                success={success}
                small={small}
            >
                <StyledSelect
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                >
                    { options && options.map((e, i) => (
                        <option value={e.value} disabled={e.disabled}>{e.label}</option>
                    ))}
                </StyledSelect>
                {/* { Icon && (
                    <IconButton isActive={iconIsButton} onClick={onIconButtonClick}>
                        <Icon size={24} weight="thin" />
                    </IconButton>
                )} */}
            </SelectContainer>
            { assistentText && (
                <AssistentP error={error}>{assistentText}</AssistentP>
            )}
        </Box>
    )
}

export default Select