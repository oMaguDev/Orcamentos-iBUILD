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


const ConfortoSlide = ({ data }) => {

    const [conforto, setConforto] = useState('')
    // const [rows, setRows] = useState([1])

    const confortos = {
        title: 'Quarto',
        value: conforto,
        onChange: setConforto,
        options: [
            {
                value: 'so_agua_fria',
                label: 'ECONOMY',
                // description: 'Chuveiro elétrico, sem quecimento nas torneiras'
            },
            {
                value: 'agua_fria_e_quente',
                label: 'STANDARD',
            },
            {
                value: 'agua_fria_e_quente',
                label: 'PREMIUM',
            },
        ]
    }

    return (
        <>
            <Box height='50px'></Box>
            <SlideContainer
                key={'Hidráulicas'}
            >
                <StepImageContainer
                    key={`${'Hidráulicas'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes13.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Hidráulicas'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Hidráulicas'}_title_container`}
                    >
                        <h4>{'Escolha o tipo de instalações'.toUpperCase()}</h4>
                        <h2>{'Hidráulicas'.toUpperCase()}</h2>
                        <p>
                            Passe o mouse sobre cada um dos padrões e entenda melhor como funciona o conforto que você pode ter na sua casa
                        </p>
                    </TitleContainer>
                    <Box
                        margin='20px 0'
                    >
                        <RadioButtons
                            options={confortos.options}
                            onChange={confortos.onChange}
                            select={confortos.value}
                        />
                    </Box>
                    <>
                        <StatusBox />
                    </>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default ConfortoSlide