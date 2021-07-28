// import { useState } from "react";
import { Box, Flex } from "../../Containers"
import {
    Wrapper,
    Item,
    RadioButton,
    RadioButtonLabel,
    IconContainer,
    OptionItem,
    OptionsContainer
} from "./styles"


const RadioIconButtons = ({
    Icon,
    options,
    active,
    setActive,
    withBorderBottom = false,
    title
}) => {

    // const [select, setSelect] = useState(null);
    // const handleSelectChange = (event) => {
    //     const value = event.target.value;
    //     setSelect(value);
    // };
    // console.log('options: ', options)

    return (
        <OptionsContainer withBorderBottom={withBorderBottom}>
            <Box
                margin='0 16px 0 0'
            >
                { title && (
                    <h2>{ title }</h2>
                )}
            </Box>
            <Flex
                alignItems='flex-start'
            >
                { options && options.map((e, i) => (
                    <OptionItem key={e.label}>
                        <IconContainer
                            onClick={() => setActive(e.value)}
                            active={active === e.value}
                        >
                            <img src={e.iconSrc} alt="" />
                        </IconContainer>
                        <p>{e.label.toUpperCase()}</p>
                    </OptionItem>
                ))}
            </Flex>
        </OptionsContainer>
    )
}

export default RadioIconButtons