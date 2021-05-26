import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core';
import { Flex } from '../../Containers';
import { Image } from './styles';
import { H3 } from '../../Text';

const StyledRadio = withStyles({
    root: {
        color: '#5e03c5',
    },
    checked: {
        color: '#5e03c5 !important',
    }
})(Radio)

export default function RadioButtonsGroup({ options, value, setValue, title }) {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">
                <H3>{title}</H3>
            </FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {options && options.map((e, i) => (
                    <Flex column margin='20px 0'>
                        { e.image && (
                            <Flex column margin='20px 0' width='100%'>
                                <Image src={e.image.src} alt={e.image.alt} />
                            </Flex>
                        )}
                        <FormControlLabel key={i} value={e.value} control={<StyledRadio />} label={e.label} />
                    </Flex>
                ))}
            </RadioGroup>
        </FormControl >
    );
}
