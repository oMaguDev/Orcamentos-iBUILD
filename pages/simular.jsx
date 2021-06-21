import Navbar from "../components/common/Navbar"
import Stepper from "../components/common/StepperBackground"
import { Box, Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import Carousel from "../components/common/Carousel"
import { useContext, useEffect, useState } from "react"
import EstiloCasa from "../components/specific/simular/EstiloCasa"
import PavimentosEscadas from "../components/specific/simular/PavimentosEscadas"
import ParedesExternas from "../components/specific/simular/ParedesExternas"
import Telhas from "../components/specific/simular/Telhas"
import QuartosESuitesSlide from "../components/specific/simular/QuartosESuites"
import { SimulationDataContext } from "../contexts/SimulationData"


const Simular = () => {

    const [initial, setInitial] = useState(true)

    // const [area, setArea] = useState('')
    // const [estilo, setEstilo] = useState('')
    // const [pavimentos, setPavimentos] = useState('')
    // const [paredes, setParedes] = useState('')
    // const [telhas, setTelhas] = useState('')
    // const [garagem, setGaragem] = useState('')
    // const [sala, setSala] = useState('')
    // const [escritorio, setEscritorio] = useState('')
    // const [quartos, setQuartos] = useState({
    //     small: '',
    //     medium: '',
    //     big: '',
    // })
    // const [lavabos, setLavabos] = useState('')

    // useEffect(() => {
    //     console.log('area: ', area)
    //     console.log('lavabos: ', lavabos)
    //     console.log('estilo: ', estilo)
    //     console.log('pavimentos: ', pavimentos)
    // }, [area, lavabos, estilo, pavimentos])


    const {
        simData,
        setSimData
    } = useContext(SimulationDataContext)

    const stepsTitles = [
        'Estilo da sua casa',
        'Pavimentos e Escadas',
        'Paredes Externas',
        // 'Área Total',
        'Telhas',
        'Garagem',
        'Sala',
        'Cozinha',
        'Área Gourmet',
        'Área de Serviço',
        'Despensa',
        'Escritório',
        'Quartos',
        'Banheiros',
        'Lavabos',
        'Int. Hid./Ele.',
        'Conforto',
        'Acabamentos'
    ]

    const steps = [
        
        // {
        //     caption: 'Escolha o tamanho',
        //     title: 'Área Total',
        //     subtitle: 'Tudo bem se não for exatamente igual, a ideia aqui é nos ajudar a entender qual o estilo do seu projeto',
        //     value: area,
        //     onChange: setArea,
        //     inputs: [
        //         {
        //             value: area,
        //             onChange: setArea,
        //             label: 'Área Total',
        //             placeholder: 'Insira a área total',
        //             type: 'number',
        //             width: '95%'
        //         }
        //     ]
        // },
    
        {
            caption: 'Escolha o tamanho da',
            title: 'Garagem',
            // subtitle: 'Escolha o padrão de acabamento da garagem',
            imageSrc: '/images/Ambientes/Ambientes11.svg',
            withFinishingPattern: true,
            value: simData.garagem,
            onChange:(newValue) => setSimData({
                ...simData,
                garagem: newValue
            }),
            options: [
                {
                    label: 'NÃO QUERO',
                    value: 'sem_garagem',
                },
                {
                    label: 'PEQUENA (1 CARRO - APROX. 20M²)',
                    value: 'garagem_pq',
                },
                {
                    label: 'MÉDIA (2 CARROS - APROX. 30M²)',
                    value: 'garagem_md',
                },
                {
                    label: 'GRANDE (ATÉ 4 CARROS - APROX. 50M²)',
                    value: 'garagem_gd',
                },
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Sala',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes1.svg',
            withFinishingPattern: true,
            value: simData.sala,
            onChange: newValue => setSimData({
                ...simData,
                sala: newValue
            }),
            options: [
                {
                    label: 'Pequena (Aprox. 10 m²)',
                    value: 'pequena',
                },
                {
                    label: 'Média (Aprox. 25 m²)',
                    value: 'media',
                },
                {
                    label: 'Grande (Aprox. 40 m²)',
                    value: 'grande',
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.sala,
                    onChange: newValue => setSimData({
                        ...simData,
                        sala: newValue
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Cozinha',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes2.svg',
            withFinishingPattern: true,
            value: simData.cozinha,
            onChange: newValue => setSimData({
                ...simData,
                cozinha: newValue
            }),
            options: [
                {
                    label: 'Pequena (Aprox. 10 m²)',
                    value: 'pequena',
                },
                {
                    label: 'Média (Aprox. 20 m²)',
                    value: 'media',
                },
                {
                    label: 'Grande (Aprox. 30 m²)',
                    value: 'grande',
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.cozinha,
                    onChange: newValue => setSimData({
                        ...simData,
                        cozinha: newValue
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Área gourmet',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes3.svg',
            withFinishingPattern: true,
            value: simData.areaGourmet,
            onChange: newValue => setSimData({
                ...simData,
                areaGourmet: newValue
            }),
            options: [
                {
                    label: 'Não quero',
                    value: 'sem_areaGourmet',
                },
                {
                    label: 'Pequena (Aprox. 10 m²)',
                    value: 'pequena',
                },
                {
                    label: 'Média (Aprox. 20 m²)',
                    value: 'media',
                },
                {
                    label: 'Grande (Aprox. 30 m²)',
                    value: 'grande',
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.areaGourmet,
                    onChange: newValue => setSimData({
                        ...simData,
                        areaGourmet: newValue
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Área de serviço',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes4.svg',
            withFinishingPattern: true,
            value: simData.areaServico,
            onChange: newValue => setSimData({
                ...simData,
                areaServico: newValue
            }),
            options: [
                {
                    label: 'Pequena (Aprox. 3,5 m²)',
                    value: 'pequena',
                },
                {
                    label: 'Média (Aprox. 6 m²)',
                    value: 'media',
                },
                {
                    label: 'Grande (Aprox. 9 m²)',
                    value: 'grande',
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.areaServico,
                    onChange: newValue => setSimData({
                        ...simData,
                        areaServico: newValue
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho da',
            title: 'Despensa',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes5.svg',
            withFinishingPattern: true,
            value: simData.despensa,
            onChange: newValue => setSimData({
                ...simData,
                despensa: newValue
            }),
            options: [
                {
                    label: 'Pequena (Aprox. 3 m²)',
                    value: 'pequena',
                },
                {
                    label: 'Média (Aprox. 6 m²)',
                    value: 'media',
                },
                {
                    label: 'Grande (Aprox. 9 m²)',
                    value: 'grande',
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.despensa,
                    onChange: newValue => setSimData({
                        ...simData,
                        despensa: newValue
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho do',
            title: 'Escritório',
            // subtitle: 'Escolha o tamanho da sala',
            imageSrc: '/images/Ambientes/Ambientes6.svg',
            withFinishingPattern: true,
            value: simData.escritorio,
            onChange: newValue => setSimData({
                ...simData,
                escritorio: newValue
            }),
            options: [
                {
                    label: 'Pequeno (Aprox. 8 m²)',
                    value: 'pequena',
                },
                {
                    label: 'Médio (Aprox. 12 m²)',
                    value: 'media',
                },
                {
                    label: 'Grande (Aprox. 20 m²)',
                    value: 'grande',
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: simData.escritorio,
                    onChange: newValue => setSimData({
                        ...simData,
                        escritorio: newValue
                    }),
                    placeholder: 'Insira o tamanho em m²',
                    type: 'number'
                }
            ]
        },
        // {
        //     caption: 'Escolha o tamanho',
        //     title: 'Escritório',
        //     subtitle: 'Escolha o tamanho da escritório',
        //     value: escritorio,
        //     onChange: setEscritorio,
        //     options: [
        //         {
        //             label: 'Escritório pequeno (Aprox. 10 m²)',
        //             value: 'pequena',
        //         },
        //         {
        //             label: 'Escritório médio (Aprox. 25 m²)',
        //             value: 'media',
        //         },
        //         {
        //             label: 'Escritório grande (Aprox. 40 m²)',
        //             value: 'grande',
        //         },
        //     ],
        // },
        // {
        //     caption: 'Escolha a quantidade',
        //     title: 'Quartos',
        //     subtitle: 'Escolha a quantidade de quartos',
        //     value: quartos,
        //     onChange: setQuartos,
        //     inputs: [
        //         {
        //             label: 'Quarto pequeno',
        //             placeholder: '(Aprox. 10 m²)',
        //             value: quartos.small,
        //             onChange: setQuartos,
        //             type: 'number',
        //             width: '95%',
                    
        //         },
        //         {
        //             label: 'Quarto grande',
        //             placeholder: '(Aprox. 40 m²)',
        //             value: quartos.big,
        //             onChange: setQuartos,
        //             type: 'number',
        //             width: '95%',
        //         },
        //         {
        //             label: 'Quarto médio',
        //             placeholder: '(Aprox. 25 m²)',
        //             value: quartos.medium,
        //             onChange: setQuartos,
        //             type: 'number',
        //             width: '95%',
        //         },
        //     ],
        // },
        // {
        //     caption: 'ESCOLHA A QUANTIDADE',
        //     title: 'LAVABOS',
        //     subtitle: 'Lavabos que possuam apenas pias, ducha higiênica e vaso sanitário',
        //     value: lavabos,
        //     onChange: setLavabos,
        //     options: [
        //         {
        //             label: 'NÃO QUERO',
        //             value: 'none',
        //         },
        //         {
        //             label: '01 (UM)',
        //             value: 'UM',
        //         },
        //         {
        //             label: '02 (DOIS)',
        //             value: 'DOIS',
        //         },
        //         {
        //             label: '03 (TRÊS)',
        //             value: 'TRÊS',
        //         },
        //         {
        //             label: '04 (QUATRO)',
        //             value: 'QUATRO',
        //         },
        //     ]
        // },
        
    ]

    // const items = [
    //     <StepContent key={steps[0]} />,
    //     <StepContent key={steps[1]} />,
    //     <StepContent key={steps[2]} />,
    //     <StepContent key={steps[3]} />,
    //     <StepContent key={steps[0]} />,
    //     <StepContent key={steps[1]} />,
    //     <StepContent key={steps[2]} />,
    //     <StepContent key={steps[3]} />,
    // ]

    const items = steps.map((e, i) => e.customComponent ? e.customComponent : (
        <StepContent key={`${e.title}_step_content_vai`} data={e} />
    ))

    items.unshift(<Telhas key='telhas_slide' />)
    items.unshift(<ParedesExternas key='paredes_externas_slide' />)
    items.unshift(<PavimentosEscadas key='pavimentos_e_escadas_slide' />)
    items.unshift(<EstiloCasa key='estilo_casa_slide' />)

    items.push(<QuartosESuitesSlide/>)
    
    
    
    // const items = []
    // items.push(<EstiloCasa key='estilo_casa_slide' />)
    // items.push(<PavimentosEscadas key='pavimentos_e_escadas_slide' />)
    // items.push(<ParedesExternas key='paredes_externas_slide' />)
    // items.push(<Telhas key='telhas_slide' />)

    if (initial) {
        return (
            <Flex
                // alignItems='center'
                justifyContent='flex-end'
                height='100%'
            >
                <Navbar />
                <Stepper
                    pinkDisplay
                    title='Agora, vamos montar a sua casa?'
                    parags={[
                        'Se você ainda não possui o projeto arquitetônico, não tem problema, a seguir faremos um passo a passo onde você poderá montar a sua casa projetando os cômodos do seu jeito.',
                        'Se você já possuir o projeto arquitetônico, preencha normalmente as próximas etapas conforme seu projeto e ao final saiba quanto sua casa vai custar.',
                    ]}
                    onStart={() => setInitial(false)}
                />
                <Box
                    width='100%'
                    maxWidth='700px'
                    height='100%'
                    padding='20px'
                >
                    <img src="/images/Pessoas/Pessoas 6.svg" width='100%' height='100%' alt="" />
                </Box>
            </Flex>
        )
    }

    return (
        <Flex
            // alignItems='center'
            justifyContent='flex-end'
            height='100%'
        >
            <Navbar />
            <Stepper
                steps={stepsTitles}
                title='Monte Sua Casa'    
                page='simular'
            />
            <Carousel
                items={items}
                page='simular'
            />
        </Flex>
    )
}

export default Simular



























// import { useState } from "react"
// import CustomizedSteppers from "../components/common/Assistent"
// import { Flex, Layout } from "../components/Containers"
// import { H2 } from "../components/Text"


// export const Simulation = () => {

//     const [area, setArea] = useState('')
//     const [estilo, setEstilo] = useState(null);
//     const [pavimentos, setPavimentos] = useState(null);


//     const data = [
//         {
//             type: 'input',
//             inputs: [
//                 {
//                     value: area,
//                     label: 'Área',
//                     onChange: setArea
//                 }
//             ]
//         },
//         {
//             type: 'options',
//             title: 'Qual o estilo da casa?',
//             options: [
//                 {
//                     value: 'classica',
//                     label: 'Clássica',
//                     image: {
//                         src: '/images/classica.jpg',
//                         alt: 'Casa Clássica'
//                     }
//                 },
//                 {
//                     value: 'neoClassica',
//                     label: 'Neo-Clássica',
//                     image: {
//                         src: '/images/neoClassica.jpg',
//                         alt: 'Casa Neo-Clássica'
//                     }
//                 },
//                 {
//                     value: 'mediterranea',
//                     label: 'Mediterrânea',
//                     image: {
//                         src: '/images/mediterranea.jpg',
//                         alt: 'Casa Mediterrânea'
//                     }
//                 },
//                 {
//                     value: 'brasileira',
//                     label: 'Brasileira',
//                     image: {
//                         src: '/images/brasileira.png',
//                         alt: 'Casa Brasileira'
//                     }
//                 },
//                 {
//                     value: 'minimalista',
//                     label: 'Minimalista',
//                     image: {
//                         src: '/images/minimalista.jpg',
//                         alt: 'Casa Minimalista'
//                     }
//                 },
//                 {
//                     value: 'contemporanea',
//                     label: 'Contemporânea',
//                     image: {
//                         src: '/images/contemporanea.png',
//                         alt: 'Casa Contemporânea'
//                     }
//                 },
//                 {
//                     value: 'americana',
//                     label: 'Americana',
//                     image: {
//                         src: '/images/americana.jpg',
//                         alt: 'Casa Americana'
//                     }
//                 },
//                 {
//                     value: 'europeia',
//                     label: 'Europeia',
//                     image: {
//                         src: '/images/europeia.jpg',
//                         alt: 'Casa Europeia'
//                     }
//                 },
//             ],
//             value: estilo,
//             setValue: setEstilo,
//         },
//         {
//             type: 'both',
//             title: 'Qual o estilo de escada?',
//             options: [
//                 {
//                     value: '1',
//                     label: '1',
//                     image: {
//                         src: '/images/escadas/1.jpg',
//                         alt: 'Escada 1'
//                     }
//                 },
//                 {
//                     value: '2',
//                     label: '2',
//                     image: {
//                         src: '/images/escadas/2.jpg',
//                         alt: 'Escada 2'
//                     }
//                 },
//                 {
//                     value: '3',
//                     label: '3',
//                     image: {
//                         src: '/images/escadas/3.jpg',
//                         alt: 'Escada 3'
//                     }
//                 },
//                 {
//                     value: '4',
//                     label: '4',
//                     image: {
//                         src: '/images/escadas/4.jpg',
//                         alt: 'Escada 4'
//                     }
//                 },
//             ],
//             inputs: [
//                 {
//                     value: pavimentos,
//                     label: 'Pavimentos',
//                     onChange: setPavimentos
//                 }
//             ],
//             value: estilo,
//             setValue: setEstilo,
//         },
//     ]



//     return (
//         <Layout>
//             <Flex
//                 column
//                 width='100%'
//             >
//                 <H2>
//                     Quero fazer o orçamento da minha casa
//                 </H2>
//                 <CustomizedSteppers data={data} />
//             </Flex>
//         </Layout>
//     )
// }

// export default Simulation