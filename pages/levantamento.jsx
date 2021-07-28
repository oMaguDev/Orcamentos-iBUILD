import Navbar from "../components/common/Navbar"
import Stepper from "../components/common/StepperBackground"
import { Box, Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import Carousel from "../components/common/Carousel"
import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/router'
import ResourcesIndex from "../components/specific/levantamento/ResumoDosRecursos"
import { ActiveIndexContext } from "../contexts/activeIndex"
import { FinancialSimContext } from '../contexts/FinancialSim'
import Personal from "../components/specific/levantamento/Personal"
import { formatMoney } from "../utils/format"
import Finance from "../components/specific/levantamento/Finance"
import { Body2 } from '../components/Text'


const Levantamento = () => {

    const router = useRouter()

    const { setActiveIndex } = useContext(ActiveIndexContext)

    const [startPage, setStartPage] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)

    // useEffect(() => {
    //     console.log('startPage: ', startPage )
    // }, [startPage])

    // useEffect(() => {
    //     console.log('area: ', area)
    //     console.log('lavabos: ', lavabos)
    //     console.log('estilo: ', estilo)
    //     console.log('pavimentos: ', pavimentos)
    // }, [area, lavabos, estilo, pavimentos])

    useEffect(() => {
        console.log('formatMoney(parseFloat(resources.renda)): ', formatMoney(parseFloat(resources.renda)))
        console.log('resources.renda: ', resources.renda)
        console.log('parseFloat(resources.renda): ', parseFloat(resources.renda))
    }, [])

    const {
        resources,
        setResources,
        summary,
    } = useContext(FinancialSimContext)

    const stepsTitles = [
        'Informações pessoais',
        'Recursos Financeiros',
        'Resumo',
    ]

    const steps = [
        // {
        //     caption: 'Informações',
        //     title: 'Pessoais',
        //     imageSrc: '/images/Ambientes/Ambientes1.svg',
        //     value: resources.renda,
        //     onChange: newValue => setResources({
        //         ...resources,
        //         renda: newValue
        //     }),
        //     inputs: [
        //         {
        //             value: resources.renda,
        //             onChange: newValue => setResources({
        //                 ...resources,
        //                 renda: newValue
        //             }),
        //             label: 'Renda Bruta Familiar (mensal comprovada)',
        //             placeholder: 'Insira a renda mensal em reais',
        //             type: 'number'
        //         },
        //         {
        //             value: resources.dob,
        //             onChange: newValue => setResources({
        //                 ...resources,
        //                 dob: newValue
        //             }),
        //             label: 'Data de nascimento (proponente mais velho)',
        //             placeholder: 'DD/MM/AAAA',
        //             // type: 'number',
        //             mask: 'date'
        //         },
        //         {
        //             value: resources.estado_civil,
        //             onChange: newValue => setResources({
        //                 ...resources,
        //                 estado_civil: newValue
        //             }),
        //             label: 'Estado Civil',
        //             placeholder: 'Insira o seu estado civil',
        //             type: 'number'
        //         },
        //         {
        //             value: resources.local_construcao,
        //             onChange: newValue => setResources({
        //                 ...resources,
        //                 local_construcao: newValue
        //             }),
        //             label: 'Local de construção',
        //             placeholder: 'Insira o estado e o municipio',
        //             type: 'number'
        //         },
        //     ]
        // },
        {
            caption: 'Recursos',
            title: 'Financeiros',
            value: resources.valor_terreno,
            imageSrc: '/images/Ícones/Ícones 2.svg',
            onChange: newValue => setResources({
                ...resources,
                valor_terreno: newValue
            }),
            inputs: [
                {
                    value: resources.valor_terreno,
                    onChange: newValue => setResources({
                        ...resources,
                        valor_terreno: newValue
                    }),
                    label: 'Valor estimado para o terreno',
                    placeholder: 'Insira o valor em reais',
                    type: 'number'
                },
                {
                    value: resources.valor_entrada,
                    onChange: newValue => setResources({
                        ...resources,
                        valor_entrada: newValue
                    }),
                    label: 'Valor disponível para entrada',
                    placeholder: 'Insira o valor da entrada em reais',
                    type: 'number'
                },
                {
                    value: resources.valor_fgts,
                    onChange: newValue => setResources({
                        ...resources,
                        valor_fgts: newValue
                    }),
                    label: 'Tem FGTS? Se sim, quanto?',
                    placeholder: 'Insira o valor do FGTS',
                    type: 'number'
                },
                {
                    value: resources.num_pis,
                    onChange: newValue => setResources({
                        ...resources,
                        num_pis: newValue
                    }),
                    label: 'Número do pis',
                    placeholder: 'Insira o número do pis',
                    type: 'number'
                },
                {
                    value: resources.mod_financiamento,
                    onChange: newValue => setResources({
                        ...resources,
                        mod_financiamento: newValue
                    }),
                    label: 'Selecione a modalidade de financiamento',
                    placeholder: 'Insira a modalidade de financiamento',
                    type: 'number'
                },
            ]
        },
        // {
        //     caption: 'Resumo',
        //     title: 'Recursos para construção',
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
    ]

    // const items = steps.map((e, i) => (
    //     <StepContent isCheckout={i === steps.length - 1} noStatusBox data={e} />
    // ))

    // items.unshift(<Personal />)

    // items.push(<ResourcesIndex />)

    const items = [
        <Personal />,
        <Finance />,
        <ResourcesIndex />
    ]

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
                        'A partir de agora vamos fazer um levantamento para analisar a viabilidade financeira do seu imóvel. Preencha os próximos campos corretamente para conseguirmos simular o valor aproximado do seu imóvel.',
                    ]}
                    onStart={() => setStartPage(false)}
                />
                <Flex
                    width='100%'
                    maxWidth='700px'
                    height='100%'
                    padding='20px'
                >
                    <img src="/images/Pessoas/Pessoas 8.svg" width='80%' height='80%' alt="" />
                </Flex>
            </Flex>
        )
    }

    return (
        <>
            <Flex
                // alignItems='center'
                justifyContent='flex-end'
                height='100%'
            >
                <Navbar />
                <Stepper
                    steps={stepsTitles}
                    title='levantamento de recursos'
                    page='levantamento'
                />
                <Carousel
                    items={items}
                    page='levantamento'
                    lastSlideAction={() => {
                        if (summary.valorImovel < 1) {
                            setErrorMessage(true)
                        } else {
                            router.push('/simular')
                        }
                    }}
                />
                {/* summary.notFilled && */}
            </Flex>
        </>
    )
}

export default Levantamento







// {errorMessage && (
//     <>
//         {/* { errorMessage } */}
//         Preencha todos os campos para continuar
//     </>
// )}