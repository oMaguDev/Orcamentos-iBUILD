import { useState } from "react"
import { Flex } from "../../Containers"
import { RadioButton, RadioButtonsTable } from "./styles"


const RadioButtonsList = ({ labels }) => {

    const [lavabos, setLavabos] = useState(new Array(4).fill(''))

    const optionsValues = [
        'none',
        'small',
        'medium',
        'large'
    ]

    const defaultlabels = labels ? [...labels] : [
        'NÃO QUERO',
        'PEQUENO (APROX. 3,5 M2)',
        'MÉDIO (APROX. 6 M2)',
        'GRANDE (APROX. 8 M2)'
    ]

    return (
        <RadioButtonsTable>
            <thead>
                <tr>
                    <th>

                    </th>
                    <th>
                        1
                    </th>
                    <th>
                        2
                    </th>
                    <th>
                        3
                    </th>
                    <th>
                        4
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {defaultlabels[0]}
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[0] === lavabos[0]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[0] = optionsValues[0]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[0] === lavabos[1]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[1] = optionsValues[0]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[0] === lavabos[2]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[2] = optionsValues[0]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[0] === lavabos[3]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[3] = optionsValues[0]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        {defaultlabels[1]}
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[1] === lavabos[0]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[0] = optionsValues[1]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[1] === lavabos[1]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[1] = optionsValues[1]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[1] === lavabos[2]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[2] = optionsValues[1]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[1] === lavabos[3]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[3] = optionsValues[1]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        {defaultlabels[2]}
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[2] === lavabos[0]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[0] = optionsValues[2]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[2] === lavabos[1]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[1] = optionsValues[2]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[2] === lavabos[2]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[2] = optionsValues[2]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[2] === lavabos[3]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[3] = optionsValues[2]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        {defaultlabels[3]}
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[3] === lavabos[0]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[0] = optionsValues[3]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[3] === lavabos[1]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[1] = optionsValues[3]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[3] === lavabos[2]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[2] = optionsValues[3]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={optionsValues[3] === lavabos[3]}
                            onClick={() => {
                                const newLavabos = [...lavabos]
                                newLavabos[3] = optionsValues[3]
                                setLavabos(newLavabos)
                            }}
                        />
                    </td>
                </tr>
            </tbody>
        </RadioButtonsTable>
    )
}

export default RadioButtonsList