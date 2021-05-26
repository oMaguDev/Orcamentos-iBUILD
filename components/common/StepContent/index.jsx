import { Flex } from "../../Containers"
import StatusBox from "../StatusBox"
import Select from "./Select"
import { TitleContainer } from "./styles"


const StepContent = () => {
    return (
        <Flex
            column
            alignItems='flex-start'
            justifyContent='space-between'
            margin='100px 5% 50px 50px'
            width='450px'
            height='680px'
        >
            <TitleContainer>
                <h4>ESCOLHA A QUANTIDADE</h4>
                <h2>LAVABOS</h2>
                <p>Lavabos que possuam apenas pias, ducha higiênica e vaso sanitário</p>
            </TitleContainer>
            {/* <Select /> */}
            <StatusBox />
        </Flex>
    )
}

export default StepContent