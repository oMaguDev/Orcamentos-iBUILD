import { useState } from "react";
import { Flex } from "../../Containers"
import {
    // Checkmark,
    // RadioContainer,
    // StyledRadio,
    Wrapper,
    Item,
    RadioButton,
    RadioButtonLabel
} from "./styles"


const RadioButtons = () => {

    const [select, setSelect] = useState(null);
    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelect(value);
    };

    return (
            <Wrapper>
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="betterPriceOnly"
                        checked={select === "betterPriceOnly"}
                        onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div>Auto accept better price only</div>
                </Item>
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="anyPriceChange"
                        checked={select === "anyPriceChange"}
                        onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div>Auto accept any price change</div>
                </Item>
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="neverAutoAccept"
                        checked={select === "neverAutoAccept"}
                        onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div>Never auto accept a price change</div>
                </Item>
            </Wrapper>
    )
}

export default RadioButtons