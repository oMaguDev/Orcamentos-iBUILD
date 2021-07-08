import { createContext, useEffect, useState } from "react"


export const SimulationDataContext = createContext()

export const SimulationDataContextProvider = ({ children }) => {

    const [simData, setSimData] = useState({
        estilo: '',
        pavimentos: '',
        escada: '',
        paredes: '',
        telhas: '',
        garagem: {
            value: '',
            pattern: '',
            confort: '',
        },
        sala: {
            value: '',
            pattern: '',
            confort: '',
        },
        cozinha: {
            value: '',
            pattern: '',
            confort: '',
        },
        areaGourmet: {
            value: '',
            pattern: '',
            confort: '',
        },
        areaServico: {
            value: '',
            pattern: '',
            confort: '',
        },
        despensa: {
            value: '',
            pattern: '',
            confort: '',
        },
        escritorio: {
            value: '',
            pattern: '',
            confort: '',
        },
        quartos: {
            value: [
                {
                    quarto: '',
                    suite: '',
                    closet: ''
                },
            ],
            pattern: '',
            confort: '',
        },
        lavabos: {
            value: new Array(4).fill(''),
            pattern: '',
            confort: '',
        },
        banheiros: {
            value: new Array(4).fill(''),
            pattern: '',
            confort: '',
        },
        instalacoes: {
            hidraulica: '',
            eletrica: '',
        },
        confortos: '',
        acabamento: '',
    })

    const [resources, setResources] = useState({
        // first page:
        resourcesSelect: '',
        financed_before: '',
        land_status: '',
        project_status: '',

        // step 0:
        renda: '',
        dob: '',
        estado_civil: '',
        local_construcao: '',
        //  step 1:
        valor_terreno: '',
        valor_entrada: '',
        valor_fgts: '',
        num_pis: '',
        mod_financiamento: '',
    })

    const [simStatus, setSimStatus] = useState({
        funds: {
            total: 1000000,
            current: 15020,
            available: 1000000,
        },
        size: {
            total: '',
            current: '',
            available: ''
        }
    })

    useEffect(() => {
        console.log('simData: ', simData)
        console.log('resources: ', resources)
    }, [simData, resources])
    
    useEffect(() => {
        console.log('resources: ', resources)
    }, [])

    return (
        <SimulationDataContext.Provider value={{
            simData,
            setSimData,
            resources,
            setResources,
            simStatus,
            setSimStatus
        }}>
            { children }
        </SimulationDataContext.Provider>
    )
}