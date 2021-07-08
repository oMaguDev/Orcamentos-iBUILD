import { useContext } from "react"
import { SimulationStatusContext } from "../contexts/SimulationStatus"


const useSetHomeValue = () => {
    const { simStatus, setSimStatus } = useContext(SimulationStatusContext)

    function setCurrentValue (value) {
        // console.log('new simStatus: ', {
        //     ...simStatus,
        //     funds: {
        //         ...simStatus.funds,
        //         current: value,
        //     }
        // })
        setSimStatus({
            ...simStatus,
            funds: {
                ...simStatus.funds,
                current: value,
            }
        })
    }

    function setPreviousValue (value) {
        // console.log('new simStatus: ', {
        //     ...simStatus,
        //     funds: {
        //         ...simStatus.funds,
        //         previous: value,
        //     }
        // })
        setSimStatus({
            ...simStatus,
            funds: {
                ...simStatus.funds,
                previous: value,
            }
        })
    }

    return {
        setCurrentValue,
        setPreviousValue,
    }
}

export default useSetHomeValue