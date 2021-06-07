// import { useState } from "react";
import { Flex } from "../../Containers"
import {
    Wrapper,
    Item,
    RadioButton,
    RadioButtonLabel,
    IconContainer,
    OptionItem,
    OptionsContainer
} from "./styles"


const RadioIconButtons = ({ Icon, options, active, setActive, withBorderBottom = false, title }) => {

    // const [select, setSelect] = useState(null);
    // const handleSelectChange = (event) => {
    //     const value = event.target.value;
    //     setSelect(value);
    // };
    // console.log('options: ', options)

    return (
        <OptionsContainer withBorderBottom={withBorderBottom}>
            { title && (
                <h2>{ title }</h2>
            )}
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
        </OptionsContainer>
    )
}

export default RadioIconButtons