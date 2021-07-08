import { useContext, useEffect, useState } from "react"
import { Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../../common/RadioButtons"
import StatusBox from "../../common/StatusBox"
// import Select from "./Select"
import { MiddleContainer, StepContentContainer, StepImageContainer } from "../../common/StepContent/styles"
import Input from '../../form/Input'
import FinishingPattern from "../../common/FinishingPattern"
import StepContent from "../../common/StepContent"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { baseObraBranca } from "../../../utils/base_obra_branca"


const Telhas = () => {

    // const [telhas, setTelhas] = useState('')
    const [counter, setCounter] = useState(0)

    const {
        simData,
        setSimData,
        // simStatus,
        // setSimStatus,
        baseSqMtr,
        setBaseSqMtr,
        baseSqrMtrValueCalculator,
    } = useContext(SimulationDataContext)

    const options = [
        {
            label: 'TERMOACÚSTICA',
            value: 'termoacustica',
        },
        {
            label: 'FIBROCIMENTO',
            value: 'fibrocimento',
        },
        {
            label: 'CERÂMICA',
            value: 'ceramica',
        },
    ]

    useEffect(() => {
        if (simData.telhas !== '') {
            if (counter === 0) {
                const baseSqMtrWithRoof = baseSqMtr.value + baseObraBranca.cobertura[simData.telhas] + baseObraBranca.cobertura.calhas
                setBaseSqMtr({
                    ...baseSqMtr,
                    value: baseSqMtrWithRoof
                })
            } else {
                const restartedBaseSqrMtrValue = baseSqrMtrValueCalculator(baseSqMtr.category)
                const baseSqMtrWithRoof = restartedBaseSqrMtrValue + baseObraBranca.cobertura[simData.telhas] + baseObraBranca.cobertura.calhas
                setBaseSqMtr({
                    ...baseSqMtr,
                    value: baseSqMtrWithRoof
                })
            }
        }    
        setCounter(counter + 1)
    }, [simData.telhas])

    const inputs = null
    return (
        <StepContent data={{
            caption: 'Escolha o tipo de',
            title: 'Telha',
            // subtitle: 'Escolha o tipo das telhas da casa',
            imageSrc: '/images/Ambientes/Ambientes15.svg',
            value: simData.telhas,
            onChange: (newValue) => setSimData({
                ...simData,
                telhas: newValue
            }),
            options: [
                {
                    label: 'TERMOACÚSTICA',
                    value: 'termoacustica',
                },
                {
                    label: 'FIBROCIMENTO',
                    value: 'fibrocimento',
                },
                {
                    label: 'CERÂMICA',
                    value: 'ceramica',
                },
            ]
        }} />

        // <Flex
        //     width='100%'
        //     justifyContent='space-evenly'
        //     key={('Telha')}
        // >
        //     <StepImageContainer>
        //         <img style={{ height: '100%' }} src='/images/Ambientes/Ambientes15.svg' alt="" />
        //     </StepImageContainer>
        //     <StepContentContainer>
        //         <TitleContainer
        //             key={`${('Telha')}_title_container`}
        //         >
        //             <h4>{('Escolha o tipo de').toUpperCase()}</h4>
        //             <h2>{('Telha').toUpperCase()}</h2>
        //             {/* <p>{data.subtitle}</p> */}
        //         </TitleContainer>
        //         {/* {noStatusBox ? (
        //             <>
        //                 {options && (
        //                     <RadioButtons
        //                         options={options}
        //                         onChange={setTelhas}
        //                         select={telhas}
        //                     />
        //                 )}
        //                 {inputs && inputs.map((e, i) => (
        //                     <Input
        //                         value={e.value}
        //                         onChange={(event) => e.onChange(event.target.value)}
        //                         label={e.label}
        //                         placeholder={e.placeholder}
        //                         type={e.type ? e.type : 'text'}
        //                         margin='10px'
        //                         width={e.width ? e.width : '100%'}
        //                         small
        //                         key={e.label}
        //                     />
        //                 ))}
        //             </>
        //         ) : ( */}
        //         <MiddleContainer
        //         key={`${'Telha'}_middle_container`}
        //         >
        //             {options && (
        //                 <RadioButtons
        //                     options={options}
        //                     onChange={setTelhas}
        //                     select={telhas}
        //                     key={`${('Telha')}_radio_buttons`}
        //                 />
        //             )}
        //             {inputs && inputs.map((e, i) => (
        //                 <Input
        //                     value={e.value}
        //                     onChange={(event) => e.onChange(event.target.value)}
        //                     label={e.label}
        //                     placeholder={e.placeholder}
        //                     type={e.type ? e.type : 'text'}
        //                     margin='10px'
        //                     width={e.width ? e.width : '100%'}
        //                     small
        //                     key={e.label}
        //                 />
        //             ))}
        //             {/* <Select /> */}
        //         </MiddleContainer>
        //         {/* )} */}
        //         {/* {!noStatusBox && (
        //             <>
        //                 { data.withFinishingPattern && (
        //                     <FinishingPattern />
        //                 )}
        //                 <StatusBox />
        //             </>
        //         )} */}
        //     </StepContentContainer>
        // </Flex>
    )
}

export default Telhas