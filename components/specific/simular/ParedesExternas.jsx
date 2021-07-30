import { useContext, useEffect, useState } from "react"
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
import { Circle, List, SketchLogo } from 'phosphor-react'
import { SimulationDataContext } from "../../../contexts/SimulationData"
import Image from 'next/image'


const ParedesExternas = ({ small }) => {

    // const [active, setActive] = useState(null)

    // useEffect(() => {
    //     console.log('active: ', active)
    // }, [active])

    const { simData, setSimData } = useContext(SimulationDataContext)

    const paredes = [
        {
            label: 'PAREDE ECONOMY',
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
            imageSrc: "/images/paredes/Parede_Economy.png"
        },
        {
            label: 'PAREDE STANDARD',
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
            imageSrc: "/images/paredes/Parede_Standard.png"
        },
        {
            label: 'PAREDE PREMIUM',
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
            imageSrc: "/images/paredes/Parede_Premium.png"
        },
    ]

    if (small) {
        return (
            <Flex
                column
                // alignItems='flex-start'
                // transform='translateX(200px)'
                // margin='20px 0 0 100px'
            >
                <TitleContainer>
                    <h4>ESCOLHA O PADRÃO DAS</h4>
                    <h1>PAREDES EXTERNAS</h1>
                </TitleContainer>
                <Flex
                    // column
                    width='100%'
                    // maxWidth='1050px'
                    margin='0 0 30px'
                    justifyContent='flex-start'
                    overflow='auto'
                >
                    {paredes && paredes.map((e, i) => (
                        <ExternalWallItem
                            small
                            primaryColor={e.color}
                            selected={simData.paredes === e.label}
                            onClick={() => setSimData({
                                ...simData,
                                paredes: e.label
                            })}
                        >
                            <Flex
                                width='100%'
                                column
                            >
                                <Flex>
                                    {i === 0 ? (
                                        <List size={24} />
                                    ) : (i === 1 ? (
                                        <Circle size={24} />
                                    ) : (
                                        <SketchLogo size={24} />
                                    ))}
                                    <h3>
                                        {e.label.toUpperCase()}
                                    </h3>
                                </Flex>
                                <Flex
                                    width='100%'
                                >
                                    {e.boxes.map((el, index) => (
                                        <ColouredBox
                                            primaryColor={e.color}
                                        >
                                            <div className="label">
                                                {el.label.toUpperCase()}
                                            </div>
                                            <div className="value">
                                                {el.value.toUpperCase()}
                                            </div>
                                        </ColouredBox>
                                    ))}
                                </Flex>
                                <Flex
                                    width='100%'
                                    alignItems='flex-start'
                                >
                                    <ExternalWallImg src={e.imageSrc} />
                                    {/* <Image src={e.imageSrc} height={254} width={254} /> */}
                                    <WallCompositionContainer>
                                        <h4>
                                            COMPOSIÇÃO DA PAREDE:
                                        </h4>
                                        {e.composition.map((elem, ind) => (
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
                                                    [{ind + 1}]
                                                </CompositionListItemTag>
                                                <CompositionListItem>
                                                    {elem}
                                                </CompositionListItem>
                                            </Flex>
                                        ))}
                                    </WallCompositionContainer>
                                </Flex>
                            </Flex>
                            <SelectedIconContainer
                                selected={simData.paredes === e.label}
                            >
                                <img src="/images/Ícones/Ícones 11.svg" alt="" />
                            </SelectedIconContainer>
                        </ExternalWallItem>
                    ))}
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex
            column
            // alignItems='flex-start'
            // transform='translateX(200px)'
            margin='20px 0 0 100px'
        >
            <TitleContainer>
                <h4>ESCOLHA O PADRÃO DAS</h4>
                <h1>PAREDES EXTERNAS</h1>
            </TitleContainer>
            <Flex
                // column
                // width='100%'
                // maxWidth='1050px'
                // margin='30px 0'

            >
                {paredes && paredes.map((e, i) => (
                    <ExternalWallItem
                        primaryColor={e.color}
                        selected={simData.paredes === e.label}
                        onClick={() => setSimData({
                            ...simData,
                            paredes: e.label
                        })}
                    >
                        <Flex
                            width='100%'
                            column
                        >
                            <Flex>
                                {i === 0 ? (
                                    <List size={24} />
                                ) : (i === 1 ? (
                                    <Circle size={24} />
                                ) : (
                                    <SketchLogo size={24} />
                                ))}
                                <h3>
                                    {e.label.toUpperCase()}
                                </h3>
                            </Flex>
                            <Flex
                                width='100%'
                            >
                                {e.boxes.map((el, index) => (
                                    <ColouredBox
                                        primaryColor={e.color}
                                    >
                                        <div className="label">
                                            {el.label.toUpperCase()}
                                        </div>
                                        <div className="value">
                                            {el.value.toUpperCase()}
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
                                    {e.composition.map((elem, ind) => (
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
                                                [{ind + 1}]
                                            </CompositionListItemTag>
                                            <CompositionListItem>
                                                {elem}
                                            </CompositionListItem>
                                        </Flex>
                                    ))}
                                </WallCompositionContainer>
                            </Flex>
                        </Flex>
                        <SelectedIconContainer
                            selected={simData.paredes === e.label}
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