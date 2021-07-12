import { baseAcabamentos } from "./base_acabamentos"
import { baseObraBranca } from "./base_obra_branca"


export const calculateGarage = (garagem, baseSqMtr) => {
    const area = garagem.value
    const areaPiso = area * 1.1
    const areaParede = area * 2.33

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.garagem[garagem.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.garagem[garagem.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.garagem[garagem.pattern].forro * area

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro
        
    if (garagem.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateSala = (sala, baseSqMtr) => {
    const area = sala.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.sala[sala.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.sala[sala.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.sala[sala.pattern].forro * area
    const peitoril = baseAcabamentos.sala[sala.pattern].peitoril
    const porta = baseAcabamentos.sala[sala.pattern].porta
    const esquadria = baseAcabamentos.sala[sala.pattern].esquadria

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria
        
    if (sala.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateCozinha = (cozinha, baseSqMtr) => {
    const area = cozinha.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.cozinha[cozinha.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.cozinha[cozinha.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.cozinha[cozinha.pattern].forro * area
    const peitoril = baseAcabamentos.cozinha[cozinha.pattern].peitoril
    const porta = baseAcabamentos.cozinha[cozinha.pattern].porta
    const esquadria = baseAcabamentos.cozinha[cozinha.pattern].esquadria
    const loucas = baseAcabamentos.cozinha[cozinha.pattern].loucas
    const marmore = baseAcabamentos.cozinha[cozinha.pattern].marmore

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (cozinha.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateAreaGourmet = (areaGourmet, baseSqMtr) => {
    const area = areaGourmet.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.areaGourmet[areaGourmet.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.areaGourmet[areaGourmet.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.areaGourmet[areaGourmet.pattern].forro * area
    const peitoril = baseAcabamentos.areaGourmet[areaGourmet.pattern].peitoril
    const porta = baseAcabamentos.areaGourmet[areaGourmet.pattern].porta
    const esquadria = baseAcabamentos.areaGourmet[areaGourmet.pattern].esquadria
    const loucas = baseAcabamentos.areaGourmet[areaGourmet.pattern].loucas
    const marmore = baseAcabamentos.areaGourmet[areaGourmet.pattern].marmore

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (areaGourmet.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateAreaServico = (areaServico, baseSqMtr) => {
    const area = areaServico.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.areaServico[areaServico.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.areaServico[areaServico.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.areaServico[areaServico.pattern].forro * area
    const peitoril = baseAcabamentos.areaServico[areaServico.pattern].peitoril
    const porta = baseAcabamentos.areaServico[areaServico.pattern].porta
    const esquadria = baseAcabamentos.areaServico[areaServico.pattern].esquadria
    const loucas = baseAcabamentos.areaServico[areaServico.pattern].loucas
    const marmore = baseAcabamentos.areaServico[areaServico.pattern].marmore

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (areaServico.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateDespensa = (despensa, baseSqMtr) => {
    const area = despensa.value
    const areaPiso = area 
    const areaParede = area * 2.93
    
    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.despensa[despensa.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.despensa[despensa.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.despensa[despensa.pattern].forro * area
    const porta = baseAcabamentos.despensa[despensa.pattern].porta
    
    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro +  porta
    
    if (despensa.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }
    
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro
    
    return valorAmbiente
}

export const calculateEscritorio = (escritorio, baseSqMtr) => {
    const area = escritorio.value
    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.escritorio[escritorio.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.escritorio[escritorio.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.escritorio[escritorio.pattern].forro * area
    const peitoril = baseAcabamentos.escritorio[escritorio.pattern].peitoril
    const porta = baseAcabamentos.escritorio[escritorio.pattern].porta
    const esquadria = baseAcabamentos.escritorio[escritorio.pattern].esquadria

    // console.log('valor m2: ', valorBase)
    // console.log('valor paredes internas: ', paredesInternas)
    // console.log('valor piso: ', piso)
    // console.log('valor pintura paredes internas: ', pinturaParedes)
    // console.log('valor pintura forro: ', pinturaForro)
    // console.log('peitoril: ', peitoril)
    // console.log('porta: ', porta)
    // console.log('esquadria: ', esquadria)

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria
        
    if (escritorio.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}



























// const area = simData[slide].value
// const areaPiso = area * 1.1
// const areaParede = area * 2.33

// // console.log('valor m2: ', baseSqMtr.value * area)
// const valorBase = baseSqMtr.value * area
// // console.log('valor paredes internas: ', (areaParede * baseObraBranca.fechamento_interno.paredes))
// const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
// // console.log('valor piso: ', (baseAcabamentos[slide][simData[slide].pattern].piso * areaPiso))
// const piso = baseAcabamentos[slide][simData[slide].pattern].piso * areaPiso
// // console.log('valor pintura paredes internas: ', (baseAcabamentos[slide][simData[slide].pattern].pintura * areaParede))
// const pinturaParedes = baseAcabamentos[slide][simData[slide].pattern].pintura * areaParede
// // console.log('valor pintura forro: ', (baseAcabamentos[slide][simData[slide].pattern].forro * area))
// const pinturaForro = baseAcabamentos[slide][simData[slide].pattern].forro * area

// let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro
    
// if (simData[slide].confort === 'sim') {
//     valorAmbiente += baseObraBranca.conforto_interno * areaParede
// }

// const margemLucro = 1.3
// valorAmbiente = valorAmbiente * margemLucro

// return valorAmbiente