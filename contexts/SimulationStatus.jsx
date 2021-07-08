import { createContext, useEffect, useState } from "react";


export const SimulationStatusContext = createContext()

export const SimulationStatusContextProvider = ({ children }) => {

    const [simStatus, setSimStatus] = useState({
        funds: {
            total: 1000000,
            current: 0,
            previous: 0,
            available: 1000000,
        },
        size: {
            total: '',
            current: '',
            available: ''
        }
    })

    useEffect(() => {
        const updatedAvailableFunds = simStatus.funds.total - simStatus.funds.current
        setSimStatus({
            ...simStatus,
            funds: {
                ...simStatus.funds,
                available: updatedAvailableFunds
            }
        })
    }, [simStatus.funds.current])

    return (
        <SimulationStatusContext.Provider value={{
            simStatus,
            setSimStatus,
        }}>
            { children }
        </SimulationStatusContext.Provider>
    )
}