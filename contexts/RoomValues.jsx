import { createContext, useEffect, useState } from "react";


export const RoomValuesContext = createContext()

export const RoomValuesContextProvider = ({ children }) => {

    const [rooms, setRooms] = useState({
        // estilo: 0,
        // pavimentos: 0,
        // escada: 0,
        // paredes: 0,
        // telhas: 0,
        garagem: 0,
        sala: 0,
        cozinha: 0,
        areaGourmet: 0,
        areaServico: 0,
        despensa: 0,
        escritorio: 0,
        quartos: 0,
        lavabos: 0,
        banheiros: 0,
        // instalacoes: ,
    })

    useEffect(() => {
        console.log('rooms: ', rooms)
    }, [rooms])

    return (
        <RoomValuesContext.Provider value={{
            rooms: rooms,
            setRooms
        }}>
            { children }
        </RoomValuesContext.Provider>
    )
}