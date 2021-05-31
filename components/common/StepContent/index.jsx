import { Box, Flex } from "../../Containers"
import RadioButtons from "../RadioButtons"
import StatusBox from "../StatusBox"
import Select from "./Select"
import { StepContentContainer, StepImageContainer, TitleContainer } from "./styles"


const StepContent = ({ data }) => {
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
                    <h4>{ data.caption.toUpperCase() }</h4>
                    <h2>{ data.title.toUpperCase() }</h2>
                    <p>{ data.subtitle }</p>
                </TitleContainer>
                <RadioButtons
                    options={data.options}
                    onChange={data.onChange}
                    select={data.value}
                />
                {/* <Select /> */}
                <StatusBox />
            </StepContentContainer>
        </Flex>
    )
}

export default StepContent