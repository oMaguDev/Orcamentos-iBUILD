import { Flex } from "../../Containers"
import { RadioButton, RadioButtonsTable } from "./styles"


const RadioButtonsList = () => {
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
                    NÃO QUERO
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                </tr>
                <tr>
                    <td>
                    PEQUENO (APROX. 3,5 M2)
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                </tr>
                <tr>
                    <td>
                    PEQUENO (APROX. 3,5 M2)
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                </tr>
                <tr>
                    <td>
                    PEQUENO (APROX. 3,5 M2)
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                    <td>
                        <RadioButton />
                    </td>
                </tr>
            </tbody>
        </RadioButtonsTable>
    )
}

export default RadioButtonsList