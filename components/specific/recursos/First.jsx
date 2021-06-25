import { useState } from "react"
import RadioButtons from "../../common/RadioButtons"
import RadioIconButtons from "../../common/RadioIconButtons"
import { Box, Flex, Layout, TitleContainer } from "../../Containers"
import { ExplainingP } from "../../Text"


const First = () => {
    const [active, setActive] = useState(null)
    const [hasSimulated, setHasSimulated] = useState('')


    const iconOptions = [
        {
            label: 'tenho todo o recurso para construir',
            value: 'own_resource',
            iconSrc: '/images/Ícones/Ícones 3.svg'
        },
        {
            label: 'quero financiar toda a obra',
            value: 'full_morgage',
            iconSrc: '/images/Ícones/Ícones 2.svg'
        },
        {
            label: 'tenho parte do recurso e quero financiar o restante',
            value: 'partial_morgage',
            iconSrc: '/images/Ícones/Ícones 1.svg'
        },
    ]

    const simpleOptions = [
        {
            label: 'SIM',
            value: 'sim'
        },
        {
            label: 'NÃO',
            value: 'nao'
        },
    ]


    return (
            <Flex
                // width='calc(100% - 100px)'
                height='80%' //'calc(100% - 100px)'
                justifyContent='space-evenly'
                margin='20px 0 0 0'
                >
                <Flex
                    column
                    textAlign='left'
                    width='100%'
                    // height='100%' //'calc(100% - 100px)'
                    // maxWidth='600px'
                    margin='0'
                    alignItems='flex-start'
                    justifyContent='space-evenly'
                    padding='20px'
                >
                    <TitleContainer>
                        <h4>
                            VAMOS COMEÇAR?
                        </h4>
                        <h1>
                            Escolha o tipo de recurso financeiro que você pretende usar para construir
                        </h1>
                    </TitleContainer>
                    <RadioIconButtons
                        options={iconOptions}
                        active={active}    
                        setActive={setActive}
                        withBorderBottom
                    />
                    <ExplainingP>
                        Você já fez algum financiamento antes?
                    </ExplainingP>
                    <RadioButtons
                        options={simpleOptions}
                        select={hasSimulated}
                        onChange={setHasSimulated}
                        />
                </Flex>
                <Box
                    width='100%'
                    // maxWidth='700px'
                    height='100%'
                    // maxHeight='600px'
                    padding='20px'
                    margin='auto'
                >
                    <img src="/images/Pessoas/Pessoas 5.svg" height='80%' width='80%' alt="" />
                </Box>
            </Flex>
    )
}

export default First