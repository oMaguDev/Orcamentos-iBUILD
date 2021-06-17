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
        quartos: '',
        lavabos: '',
        banheiros: '',
        instalacoes: '',
        confortos: '',
        acabamento: '',
    })

    useEffect(() => {
        console.log('simData: ', simData)
    }, [simData])

    return (
        <SimulationDataContext.Provider value={{
            simData,
            setSimData
        }}>
            { children }
        </SimulationDataContext.Provider>
    )
}
