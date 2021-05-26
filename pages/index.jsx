import { Flex, Layout } from "../components/Containers"
import { H1, H2, H3 } from "../components/Text"
import Button from '../components/common/Button'
import { CaretRight } from 'phosphor-react'
import { useRouter } from 'next/router'

const Main = () => {

    const router = useRouter()

    return (
        <Layout>
            <Flex column>
                <H1>
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
                </H3>
                <Flex width='100%' maxWidth='350px'>
                    <Button fullWidth variant='contained' onClick={() => router.push('/simular')}>
                        <Flex>
                            Começar a simular
                            <CaretRight size={24} />
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Main