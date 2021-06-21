import { useState } from "react";
import {
    Wrapper,
    Item,
    RadioButton,
    RadioButtonLabel,
} from "./styles"


const RadioButtons = ({ options, select, onChange, row, small }) => {

    const [active, setActive] = useState('');
    // const handleSelectChange = (event) => {
    //     const value = event.target.value;
    //     setSelect(value);
    // };

    return (
            <Wrapper
                small={small}
                row={row}
            >
                { options && options.map((e, i) => (
                    <Item key={`${e.value}_option_item`}>
                        <RadioButton
                            small={small}
                            selected={active === e.value}
                            onClick={() => setActive(e.value)}
                        />
                        <RadioButtonLabel
                            key={`${e.value}_radio_label`}
                            small={small}
                            row={row}
                        >
                            {e.label.toUpperCase()}
                        </RadioButtonLabel>
                    </Item>
                ))}
            </Wrapper>
    )
}

export default RadioButtons