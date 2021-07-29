import { Box, Flex, Layout, LogoMedium, TitleContainer } from "../components/Containers"
import { ExplainingP, H1, H2, H3 } from "../components/Text"
import { CaretRight } from 'phosphor-react'
import { useRouter } from 'next/router'
import Button from '../components/common/Button'
import useWindowDimensions from "../hooks/useWindowDimensions"
import { breakpoints } from "../utils/breakpoints"

const Final = () => {

    const router = useRouter()

    const { width } = useWindowDimensions()
    const small = width < breakpoints.md && width !== 0

    if (small) {
        return (
            <>
                <Flex
                    column
                    textAlign='left'
                    width='100%'
                    maxWidth='600px'
                    height='80%'
                    margin='0'
                    alignItems='flex-start'
                    justifyContent='space-between'
                    padding='20px'
                    overflow='auto'
                >
                    <TitleContainer>
                        <h4>
                            VIU COMO FOI FÁCIL, AGORA VAMOS VER QUAIS SERÃO
                        </h4>
                        <h1>
                            OS PRÓXIMOS PASSOS DA JORNADA
                        </h1>
                    </TitleContainer>

                    <Flex
                        width='100%'
                        height='50px'
                        margin='15px 0 0'
                        justifyContent='space-between'
                    >
                        <Button
                            fontWeight='600'
                        // onClick={() => router.push('/recursos')}
                        >
                            QUERO VER A PROPOSTA DETALHADA
                        </Button>
                        {/* <LogoMedium src='/images/Logo.svg' /> */}
                    </Flex>
                </Flex>
            </>
        )
    }

    return (
        // <Layout>
        <Flex
            // width='calc(100% - 100px)'
            height='100%' //'calc(100% - 100px)'
            justifyContent='space-evenly'
            margin='0'
        >
            <Flex
                column
                textAlign='left'
                width='100%'
                maxWidth='600px'
                height='80%'
                margin='0'
                alignItems='flex-start'
                justifyContent='space-between'
                padding='20px'
                overflow='auto'
            >
                <TitleContainer>
                    <h4>
                        VIU COMO FOI FÁCIL, AGORA VAMOS VER QUAIS SERÃO
                    </h4>
                    <h1>
                        OS PRÓXIMOS PASSOS DA JORNADA
                    </h1>
                </TitleContainer>

                <Flex
                    width='100%'
                    height='50px'
                    margin='15px 0 0'
                    justifyContent='space-between'
                >
                    <Button
                        fontWeight='600'
                    // onClick={() => router.push('/recursos')}
                    >
                        QUERO VER A PROPOSTA DETALHADA
                    </Button>
                    {/* <LogoMedium src='/images/Logo.svg' /> */}
                </Flex>
            </Flex>
            <Box
                width='100%'
                maxWidth='700px'
                height='80%'
                padding='20px'
            >
                <img src="/images/Pessoas/Pessoas 2.svg" width='100%' height='100%' alt="" />
            </Box>
        </Flex>
        // </Layout>
    )
}

export default Final