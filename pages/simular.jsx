import Navbar from "../components/common/Navbar"
import Stepper from "../components/common/StepperBackground"
import { Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import Carousel from "../components/common/Carousel"
import { useState } from "react"


const Simular = () => {

    const [lavabos, setLavabos] = useState('')
    const [estilo, setEstilo] = useState('')

    const stepsTitles = [
        'Área Total',
        'Estilo Arquitetônico',
        'Qtde. Pavimentos',
        'Paredes Externas',
        'Tipo Telha',
        'Garagem',
        'Sala Estar-TV',
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
        {
            caption: 'Escolha o estilo',
            title: 'Estilo Arquitetônico',
            subtitle: 'Tudo bem se não for exatamente igual, a ideia aqui é nos ajudar a entender qual o estilo do seu projeto',
            value: estilo,
            onChange: setEstilo,
            options: [
                {
                    label: 'Clássica',
                    value: 'classica',
                },
                {
                    label: 'Neo-Clássica',
                    value: 'neoClassica',
                },
                {
                    label: 'Mediterrânea',
                    value: 'mediterranea',
                },
                {
                    label: 'Brasileira',
                    value: 'brasileira',
                },
                {
                    label: 'Minimalista',
                    value: 'minimalista',
                },
                {
                    label: 'Contemporânea',
                    value: 'contemporanea',
                },
                {
                    label: 'Americana',
                    value: 'americana',
                },
                {
                    label: 'Europeia',
                    value: 'europeia',
                },
            ]
        },
        {
            caption: 'Escolha a quantidade',
            title: 'Pavimentos e escadas',
            subtitle: 'Escolha quantos pavimentos e o estilo das escadas na sua nova casa. ',
            value: estilo,
            onChange: setEstilo,
            options: [
                {
                    label: '1',
                    value: '1',
                },
                {
                    label: '2',
                    value: '2',
                },
                {
                    label: '3',
                    value: '3',
                },
                {
                    label: '4',
                    value: '4',
                },
            ]
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
        <StepContent data={e} />
    ))

    return (
        <Flex
            // alignItems='center'
            justifyContent='flex-end'
            height='100%'
        >
            <Navbar />
            <Stepper steps={stepsTitles} />
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