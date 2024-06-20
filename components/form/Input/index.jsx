import { Box } from "../../Containers";
import { AssistentP, IconButton, InputContainer, StyledInput, StyledLabel } from "./styles";
import InputMask from 'react-input-mask';

const Input = ({
    id = 'input_id',
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
    pattern,
    width = '100%',
    mask,
    small
}) => {

    // console.log('error: ', error, id)

    const masks = {
        phone: '(99) 99999-9999',
        cpf: '999.999.999-99',
        cnpj: '99.999.999/9999-99',
        date: '99/99/9999',
    };

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
            <InputContainer
                error={error}
                success={success}
                small={small}
            >
                {mask ? (
                    <InputMask
                        mask={masks[mask]}
                        id={id}
                        name={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    >
                        {(inputProps) => (
                            <StyledInput
                                {...inputProps}
                                ref={inputProps.ref}
                            />
                        )}
                    </InputMask>
                ) : (
                    <StyledInput
                        id={id}
                        name={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        pattern={pattern}
                    />
                )}

                {Icon && (
                    <IconButton isActive={iconIsButton} onClick={onIconButtonClick}>
                        <Icon size={24} weight="thin" />
                    </IconButton>
                )}
            </InputContainer>
            {assistentText && (
                <AssistentP error={error}>{assistentText}</AssistentP>
            )}
        </Box>
    );
}

export default Input;
