import { Box, Flex } from "../../Containers"
import RadioButtons from "../RadioButtons"
import StatusBox from "../StatusBox"
import Select from "./Select"
import { StepContentContainer, StepImageContainer, TitleContainer } from "./styles"


const StepContent = () => {
    // <Flex
    //     column
    //     alignItems='flex-start'
    //     justifyContent='space-between'
    //     margin='50px 5% 50px 50px'
    //     width='450px'
    //     // height='620px'
    //     // padding='20px'
    // >
    // </Flex>
    return (
        <Flex 
            width='100%'
            justifyContent='space-evenly'
        >
            <StepImageContainer>
                <img style={{ width: '100%'}} src="/images/americana.jpg" alt="" />
            </StepImageContainer>
            <StepContentContainer>
                <TitleContainer>
                    <h4>ESCOLHA A QUANTIDADE</h4>
                    <h2>LAVABOS</h2>
                    <p>Lavabos que possuam apenas pias, ducha higiênica e vaso sanitário</p>
                </TitleContainer>
                <RadioButtons />
                {/* <Select /> */}
                <StatusBox />
            </StepContentContainer>
        </Flex>
    )
}

export default StepContent