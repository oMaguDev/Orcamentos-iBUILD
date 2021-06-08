import { useState } from "react"
import RadioButtons from "../../../common/RadioButtons"
import RadioIconButtons from "../../../common/RadioIconButtons"
import { Box, Flex, Layout, TitleContainer } from "../../../Containers"
import { ExplainingP } from "../../../Text"


const Second = () => {

    const [activeLand, setActiveLand] = useState(null)
    const [activeProject, setActiveProject] = useState(null)
    const [hasSimulated, setHasSimulated] = useState('')


    const iconOptionsLand = [
        {
            label: 'tenho todo o recurso para construir',
            value: 'own_resource',
            iconSrc: '/images/Ícones/Ícones 5.svg'
        },
        {
            label: 'quero financiar toda a obra',
            value: 'full_morgage',
            iconSrc: '/images/Ícones/Ícones 8.svg'
        },
        {
            label: 'tenho parte do recurso e quero financiar o restante',
            value: 'partial_morgage',
            iconSrc: '/images/Ícones/Ícones 7.svg'
        },
    ]

    const iconOptionsProject = [
        {
            label: 'tenho todo o recurso para construir',
            value: 'own_resource',
            iconSrc: '/images/Ícones/Ícones 5.svg'
        },
        {
            label: 'quero financiar toda a obra',
            value: 'full_morgage',
            iconSrc: '/images/Ícones/Ícones 6.svg'
        },
        {
            label: 'tenho parte do recurso e quero financiar o restante',
            value: 'partial_morgage',
            iconSrc: '/images/Ícones/Ícones 4.svg'
        },
    ]


    return (
            <Flex
                // width='calc(100% - 100px)'
                // height='calc(100% - 100px)' //'calc(100% - 100px)'
                justifyContent='space-evenly'
                margin='20px 0 0 0'
            >
                <Box
                    width='100%'
                    // maxWidth='700px'
                    // height='100%'
                    // padding='20px'
                >
                    <img src="/images/Pessoas/Pessoas 3.svg" width='100%' height='100%' alt="" />
                </Box>
                <Flex
                    column
                    textAlign='left'
                    width='100%'
                    height='100%' //'calc(100% - 100px)'
                    // maxWidth='600px'
                    margin='0'
                    alignItems='flex-start'
                    justifyContent='space-evenly'
                    padding='20px'
                >
                    <TitleContainer>
                        <h4>
                            TERRENO E PROJETO ARQUITETÔNICO
                        </h4>
                        <h1>
                            Conte um pouco mais sobre o que você já tem para construir
                        </h1>
                    </TitleContainer>
                    <RadioIconButtons
                        options={iconOptionsLand}
                        active={activeLand}    
                        setActive={setActiveLand}
                        withBorderBottom
                        title='TERRENO'
                        />
                    <RadioIconButtons
                        options={iconOptionsProject}
                        active={activeProject}    
                        setActive={setActiveProject}    
                        title='PROJETO'
                        />
                </Flex>
                
            </Flex>
    )
}

export default Second