import Navbar from "../components/common/Navbar"
import Stepper from "../components/common/StepperBackground"
import { Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import Carousel from "../components/common/Carousel"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'


const Levantamento = () => {

    const router = useRouter()

    const [startPage, setStartPage] = useState(true)

    useEffect(() => {
        console.log('startPage: ', startPage )
    }, [startPage])

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
        'Informações pessoais',
        'Recursos Financeiros',
        'Resumo',
    ]

    const steps = [
        {
            caption: 'Informações',
            title: 'Pessoais',
            imageSrc: '/images/Pessoas/Pessoas 7.svg',
            value: area,
            onChange: setArea,
            inputs: [
                {
                    value: area,
                    onChange: setArea,
                    label: 'Renda Bruta Familiar (mensal comprovada)',
                    placeholder: 'Insira a renda mensal em reais',
                    type: 'number'
                },
                {
                    value: area,
                    onChange: setArea,
                    label: 'Data de nascimento (proponente mais velho)',
                    placeholder: 'DD/MM/AAAA',
                    type: 'number'
                },
                {
                    value: area,
                    onChange: setArea,
                    label: 'Estado Civil',
                    placeholder: 'Insira a área total',
                    type: 'number'
                },
                {
                    value: area,
                    onChange: setArea,
                    label: 'Local de construção',
                    placeholder: 'Insira a área total',
                    type: 'number'
                },
            ]
        },
        {
            caption: 'Recursos',
            title: 'Financeiros',
            value: estilo,
            onChange: setEstilo,
            inputs: [
                {
                    value: area,
                    onChange: setArea,
                    label: 'Valor estimado para o terreno',
                    placeholder: 'Insira o valor em reais',
                    type: 'number'
                },
                {
                    value: area,
                    onChange: setArea,
                    label: 'Valor disponível para entrada',
                    placeholder: 'Insira o valor da entrada em reais',
                    type: 'number'
                },
                {
                    value: area,
                    onChange: setArea,
                    label: 'Tem FGTS? Se sim, quanto?',
                    placeholder: 'Insira o valor do FGTS',
                    type: 'number'
                },
                {
                    value: area,
                    onChange: setArea,
                    label: 'Número do pis',
                    placeholder: 'Insira o número do pis',
                    type: 'number'
                },
                {
                    value: area,
                    onChange: setArea,
                    label: 'Selecione a modalidade de financiamento',
                    placeholder: 'Insira o número do pis',
                    type: 'number'
                },
            ]
        },
        {
            caption: 'Resumo',
            title: 'Recursos para construção',
            subtitle: 'Escolha quantos pavimentos e o estilo das escadas na sua nova casa. ',
            value: pavimentos,
            onChange: setPavimentos,
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
    ]

    const items = steps.map((e, i) => (
        <StepContent noStatusBox data={e} />
    ))

    if (startPage) {
        return (
            <Flex
                // alignItems='center'
                justifyContent='flex-end'
                height='100%'
            >
                <Navbar />
                <Stepper
                    pinkDisplay
                    title='Vamos fazer o levantamento dos seus recursos?'
                    parags={[
                        'Se você ainda não possui o projeto arquitetônico, não tem problema, a seguir faremos um passo a passo onde você poderá montar a sua casa projetando os cômodos do seu jeito.',
                        'Se você já possuir o projeto arquitetônico, preencha normalmente as próximas etapas conforme seu projeto e ao final saiba quanto sua casa vai custar.',
                    ]}
                    onStart={() => setStartPage(false)}
                />
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
                title='levantamento de recursos'    
            />
            <Carousel
                items={items}
                lastSlideAction={() => router.push('/')}
            />
        </Flex>
    )
}

export default Levantamento



























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