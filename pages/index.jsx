import { Box, Flex, Layout, LogoMedium, TitleContainer } from "../components/Containers"
import { ExplainingP, H1, H2, H3 } from "../components/Text"
import { CaretRight } from 'phosphor-react'
import { useRouter } from 'next/router'
import Button from '../components/common/Button'

const Main = () => {

    const router = useRouter()

    return (
        <Layout>
            <Flex fullHeight fullWidth>
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
                    <Flex width='100%' height='50px'>
                        <Button
                            fullWidth
                            fontWeight='600'
                            onClick={() => router.push('/simular')}
                        >
                            EU QUERO A MINHA CASA!
                        </Button>
                        <LogoMedium src='/images/Logo.svg' />
                    </Flex>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Main