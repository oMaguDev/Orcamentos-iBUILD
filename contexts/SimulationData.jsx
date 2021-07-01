import { createContext, useEffect, useState } from "react"


export const SimulationDataContext = createContext()

export const SimulationDataContextProvider = ({ children }) => {

    const [simData, setSimData] = useState({
        estilo: '',
        pavimentos: '',
        escada: '',
        paredes: '',
        telhas: '',
        garagem: '',
        sala: '',
        cozinha: '',
        areaGourmet: '',
        areaServico: '',
        despensa: '',
        escritorio: '',
        quartos: [
            {
                quarto: '',
                suite: '',
                closet: ''
            },
        ],
        lavabos: new Array(4).fill(''),
        banheiros: new Array(4).fill(''),
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
            current: 1000000,
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