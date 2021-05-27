import { StepperDot, StepperLine, StepTitle } from "./styles"
import { Flex } from '../../Containers'


const CustomStepper = ({ steps }) => {



    return (
        <Flex>
            <Flex 
                column
                height='100%'
                justifyContent='flex-start'
                // margin='5px 0 0 0'
                >
                { steps && steps.map((e, i) =>  i !== steps.length - 1 ? (
                    <>
                    <StepperDot />
                    <StepperLine />
                    </>
                ) : (
                    <StepperDot />
                    ))}    

            </Flex>
            <Flex 
                column
                justifyContent='flex-start'
                alignItems='flex-start'
                height='100%'
                margin='16px 0 0 0'
            >
                { steps && steps.map((e, i) => (
                    <StepTitle key={e}>{ e.toUpperCase() }</StepTitle>
                ))}
                {/* <StepTitle>ESTILO</StepTitle>
                <StepTitle>ESTILO</StepTitle>
                <StepTitle>ESTILO</StepTitle>
                <StepTitle>ESTILO</StepTitle>
                <StepTitle>ESTILO</StepTitle>
                <StepTitle>ESTILO</StepTitle> */}
            </Flex>
        </Flex>
    )
}

export default CustomStepper