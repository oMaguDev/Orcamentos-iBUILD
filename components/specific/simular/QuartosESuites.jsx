import { Box, Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../../common/RadioButtons"
import StatusBox from "../../common/StatusBox"
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "../../common/StepContent/styles"
import Input from '../../form/Input'
import FinishingPattern from "../../common/FinishingPattern"
import { useContext, useEffect, useState } from "react"
import { Parag } from "../../Text"
import Button from "../../common/Button"
import { SimulationDataContext } from "../../../contexts/SimulationData"


const QuartosESuitesSlide = ({ data }) => {

    const [quartos, setQuartos] = useState([])
    const [rows, setRows] = useState([1])

    const { simData, setSimData } = useContext(SimulationDataContext)

    const rooms = [
        'quarto',
        'suite',
        'closet'
    ]

    const returnRoom = (index) => ({
        title: `Quarto ${index + 1}`,
        value: simData?.quartos[index],
        onChange: newValue => {
            const lastQuartos = [...simData?.quartos]
            lastQuartos[index] = newValue
            return setQuartos(newValue)
        },
        options: [
            {
                value: 'none',
                label: 'NÃO QUERO',
            },
            {
                value: '_pq',
                label: 'PEQUENO (APROX. 12 M2)',
            },
            {
                value: '_md',
                label: 'MÉDIO (APROX. 24 M2)',
            },
            {
                value: '_gd',
                label: 'GRANDE (APROX. 12 M2)',
            },
        ]
    })

    const roomOptions = [
        {
            value: 'none',
            label: 'NÃO QUERO',
        },
        {
            value: '_pq',
            label: 'PEQUENO (APROX. 12 M2)',
        },
        {
            value: '_md',
            label: 'MÉDIO (APROX. 24 M2)',
        },
        {
            value: '_gd',
            label: 'GRANDE (APROX. 12 M2)',
        },
    ]

    // const quarto = {
    //     title: 'Quarto',
    //     value: quartos[0],
    //     onChange: newValue => {
    //         const lastQuartos = [...quartos]
    //         lastQuartos[0] = newValue
    //         return setQuartos(newValue)
    //     },
    //     options: [
    //         {
    //             value: 'sem_quarto',
    //             label: 'NÃO QUERO',
    //         },
    //         {
    //             value: 'quarto_pq',
    //             label: 'PEQUENO (APROX. 12 M2)',
    //         },
    //         {
    //             value: 'quarto_md',
    //             label: 'MÉDIO (APROX. 24 M2)',
    //         },
    //         {
    //             value: 'quarto_gd',
    //             label: 'GRANDE (APROX. 12 M2)',
    //         },
    //     ]
    // }

    useEffect(() => {
        console.log('rows: ', rows)
    }, [rows])

    return (
        <>
            <Box height='50px'></Box>
            <SlideContainer
                key={'Quartos/Suítes'}
            >
                <StepImageContainer
                    key={`${'Quartos/Suítes'}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes6.svg' alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${'Quartos/Suítes'}_step_content_container`}
                >
                    <TitleContainer
                        key={`${'Quartos/Suítes'}_title_container`}
                    >
                        <h4>{'Escolha a quantidade eo tamanho dos'.toUpperCase()}</h4>
                        <h2>{'Quartos/Suítes'.toUpperCase()}</h2>
                    </TitleContainer>

                    <MiddleContainer
                        key={`${'Quartos/Suítes'}_middle_container`}
                    >
                        {/* {data?.options && (
                            <RadioButtons
                                options={data.options}
                                onChange={data.onChange}
                                select={data.value}
                                key={`${'Quartos/Suítes'}_radio_buttons`}
                            />
                        )} */}
                        { rows?.map((el, idx) => (
                            <Flex
                                width='100%'
                                margin='15px 0'
                            >
                                {rooms.map((e, i) => (
                                    <Flex
                                        column
                                        alignItems='flex-start'
                                    >
                                        <Parag
                                            margin='0 0 10px'
                                        >
                                            <strong>
                                                {`${e.toUpperCase()} ${idx + 1}`}
                                            </strong>
                                        </Parag>
                                        {/* { console.log(returnRoom(idx))} */}
                                        <RadioButtons
                                            small
                                            options={roomOptions}
                                            onChange={(newValue) => {
                                                const previousQuartos = [...simData.quartos.value]
                                                console.log('previousQuartos: ', previousQuartos)
                                                const previousQuartosRow = { ...previousQuartos[idx] }
                                                previousQuartosRow[e] = newValue
                                                previousQuartos[idx] = { ...previousQuartosRow }
                                                console.log('previousQuartos: ', previousQuartos)
                                                return setSimData({
                                                    ...simData,
                                                    quartos: {
                                                        ...simData.quartos,
                                                        value: previousQuartos
                                                    }
                                                }) 
                                            }} //onChange(returnRoom(idx).value)
                                            select={simData && simData.quartos && simData.quartos.value && simData.quartos.value[idx][e]}
                                            key={`${'Quartos/Suítes'}_${idx}_radio_buttons`}
                                        />
                                    </Flex>
                                ))}
                            </Flex>
                        ))}
                        <Button
                            fullWidth
                            fontSize='0.8rem'
                            margin='15px 0 0'
                            onClick={() => {
                                const currentRows = rows.length
                                setRows(new Array(currentRows + 1).fill(1))
                                const oneMoreRow = [ ...simData.quartos.value ]
                                oneMoreRow.push({
                                    quarto: '',
                                    suite: '',
                                    closet: ''
                                },)
                                setSimData({
                                    ...simData,
                                    quartos: {
                                        ...simData.quartos,
                                        value: oneMoreRow
                                    }
                                })
                            }}
                        >
                            [+] ADICIONAR MAIS QUARTOS
                        </Button>
                    </MiddleContainer>
                    <>
                        <FinishingPattern
                            confort={simData.quartos.confort}
                            setConfort={newValue => setSimData({
                                ...simData,
                                quartos: {
                                    ...simData.quartos,
                                    confort: newValue
                                }
                            })}
                            pattern={simData.quartos.pattern}
                            setPattern={newValue => setSimData({
                                ...simData,
                                quartos: {
                                    ...simData.quartos,
                                    pattern: newValue
                                }
                            })}
                        />
                        <StatusBox />
                    </>
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default QuartosESuitesSlide