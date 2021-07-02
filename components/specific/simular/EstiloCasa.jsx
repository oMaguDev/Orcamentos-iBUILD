import { useContext, useEffect, useState } from "react"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { Box, Flex, TitleContainer } from "../../Containers"
import { HomeStylePic, HomeStylePicContainer } from "./styles"


const EstiloCasa = () => {

    const [active, setActive] = useState(null)

    const { simData, setSimData } = useContext(SimulationDataContext)

    // useEffect(() => {
    //     console.log('active: ', active)
    // }, [active])

    const estilos = [
        {
            id: 'casa_classica',
            imageSrc: '/images/EstilosCasa/classica.jpg',
            label: 'CLÁSSICO'
        },
        {
            id: 'casa_neoclassica',
            imageSrc: '/images/EstilosCasa/neoClassica.jpg',
            label: 'NEO-CLÁSSICO'
        },
        {
            id: 'casa_mediterranea',
            imageSrc: '/images/EstilosCasa/mediterranea.jpg',
            label: 'MEDITERRÂNEO'
        },
        {
            id: 'casa_brasileira',
            imageSrc: '/images/EstilosCasa/brasileira.png',
            label: 'BRASILEIRO'
        },
        {
            id: 'casa_minimalista',
            imageSrc: '/images/EstilosCasa/minimalista.jpg',
            label: 'MINIMALISTA'
        },
        {
            id: 'casa_contemporanea',
            imageSrc: '/images/EstilosCasa/contemporanea.png',
            label: 'CONTEMPORÂNEO'
        },
        {
            id: 'casa_americana',
            imageSrc: '/images/EstilosCasa/americana.jpg',
            label: 'AMERICANO'
        },
        {
            id: 'casa_europeia',
            imageSrc: '/images/EstilosCasa/europeia.jpg',
            label: 'EUROPEU'
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
                <h4>ESCOLHA O</h4>
                <h1>ESTILO DA SUA CASA</h1>
            </TitleContainer>
            <Flex
                column
                // width='100%'
                maxWidth='1050px'
                margin='30px 0'

            >
                <Flex
                    wrap='wrap'
                >
                    { estilos && estilos.map((e, i) => i < 4 ? (
                        <HomeStylePicContainer
                            imageSrc={e.imageSrc}
                            key={e.id}
                            active={simData.estilo === e.id}
                            onClick={() => setSimData({
                                ...simData,
                                estilo: e.id
                            })}
                            >
                            <div>
                                <div>{ simData.estilo === e.id ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                            </div>
                            <p>{ e.label }</p>
                        </HomeStylePicContainer>
                    ) : null)}
                </Flex>
                <Flex
                    wrap='wrap'
                    >
                    { estilos && estilos.map((e, i) => i >= 4 ? (
                        <HomeStylePicContainer
                            imageSrc={e.imageSrc}
                            key={e.id}
                            active={simData.estilo === e.id}
                            onClick={() => setSimData({
                                ...simData,
                                estilo: e.id
                            })}
                            >
                            <div>
                                <div>{ simData.estilo === e.id ? <img src='/images/Ícones/Ícones 11.svg' /> : null}</div>
                            </div>
                            <p>{ e.label }</p>
                        </HomeStylePicContainer>
                    ) : null)}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default EstiloCasa