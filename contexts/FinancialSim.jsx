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

    return (
        <FinancialSimContext.Provider value={{
            resources,
            setResources
        }}>
            { children }
        </FinancialSimContext.Provider>
    )
}