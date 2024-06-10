import { createContext, useEffect, useState, useContext } from "react"
import { loadbaseObraBranca } from "../utils/base_obra_branca";
import { UserContext } from "./UserContext";

export const SimulationDataContext = createContext();

export const SimulationDataContextProvider = ({ children }) => {
    const [franquia, setFranquia] = useState(null);
    const [baseObraBranca, setBaseObraBranca] = useState({});

    useEffect(() => {
        const fetchBaseObraBranca = async () => {
            const storedFranquia = localStorage.getItem('franquia');
            console.log('franquia no sim data: ', storedFranquia);
            setFranquia(storedFranquia);

            if (storedFranquia) {
                try {
                    const baseObra = await loadbaseObraBranca(storedFranquia);
                    setBaseObraBranca(baseObra);
                    console.log("Simulation Data Context Provider, Base Obra Branca: ", baseObra);
                } catch (error) {
                    console.error("Error loading base obra branca: ", error);
                }
            }
        };

        fetchBaseObraBranca();
    }, []);

    const [simData, setSimData] = useState({
        estilo: '',
        pavimentos: 0,
        escada: '',
        paredes: '',
        telhas: '',
        garagem: {
            value: 0,
            pattern: '',
            confort: '',
        },
        sala: {
            value: 0,
            pattern: '',
            confort: '',
        },
        cozinha: {
            value: 0,
            pattern: '',
            confort: '',
        },
        areaGourmet: {
            value: 0,
            pattern: '',
            confort: '',
        },
        areaServico: {
            value: 0,
            pattern: '',
            confort: '',
        },
        despensa: {
            value: 0,
            pattern: '',
            confort: '',
        },
        escritorio: {
            value: 0,
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
    });

    const [baseSqMtr, setBaseSqMtr] = useState({
        value: 0,
        category: ''
    });

    const baseSqrMtrValueCalculator = (category) => {
        console.log('dentro do sqrmeter value,', baseObraBranca);
        if (!baseObraBranca[category]) {
            console.error(`Category ${category} not found in baseObraBranca`);
            return 0;
        }
        if (simData.pavimentos === 1) {
            return baseObraBranca[category].one_pavement_meter;
        }
        if (simData.pavimentos > 1) {
            const currentBase = baseObraBranca[category];
            const sqrMeterValue = (currentBase.initial_services + currentBase.foundation + 
                (currentBase.structure * 1.08) + currentBase.slab + (currentBase.walls[0] * 1.22) + currentBase.walls[1] + currentBase.walls[2]) / 100;
            return sqrMeterValue;
        }
        return 0;
    };

    useEffect(() => {
        switch (simData.paredes) {
            case 'standard':
                setBaseSqMtr({
                    ...baseSqMtr,
                    category: 'standard'
                });
                break;
        
            case 'premium':
                setBaseSqMtr({
                    ...baseSqMtr,
                    category: 'premium'
                });
                break;
        
            case 'supreme':
                setBaseSqMtr({
                    ...baseSqMtr,
                    category: 'supreme'
                });
                break;

            default:
                break;
        }
    }, [simData.paredes]);

    useEffect(() => {
        if (baseSqMtr.category !== '') {
            setBaseSqMtr({
                ...baseSqMtr,
                value: baseSqrMtrValueCalculator(baseSqMtr.category)
            });
        }
    }, [baseSqMtr.category, simData.pavimentos]);

    useEffect(() => {
        console.log('baseSqMtr: ', baseSqMtr);
    }, [baseSqMtr]);

    return (
        <SimulationDataContext.Provider value={{
            simData,
            setSimData,
            baseSqMtr,
            setBaseSqMtr,
            baseSqrMtrValueCalculator,
        }}>
            { children }
        </SimulationDataContext.Provider>
    );
};
