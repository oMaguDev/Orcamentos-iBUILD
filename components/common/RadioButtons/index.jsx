import { useState } from "react";
import {
    Wrapper,
    Item,
    RadioButton,
    RadioButtonLabel,
    RadioButtonTest
} from "./styles"


const RadioButtons = ({ options, select, onChange, row }) => {

    const [active, setActive] = useState('');
    // const handleSelectChange = (event) => {
    //     const value = event.target.value;
    //     setSelect(value);
    // };

    return (
            <Wrapper row={row}>
                {/* { options && options.map((e, i) => (
                    <Item key={e.value}>
                        <RadioButton
                            type="radio"
                            name="radio"
                            value={e.value}
                            checked={select === e.value }
                            onChange={(event) => {
                                console.log('event.target.value: ', event.target.value)
                                onChange(event.target.value)
                            }}
                            key={`${e.value}_radio_button`}
                            />
                        <RadioButtonLabel
                            key={`${e.value}_radio_button_label`}
                            />
                        <div
                            style={row ? { marginRight: '20px' } : null }
                            key={`${e.value}_radio_label`}
                        >
                            {e.label}
                        </div>
                    </Item>
                ))} */}
                { options && options.map((e, i) => (
                    <Item key={`${e.value}_option_item`}>
                        <RadioButtonTest
                            selected={active === e.value}
                            onClick={() => setActive(e.value)}
                        />
                        <div
                            style={row ? { margin: '0 25px 0 15px' } : { marginLeft: '15px'} }
                            key={`${e.value}_radio_label`}
                        >
                            {e.label}
                        </div>
                    </Item>
                ))}
            </Wrapper>
    )
}

export default RadioButtons