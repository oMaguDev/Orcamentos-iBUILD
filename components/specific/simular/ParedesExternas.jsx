import { useEffect, useState } from "react"
import { Box, Flex, TitleContainer } from "../../Containers"
import {
    ColouredBox,
    ExternalWallImg,
    ExternalWallItem,
    WallCompositionContainer,
    CompositionListItem,
    CompositionListItemTag,
    SelectedIconContainer,
} from "./styles"
import { List } from 'phosphor-react'


const ParedesExternas = () => {

    const [active, setActive] = useState(null)

    useEffect(() => {
        console.log('active: ', active)
    }, [active])

    const paredes = [
        {
            label: 'economy',
            boxes: [
                {
                    label: 'Conforto térmico',
                    value: 'até 3c'
                },
                {
                    label: 'Conforto acústico',
                    value: 'até 40db'
                },
            ],
            composition: [
                'STEEL FRAME',
                'MEMBRANA HIDRÓFUGA',
                'PLACA CIMENTÍCIA',
                'BASECOAT',
                'ACABAMENTO',
            ],
            color: 'pink',
            imageSrc: "/images/paredes/Parede - Economy.png"
        },
        {
            label: 'STANDARD',
            boxes: [
                {
                    label: 'Conforto térmico',
                    value: 'até 3c'
                },
                {
                    label: 'Conforto acústico',
                    value: 'até 40db'
                },
            ],
            composition: [
                'STEEL FRAME',
                'OSB 9,5 MM',
                'MEMBRANA HIDRÓFUGA',
                'PLACA CIMENTÍCIA',
                'BASECOAT',
                'ACABAMENTO',
            ],
            color: 'purple',
            imageSrc: "/images/paredes/Parede - Standard.png"
        },
        {
            label: 'PREMIUM',
            boxes: [
                {
                    label: 'Conforto térmico',
                    value: 'até 3c'
                },
                {
                    label: 'Conforto acústico',
                    value: 'até 40db'
                },
            ],
            composition: [
                'STEEL FRAME',
                'OSB 9,5 MM',
                'MEMBRANA HIDRÓFUGA',
                'PLACA CIMENTÍCIA',
                'BASECOAT',
                'ACABAMENTO',
            ],
            color: 'darkPurple',
            imageSrc: "/images/paredes/Parede - Premium.png"
        },
    ]

    return (
        <Flex
            column
            // alignItems='flex-start'
            // transform='translateX(200px)'
            margin='0 0 0 100px'
        >
            <TitleContainer>
                <h4>ESCOLHA O PADRÃO DAS</h4>
                <h1>PAREDES EXTERNAS</h1>
            </TitleContainer>
            <Flex
                // column
                // width='100%'
                // maxWidth='1050px'
                margin='30px 0'

            >
                { paredes && paredes.map((e, i) => (
                    <ExternalWallItem
                        primaryColor={e.color}
                        selected={i === active}
                        onClick={() => setActive(i)}
                    >
                        <Flex>
                            <List size={24} />
                            <h3>
                                { e.label.toUpperCase() }
                            </h3>
                        </Flex>
                        <Flex
                            width='100%'
                        >
                            { e.boxes.map((el, index) => (
                                <ColouredBox
                                    primaryColor={e.color}
                                >
                                    <div className="label">
                                        { el.label.toUpperCase() }
                                    </div>
                                    <div className="value">
                                        { el.value.toUpperCase() }
                                    </div>
                                </ColouredBox>
                            ))}
                        </Flex>
                        <Flex
                            width='100%'
                            alignItems='flex-start'
                        >
                            <ExternalWallImg src={e.imageSrc} alt="" />
                            <WallCompositionContainer>
                                <h4>
                                    COMPOSIÇÃO DA PAREDE:
                                </h4>
                                { e.composition.map((elem, ind) => (
                                    <Flex
                                        className='compositionItem'
                                        justifyContent='space-between'
                                        alignItems='flex-start'
                                        key={elem}
                                        width='100%'
                                    >
                                        <CompositionListItemTag
                                            primaryColor={e.color}
                                        >
                                            [{ ind + 1 }]
                                        </CompositionListItemTag>
                                        <CompositionListItem>
                                            { elem }
                                        </CompositionListItem>
                                    </Flex>
                                ))}
                            </WallCompositionContainer>
                        </Flex>
                        <SelectedIconContainer
                            selected={i === active}
                        >
                            <img src="/images/Ícones/Ícones 11.svg" alt="" />
                        </SelectedIconContainer>
                    </ExternalWallItem>
                ))}
            </Flex>
        </Flex>
    )
}

export default ParedesExternas