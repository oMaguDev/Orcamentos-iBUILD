import { createContext, useContext, useEffect, useState } from "react";
import { RoomValuesContext } from "./RoomValues";


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

    const { rooms, setRooms} = useContext(RoomValuesContext)

    // useEffect(() => {
    //     setSimStatus({
    //         ...simStatus,
    //         funds: {
    //             ...simStatus.funds,
    //             available: updatedAvailableFunds
    //         }
    //     })
    // }, [simStatus.funds.current])
    
    useEffect(() => {
        let sumRoomValues = 0
        for (let prop in rooms) {
            sumRoomValues += rooms[prop]
        }
        const updatedAvailableFunds = simStatus.funds.total - sumRoomValues
        setSimStatus({
            ...simStatus,
            funds: {
                ...simStatus.funds,
                current: sumRoomValues,
                available: updatedAvailableFunds,
            }
        })
    }, [rooms])

    return (
        <SimulationStatusContext.Provider value={{
            simStatus,
            setSimStatus,
        }}>
            { children }
        </SimulationStatusContext.Provider>
    )
}