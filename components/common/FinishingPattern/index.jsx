import { Parag } from "../../Text"
import { Flex } from "../../Containers"
import { StandardBox } from "./styles"
import RadioButtons from "../RadioButtons"
import { useEffect, useState } from "react"

const FinishingPattern = () => {

    const [thermoacustic, setThermoacustic] = useState('')
    const [pattern, setPattern] = useState('')

    const patterns = [
        {
            label: 'economy',
            color: 'pink',
        },
        {
            label: 'standard',
            color: 'green',
        },
        {
            label: 'premium',
            color: 'pink',
        },
    ]

    useEffect(() => {
        console.log('thermoacustic: ', thermoacustic)
    }, [thermoacustic])
    return (
        <>
            <Parag margin='0'>
                Escolha o padrão do acabamento:
            </Parag>
            <Flex
                width='100%'
                margin='5px 0 0 0'
            >
                { patterns.map((e, i) => (
                    <StandardBox
                        key={`${e.label}_finishing_pattern`}
                        color={e.color}
                        active={pattern === e.label}
                        onClick={() => setPattern(e.label)}
                    >
                        { e.label.toUpperCase() }
                    </StandardBox>
                ))}
            </Flex>
            <Flex
                width='100%'
                justifyContent='space-between'
                textAlign='left'
            >
                <Parag
                    width='100%'
                >
                    Quer melhorar o conforto temoacústico?
                </Parag>
                <RadioButtons
                    key='want_thermoacoustic_confort'
                    row
                    options={[
                        {
                            value: 'sim',
                            label: 'SIM'
                        },
                        {
                            value: 'nao',
                            label: 'NÃO'
                        },
                    ]}
                
                    select={thermoacustic}
                    onChange={e => setThermoacustic(e)}
                />
            </Flex>
        </>
    )
}

export default FinishingPattern