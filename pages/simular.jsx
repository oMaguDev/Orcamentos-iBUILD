import CustomizedSteppers from "../components/Assistent"
import { Flex, Layout } from "../components/Containers"
import { H2 } from "../components/Text"


export const Simulation = () => {
    return (
        <Layout>
            <Flex
                column
                width='100%'
            >
                <H2>
                    Quero fazer o orçamento da minha casa
                </H2>
                <Flex>
                <CustomizedSteppers />

                </Flex>
            </Flex>
        </Layout>
    )
}

export default Simulation