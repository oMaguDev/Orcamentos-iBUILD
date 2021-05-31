import { StepperDot, StepperLine, StepTitle } from "./styles"
import { Flex } from '../../Containers'
import { useContext, useEffect } from "react"
import { ActiveIndexContext } from "../../../contexts/activeIndex"


const CustomStepper = ({ steps }) => {


    const { activeIndex } = useContext(ActiveIndexContext)

    useEffect(() => {
        console.log('activeIndex: ', activeIndex)
    }, [activeIndex])

    return (
        <Flex
            column
            height='100%'
            alignItems='flex-start'
            justifyContent='flex-start'
        >
            { steps && steps.map((e, i) =>  i !== steps.length - 1 ? (
                // <Flex
                //     column
                //     key={e}
                //     alignItems='flex-start'
                //     justifyContent='flex-start'
                // >
                <>
                    <Flex
                        // alignItems='center'
                        height='8px'
                        key={e}
                    >
                        <StepperDot
                            stepCompleted={ i < activeIndex }
                            currentStep={ i === activeIndex }
                        />
                        <StepTitle>{ e.toUpperCase() }</StepTitle>
                    </Flex>
                    <StepperLine />
                </>
                // </Flex>
            ) : (
                // <Flex
                //     column
                //     key={e}
                // >
                    <Flex
                        height='8px'
                        key={e}
                    >
                        <StepperDot
                            stepCompleted={ i < activeIndex }
                            currentStep={ i === activeIndex }
                        />
                        <StepTitle>{ e.toUpperCase() }</StepTitle>
                    </Flex>
                // </Flex>
            ))}
            {/* <Flex 
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
            </Flex> */}
        </Flex>
    )
}

export default CustomStepper