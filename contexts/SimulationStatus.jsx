import { createContext, useContext, useEffect, useState } from "react";
import { RoomValuesContext } from "./RoomValues";
import { SimulationDataContext } from "./SimulationData";


export const SimulationStatusContext = createContext()

export const SimulationStatusContextProvider = ({ children }) => {

    const [simStatus, setSimStatus] = useState({
        funds: {
            total: 1000000,
            current: 0,
            previous: 0,
            available: 1000000,
        },
        area: {
            total: 150,
            current: 0,
            available: 0,
        }
    })

    const {
        rooms,
        setRooms,
        instalations,
        area,
        // setArea
    } = useContext(RoomValuesContext)

    const [sumRoomValues, setSumRoomValues] = useState(0)
    const [sumRoomAreas, setSumRoomAreas] = useState(0)
    const [instalationValues, setInstalationValues] = useState(0)

    // room values:
    
    useEffect(() => {
        let allRoomValues = 0
        for (let prop in rooms) {
            allRoomValues += rooms[prop]
        }
        setSumRoomValues(allRoomValues)
    }, [rooms])
  
    useEffect(() => {
        const newInstalationValues = instalations * sumRoomValues / 100
        // console.log('%: ', instalations / 100)
        setInstalationValues(newInstalationValues)
    }, [instalations, sumRoomValues])

    useEffect(() => {

        const currentFunds = sumRoomValues + instalationValues
        const availableFunds = simStatus.funds.total - currentFunds

        setSimStatus({
            ...simStatus,
            funds: {
                ...simStatus.funds,
                current: currentFunds,
                available: availableFunds,
            }
        })

    }, [sumRoomValues, instalationValues])
    

    // rooms areas:

    useEffect(() => {
        let allRoomsAreas = 0
        for (let prop in area) {
            allRoomsAreas += area[prop]
        }
        setSumRoomAreas(allRoomsAreas)
    }, [area])


    useEffect(() => {

        const currentArea = sumRoomAreas
        const availableArea = simStatus.area.total - currentArea

        setSimStatus({
            ...simStatus,
            area: {
                ...simStatus.area,
                current: currentArea,
                available: availableArea
            }
        })
    }, [sumRoomAreas])

    return (
        <SimulationStatusContext.Provider value={{
            simStatus,
            setSimStatus,
        }}>
            { children }
        </SimulationStatusContext.Provider>
    )
}