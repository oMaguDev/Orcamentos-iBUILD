import Navbar from "../components/common/Navbar"
import Stepper from "../components/common/StepperBackground"
import { Box, Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import Carousel from "../components/common/Carousel"
import { useEffect, useState } from "react"
import EstiloCasa from "../components/specific/simular/EstiloCasa"
import PavimentosEscadas from "../components/specific/simular/PavimentosEscadas"


const Simular = () => {

    const [initial, setInitial] = useState(true)

    const [area, setArea] = useState('')
    const [estilo, setEstilo] = useState('')
    const [pavimentos, setPavimentos] = useState('')
    const [paredes, setParedes] = useState('')
    const [telhas, setTelhas] = useState('')
    const [garagem, setGaragem] = useState('')
    const [sala, setSala] = useState('')
    const [escritorio, setEscritorio] = useState('')
    const [quartos, setQuartos] = useState({
        small: '',
        medium: '',
        big: '',
    })
    const [lavabos, setLavabos] = useState('')

    useEffect(() => {
        console.log('area: ', area)
        console.log('lavabos: ', lavabos)
        console.log('estilo: ', estilo)
        console.log('pavimentos: ', pavimentos)
    }, [area, lavabos, estilo, pavimentos])

    const stepsTitles = [
        'Estilo da sua casa',
        'Pavimentos e Escadas',
        'Área Total',
        'Paredes Externas',
        'Telhas',
        'Garagem',
        'Sala de Estar/TV',
        'Escritório',
        'Quartos',
        'Despensa',
        'Banheiros',
        'Cozinha',
        'Área Gourmet',
        'Lavabos',
        'Área de Serviço',
        'Int. Hid./Ele.',
        'Conforto',
        'Acabamentos'
    ]

    const steps = [
        // {
        //     caption: 'Escolha o',
        //     title: 'Estilo da sua casa',
        //     subtitle: 'Tudo bem se não for exatamente igual, a ideia aqui é nos ajudar a entender qual o estilo do seu projeto',
        //     value: estilo,
        //     onChange: setEstilo,
        //     options: [
        //         {
        //             label: 'Clássica',
        //             value: 'classica',
        //         },
        //         {
        //             label: 'Neo-Clássica',
        //             value: 'neoClassica',
        //         },
        //         {
        //             label: 'Mediterrânea',
        //             value: 'mediterranea',
        //         },
        //         {
        //             label: 'Brasileira',
        //             value: 'brasileira',
        //         },
        //         {
        //             label: 'Minimalista',
        //             value: 'minimalista',
        //         },
        //         {
        //             label: 'Contemporânea',
        //             value: 'contemporanea',
        //         },
        //         {
        //             label: 'Americana',
        //             value: 'americana',
        //         },
        //         {
        //             label: 'Europeia',
        //             value: 'europeia',
        //         },
        //     ]
        // },
        // {
        //     caption: 'Escolha a quantidade',
        //     title: 'Pavimentos e escadas',
        //     subtitle: 'Escolha quantos pavimentos e o estilo das escadas na sua nova casa. ',
        //     value: pavimentos,
        //     onChange: setPavimentos,
        //     options: [
        //         {
        //             label: '1',
        //             value: '1',
        //         },
        //         {
        //             label: '2',
        //             value: '2',
        //         },
        //         {
        //             label: '3',
        //             value: '3',
        //         },
        //         {
        //             label: '4',
        //             value: '4',
        //         },
        //     ]
        // },
        {
            caption: 'Escolha o tamanho',
            title: 'Área Total',
            subtitle: 'Tudo bem se não for exatamente igual, a ideia aqui é nos ajudar a entender qual o estilo do seu projeto',
            value: area,
            onChange: setArea,
            inputs: [
                {
                    value: area,
                    onChange: setArea,
                    label: 'Área Total',
                    placeholder: 'Insira a área total',
                    type: 'number',
                    width: '95%'
                }
            ]
        },
        {
            caption: 'Escolha o padrão',
            title: 'Paredes externas',
            subtitle: 'Escolha o padrão das paredes externas',
            value: paredes,
            onChange: setParedes,
            options: [
                {
                    label: 'Standard',
                    value: 'standard',
                },
                {
                    label: 'Premium',
                    value: 'premium',
                },
            ]
        },
        {
            caption: 'Escolha o tipo',
            title: 'Telhas',
            subtitle: 'Escolha o tipo das telhas da casa',
            value: telhas,
            onChange: setTelhas,
            options: [
                {
                    label: 'Standard',
                    value: 'standard',
                },
                {
                    label: 'Premium',
                    value: 'premium',
                },
            ]
        },
        {
            caption: 'Escolha o padrão',
            title: 'Garagem',
            subtitle: 'Escolha o padrão de acabamento da garagem',
            value: garagem,
            onChange: setGaragem,
            options: [
                {
                    label: 'Standard',
                    value: 'standard',
                },
                {
                    label: 'Premium',
                    value: 'premium',
                },
            ]
        },
        {
            caption: 'Escolha o tamanho',
            title: 'Sala de Estar/TV',
            subtitle: 'Escolha o tamanho da sala de estar/TV',
            value: sala,
            onChange: setSala,
            options: [
                {
                    label: '1 sala pequena (Aprox. 10 m²)',
                    value: 'pequena',
                },
                {
                    label: '1 sala média (Aprox. 25 m²)',
                    value: 'media',
                },
                {
                    label: '1 sala grande (Aprox. 40 m²)',
                    value: 'grande',
                },
            ],
            inputs: [
                {
                    label: 'Outro tamanho',
                    value: sala,
                    onChange: setSala,
                    placeholder: 'Insira o tamanho em m2',
                    type: 'number'
                }
            ]
        },
        {
            caption: 'Escolha o tamanho',
            title: 'Escritório',
            subtitle: 'Escolha o tamanho da escritório',
            value: escritorio,
            onChange: setEscritorio,
            options: [
                {
                    label: 'Escritório pequeno (Aprox. 10 m²)',
                    value: 'pequena',
                },
                {
                    label: 'Escritório médio (Aprox. 25 m²)',
                    value: 'media',
                },
                {
                    label: 'Escritório grande (Aprox. 40 m²)',
                    value: 'grande',
                },
            ],
        },
        {
            caption: 'Escolha a quantidade',
            title: 'Quartos',
            subtitle: 'Escolha a quantidade de quartos',
            value: quartos,
            onChange: setQuartos,
            inputs: [
                {
                    label: 'Quarto pequeno',
                    placeholder: '(Aprox. 10 m²)',
                    value: quartos.small,
                    onChange: setQuartos,
                    type: 'number',
                    width: '95%',
                    
                },
                {
                    label: 'Quarto grande',
                    placeholder: '(Aprox. 40 m²)',
                    value: quartos.big,
                    onChange: setQuartos,
                    type: 'number',
                    width: '95%',
                },
                {
                    label: 'Quarto médio',
                    placeholder: '(Aprox. 25 m²)',
                    value: quartos.medium,
                    onChange: setQuartos,
                    type: 'number',
                    width: '95%',
                },
            ],
        },
        {
            caption: 'ESCOLHA A QUANTIDADE',
            title: 'LAVABOS',
            subtitle: 'Lavabos que possuam apenas pias, ducha higiênica e vaso sanitário',
            value: lavabos,
            onChange: setLavabos,
            options: [
                {
                    label: 'NÃO QUERO',
                    value: 'none',
                },
                {
                    label: '01 (UM)',
                    value: 'UM',
                },
                {
                    label: '02 (DOIS)',
                    value: 'DOIS',
                },
                {
                    label: '03 (TRÊS)',
                    value: 'TRÊS',
                },
                {
                    label: '04 (QUATRO)',
                    value: 'QUATRO',
                },
            ]
        },
        
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

    const items = steps.map((e, i) => (
        <StepContent key={e.title} data={e} />
    ))

    items.unshift(<PavimentosEscadas />)
    items.unshift(<EstiloCasa />)

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
            />
            <Carousel
                items={items}
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