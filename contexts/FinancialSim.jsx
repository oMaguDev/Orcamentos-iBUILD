import { createContext, useState } from "react";


export const FinancialSimContext = createContext()

export const FinancialSimContextProvider = ({ children }) => {

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

    const [summary, setSummary] = useState({
        jurosAA: 0.08,
        jurosAM: 0.0064,
        prestamista: 0.00038128125,
        txAdm: 25,

        parcelaPrice: 0,
        parcelaSAC: [
            0,
            0
        ],
        amortizacao: 0,
    })



    return (
        <FinancialSimContext.Provider value={{
            resources,
            setResources,
            summary,
            setSummary
        }}>
            { children }
        </FinancialSimContext.Provider>
    )
}