// import { useState } from "react";
import {
    Wrapper,
    Item,
    RadioButton,
    RadioButtonLabel
} from "./styles"


const RadioButtons = ({ options, select, onChange, row }) => {

    // const [select, setSelect] = useState(null);
    // const handleSelectChange = (event) => {
    //     const value = event.target.value;
    //     setSelect(value);
    // };

    return (
            <Wrapper row={row}>
                { options && options.map((e, i) => (
                    <Item key={e.label}>
                        <RadioButton
                            type="radio"
                            name="radio"
                            value={e.value}
                            checked={select === e.value}
                            onChange={(event) => onChange(event.target.value)}
                            key={`${e.value ? e.value : e.label }_radio_button`}
                            />
                        <RadioButtonLabel
                            key={`${e.value ? e.value : e.label }_radio_button_label`}
                            />
                        <div
                            style={row ? { marginRight: '20px' } : null }
                            key={`${e.value ? e.value : e.label }_radio_label`}
                        >
                            {e.label}
                        </div>
                    </Item>
                ))}
                {/* <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="none"
                        checked={select === "none"}
                        onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div>NÃO QUERO</div>
                </Item>
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="UM"
                        checked={select === "UM"}
                        onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div>01 (UM)</div>
                </Item>
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="DOIS"
                        checked={select === "DOIS"}
                        onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div>02 (DOIS)</div>
                </Item>
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="TRES"
                        checked={select === "TRES"}
                        onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div>03 (TRÊS)</div>
                </Item>
                <Item>
                    <RadioButton
                        type="radio"
                        name="radio"
                        value="QUATRO"
                        checked={select === "QUATRO"}
                        onChange={(event) => handleSelectChange(event)}
                    />
                    <RadioButtonLabel />
                    <div>04 (QUATRO)</div>
                </Item> */}
            </Wrapper>
    )
}

export default RadioButtons