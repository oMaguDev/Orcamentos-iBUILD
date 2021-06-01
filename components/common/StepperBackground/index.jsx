import { Flex } from "../../Containers"
import CustomStepper from "../CustomStepper"
import { Background, StepDot, StepLine, StepperContainer, Triangle, StepDotsContainer, Label, MainTitle } from "./styles"


const Stepper = ({ steps }) => {
    return (
        <>
        <Background>
            <StepperContainer>
                <Flex 
                    column
                    alignItems='flex-start'
                    transform='translateX(120px)'
                    >
                    <MainTitle>MONTE A SUA CASA</MainTitle>
                    <CustomStepper steps={steps} />
                    {/* <Flex
                        alignItems='flex-start'
                        justifyContent='center'
                        width='100%'
                        textAlign='left'
                        >
                        <StepDotsContainer>
                        <StepDot index={0} />
                        <StepLine />
                        <StepDot index={1} />
                        <StepLine />
                        <StepDot index={2} />
                        <StepLine />
                        <StepDot index={3} />
                        <StepLine />
                        <StepDot index={3} />
                        <StepLine />
                        <StepDot index={3} />
                        <StepLine />
                        <StepDot index={3} />
                        <StepLine />
                        <StepDot index={3} />
                        <StepLine />
                            <StepDot index={3} />
                            </StepDotsContainer>
                            <Flex
                            column
                            margin='0 0 0 10px'
                            justifyContent='space-around'
                            alignItems='right'
                            >
                            { steps.map((e, i) => (
                                <Label first={i === 0}>
                                { e }
                                </Label>
                                ))}
                                <Label first>
                                ESTILO
                                </Label>
                                <Label>
                                ESTILO
                                </Label>
                                <Label>
                                ESTILO
                                </Label>
                                <Label>
                                ESTILO
                                </Label>
                                <Label>
                                ESTILO
                                </Label>
                                <Label>
                                ESTILO
                                </Label>
                                <Label>
                                ESTILO
                                </Label>
                                <Label>
                                ESTILO
                                </Label>
                                <Label>
                                ESTILO
                                </Label>
                                </Flex>
                            </Flex> */}
                </Flex>
            </StepperContainer>
        </Background>
        <Triangle />
        </>
        )
        // </Flex>
}

export default Stepper