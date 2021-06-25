import { Box, Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../../common/RadioButtons"
import StatusBox from "../../common/StatusBox"
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "../../common/StepContent/styles"
import Input from '../../form/Input'
import FinishingPattern from "../../common/FinishingPattern"
import { useEffect, useState } from "react"
import { Parag } from "../../Text"
import Button from "../../common/Button"
import RadioButtonsList from "../../common/RadioButtons/RadioButtonsList"
import { ExplainingP } from "../../Text"
import { useRouter } from 'next/router'


const ResumoImovelSlide = ({ data }) => {

    const [instalacoes, setInstalacoes] = useState('')

    const router = useRouter()

    return (
        <>
            <Box height='50px'></Box>
            <SlideContainer
                key={'Resumo do Imóvel'}
            >
                <StepImageContainer
                    key={`${'Resumo do Imóvel'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes15.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Resumo do Imóvel'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Resumo do Imóvel'}_title_container`}
                    >
                        <h4>{'Veja como ficou o'.toUpperCase()}</h4>
                        <h2>{'Resumo do Imóvel'.toUpperCase()}</h2>
                        <p>Descrever as escolhas do cliente</p>
                    </TitleContainer>
                    <Button
                        margin='20px 0'
                        onClick={() => router.push('/final')}
                    >
                        Próximo passo
                    </Button>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default ResumoImovelSlide