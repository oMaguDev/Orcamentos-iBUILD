import { useContext, useEffect, useState } from "react"
import StepContent from "../../common/StepContent"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { loadbaseObraBranca } from "../../../utils/base_obra_branca"
import { UserContext } from "../../../contexts/UserContext"

const Telhas = ({ small }) => {
    const { franquia } = useContext(UserContext)
    const [baseObraBranca, setBaseObraBranca] = useState(null);

    useEffect(() => {
        const fetchBaseObraBranca = async () => {
            const baseObra = await loadbaseObraBranca(franquia);
            setBaseObraBranca(baseObra);
        };

        fetchBaseObraBranca();
    }, [franquia]);

    const [counter, setCounter] = useState(0)

    const {
        simData,
        setSimData,
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
        if (simData.telhas !== '' && baseObraBranca) {
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
    }, [simData.telhas, baseObraBranca])

    const inputs = null

    return (
        <StepContent
            data={{
                caption: 'Escolha o tipo de',
                title: 'Telha',
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
            }}
            noStatusBox
            small={small}
        />
    )
}

export default Telhas
