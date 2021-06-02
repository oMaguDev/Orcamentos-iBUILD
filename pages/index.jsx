import { Box, Flex, Layout, TitleContainer } from "../components/Containers"
import { ExplainingP, H1, H2, H3 } from "../components/Text"
import Button from '../components/common/Button'
import { CaretRight } from 'phosphor-react'
import { useRouter } from 'next/router'

const Main = () => {

    const router = useRouter()

    return (
        <Layout>
            <Flex>
                <Box width='100%' height='100%'></Box>
                <Flex
                    column
                    textAlign='left'    
                >
                    <TitleContainer>
                        <h4>
                            CHEGOU A HORA DE TER A SUA CASA!
                        </h4>
                        <h1>
                            Saiba agora mesmo quanto sua casa vai custar e como ela pode ficar.
                        </h1>
                    </TitleContainer>
                    <ExplainingP>
                        Sabemos que construir um imóvel é um grande passo na vida de qualquer pessoa, por isso desenvolvemos essa ferramenta,
                        para te ajudar a se organizar e tirar o seu sonho do papel
                    </ExplainingP>
                    {/* <H1>
                        Orçamento Express
                    </H1>
                    <H2>
                        Se vc chegou até aqui é porque daqui a pouco você estará realizando uma das maiores conquistas da sua vida:
                    </H2>
                    <H2 fontSize='3rem'>
                        Morar na casa dos seu sonhos!
                    </H2>
                    <H3 fontSize='1.3rem'>
                        Simule o custo da sua casa e conte com a iBuild para entregar ela pronta pra você!
                    </H3> */}
                    <Flex width='100%' maxWidth='350px'>
                        <Button fullWidth variant='contained' onClick={() => router.push('/simular')}>
                            <Flex>
                                Começar a simular
                                <CaretRight size={24} />
                            </Flex>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Main