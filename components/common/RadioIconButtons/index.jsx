// import { useState } from "react";
import {
    Wrapper,
    Item,
    RadioButton,
    RadioButtonLabel
} from "./styles"


const RadioIconButtons = ({ options, select, onChange }) => {

    // const [select, setSelect] = useState(null);
    // const handleSelectChange = (event) => {
    //     const value = event.target.value;
    //     setSelect(value);
    // };

    return (
            <Wrapper>
                { options && options.map((e, i) => (
                    <Item key={e.label}>
                        <RadioButton
                            type="radio"
                            name="radio"
                            value={e.value}
                            checked={select === e.value}
                            onChange={(event) => onChange(event.target.value)}
                        />
                        <RadioButtonLabel />
                        <div>{e.label}</div>
                    </Item>
                ))}
            </Wrapper>
    )
}

export default RadioIconButtons