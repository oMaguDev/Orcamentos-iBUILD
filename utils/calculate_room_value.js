
import { loadBaseAcabamentos } from "./base_acabamentos.js"
import { loadbaseObraBranca } from "./base_obra_branca"

const CalcularValorBase = async (franquia,simData,comodo,conforto) => {
    console.log("############# calcular valor base #############")
    // console.log("############# Valores Base #############")
    const baseAcabamentos = await loadBaseAcabamentos(franquia);
    const baseObraBranca = await loadbaseObraBranca(franquia);
    // console.log('valores acabamento: ', baseAcabamentos)
    // console.log('valores obra branca: ', baseObraBranca)
    // console.log('Franquia: ', franquia)
    // console.log('valores comodo: ', comodo)
    // console.log('valores simData: ', simData)

    const Dimensoes = {
        metroQuadrado : comodo.value
    }
    console.log("############# Areas #############")
    Dimensoes['areaPiso'] = Dimensoes.metroQuadrado * 1.1
    Dimensoes['areaParede'] = Dimensoes.metroQuadrado * 2.33
    console.log('comodo metro Quadrado: ', Dimensoes.metroQuadrado)
    console.log('comodo areaParede: ', Dimensoes.areaParede)
    console.log('comodo areaPiso: ', Dimensoes.areaPiso)

    /*  
        Custos da Garagem
            [x] Servicos iniciais
            [x] Fundação
            [x] Estrutura
            [-] Lajes
            [-] Coberturas
            [-] Eletrica
            [x] Paredes e Fechamento
            [x] Forro
            [x] Conforto Interno
    */

    // console.log("############# Valores do comodo #############")
    // const canteiro_obra = baseObraBranca.servicos_iniciais.canteiro_obra * 1
    // const container_limpeza = baseObraBranca.servicos_iniciais.container_limpeza * tempoObraEmMeses
    // const locacao_radier = baseObraBranca.servicos_iniciais.locacao_radier * Dimensoes.metroQuadrado
    // const servicosIniciais = canteiro_obra + container_limpeza + locacao_radier
    // console.log('Servicos iniciais: ',servicosIniciais)
    
    // Valores que dependem de saber o tempo total da obra, ou a metragem quadrada total, só devem ser calculados ao final da simulação, para evitar mudanças dos valores apresentados
    // const equipamento = baseObraBranca.fundacao.equipamento * (tempoObraEmMeses * 31)
    // const formas_fundacao_radier = baseObraBranca.fundacao.formas_fundacao_radier * tempoObraEmMeses
    const radier_concreto = baseObraBranca.fundacao.radier_concreto * (Dimensoes.metroQuadrado * 0.17)
    // const bomba_lanca_concreto = baseObraBranca.fundacao.bomba_lanca_concreto * (tempoObraEmMeses * 31)
    // const fundacao = equipamento + formas_fundacao_radier + radier_concreto + bomba_lanca_concreto
    // console.log('equipamento: ',equipamento)
    // console.log('formas_fundacao_radier: ',formas_fundacao_radier)
    // console.log('radier_concreto: ',radier_concreto)
    // console.log('bomba_lanca_concreto: ',bomba_lanca_concreto)
    // console.log('Fundacao: ',fundacao)
    
    // Definir valor do aço de acordo com a condição
    let acoConsiderado;
    if (simData.pavimentos === 1) {
        if (simData.vaos === "Y") {
            acoConsiderado = 1;
        } else {
            acoConsiderado = 0;
        }
    } else if (simData.pavimentos > 1) {
        if (simData.vaos === "Y") {
            acoConsiderado = 2;
        } else {
            acoConsiderado = 1;
        }
    }
    const locacao_andaimes = baseObraBranca.estrutura.locacao_andaimes * Dimensoes.metroQuadrado
    const locacao_paineis_lsf = baseObraBranca.estrutura.locacao_paineis_lsf * Dimensoes.areaParede
    const aco = baseObraBranca.estrutura.aco[acoConsiderado] * Dimensoes.metroQuadrado
    const estrutura = locacao_andaimes + locacao_paineis_lsf + aco
    console.log("aco considerado indice", acoConsiderado ,"valor aco", baseObraBranca.estrutura.aco[acoConsiderado], "aco considerado valor",aco)
    
    let instalacaoPaineis = 0;
    let isolamentoTermoacustico = 0;

    if (conforto === "sim") {
        instalacaoPaineis = baseObraBranca.paredes.conforto_interno.instalacao_paineis * Dimensoes.areaParede;
        isolamentoTermoacustico = baseObraBranca.paredes.conforto_interno.isolamento_termoacustico * (Dimensoes.areaParede / 2);
    }
    
    const locacao_andaimes_internos = baseObraBranca.paredes.fechamento_interno.locacao_andaimes_internos * Dimensoes.metroQuadrado
    const fechamento_placas_gesso = baseObraBranca.paredes.fechamento_interno.fechamento_placas_gesso * Dimensoes.areaParede
    let forros;
    if (simData.vaos === 'Y') {
        forros = baseObraBranca.paredes.forros.Y.forro_acustico * Dimensoes.metroQuadrado;
    } else {
        forros = baseObraBranca.paredes.forros.N.forro_acustico * Dimensoes.metroQuadrado;
    }
    
    const paredes = instalacaoPaineis + isolamentoTermoacustico + locacao_andaimes_internos + fechamento_placas_gesso + forros
    console.log('Paredes: ',paredes)
    let valorObraBranca = estrutura + paredes
    console.log("valor ambiente", valorObraBranca);
    return {valorObraBranca, Dimensoes}
}

export const calculateGarage = async (garagem, baseSqMtr, franquia, simData) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);
    
    /*  
        Custos da Garagem
            [x] Servicos iniciais
            [x] Fundação
            [x] Estrutura
            [-] Lajes
            [-] Coberturas
            [-] Eletrica
            [x] Paredes e Fechamento
            [x] Forro
            [x] Conforto Interno
    */

    let {valorObraBranca, Dimensoes} = await CalcularValorBase(franquia,simData,garagem,simData.garagem.confort)
    console.log(`Valor retornado obra branca Garagem: ${valorObraBranca}`);
    let valorAcabamentos = 0
    let valorAmbiente = valorObraBranca + valorAcabamentos
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    console.log('valorAmbiente garagem: ', valorAmbiente)

    return valorAmbiente
}

export const calculateSala = async (sala, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);

    /*  
    Custos da sala (A mapear)
    [x] Servicos iniciais
    [x] Fundação
    [x] Estrutura
    [-] Lajes
    [-] Coberturas
    [-] Eletrica
    [x] Paredes e Fechamento
    [x] Forro
    [x] Conforto Interno
    */

    let {valorObraBranca, Dimensoes} = await CalcularValorBase(franquia,simData,sala,simData.sala.confort)
    console.log(`Valor retornado obra branca sala: ${valorObraBranca}`);
    let valorAcabamentos = 0
    let valorAmbiente = valorObraBranca + valorAcabamentos
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    console.log('valorAmbiente sala: ', valorAmbiente)

    return valorAmbiente
}

export const calculateCozinha = async (cozinha, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);

    /*  
    Custos da sala (A mapear)
    [x] Servicos iniciais
    [x] Fundação
    [x] Estrutura
    [-] Lajes
    [-] Coberturas
    [-] Eletrica
    [x] Paredes e Fechamento
    [x] Forro
    [x] Conforto Interno
    */

    let {valorObraBranca, Dimensoes} = await CalcularValorBase(franquia,simData,cozinha,simData.cozinha.confort)
    console.log(`Valor retornado obra branca cozinha: ${valorObraBranca}`);
    let valorAcabamentos = 0
    let valorAmbiente = valorObraBranca + valorAcabamentos
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    console.log('valorAmbiente cozinha: ', valorAmbiente)

    return valorAmbiente
}

export const calculateAreaGourmet = async (areaGourmet, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);

    /*  
    Custos da areaGourmet (A mapear)
    [x] Servicos iniciais
    [x] Fundação
    [x] Estrutura
    [-] Lajes
    [-] Coberturas
    [-] Eletrica
    [x] Paredes e Fechamento
    [x] Forro
    [x] Conforto Interno
    */

    let {valorObraBranca, Dimensoes} = await CalcularValorBase(franquia,simData,areaGourmet,simData.areaGourmet.confort)
    console.log(`Valor retornado obra branca areaGourmet: ${valorObraBranca}`);
    let valorAcabamentos = 0
    let valorAmbiente = valorObraBranca + valorAcabamentos
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    console.log('valorAmbiente areaGourmet: ', valorAmbiente)

    return valorAmbiente
}

export const calculateAreaServico = async (areaServico, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);

    /*  
    Custos da areaServico (A mapear)
    [x] Servicos iniciais
    [x] Fundação
    [x] Estrutura
    [-] Lajes
    [-] Coberturas
    [-] Eletrica
    [x] Paredes e Fechamento
    [x] Forro
    [x] Conforto Interno
    */

    let {valorObraBranca, Dimensoes} = await CalcularValorBase(franquia,simData,areaServico,simData.areaServico.confort)
    console.log(`Valor retornado obra branca areaServico: ${valorObraBranca}`);
    let valorAcabamentos = 0
    let valorAmbiente = valorObraBranca + valorAcabamentos
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    console.log('valorAmbiente areaServico: ', valorAmbiente)

    return valorAmbiente
}

export const calculateDespensa = async (despensa, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);

    /*  
    Custos da despensa (A mapear)
    [x] Servicos iniciais
    [x] Fundação
    [x] Estrutura
    [-] Lajes
    [-] Coberturas
    [-] Eletrica
    [x] Paredes e Fechamento
    [x] Forro
    [x] Conforto Interno
    */

    let {valorObraBranca, Dimensoes} = await CalcularValorBase(franquia,simData,despensa,simData.despensa.confort)
    console.log(`Valor retornado obra branca despensa: ${valorObraBranca}`);
    let valorAcabamentos = 0
    let valorAmbiente = valorObraBranca + valorAcabamentos
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    console.log('valorAmbiente despensa: ', valorAmbiente)

    return valorAmbiente
}

export const calculateEscritorio = async (escritorio, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);

    /*  
    Custos da escritorio (A mapear)
    [x] Servicos iniciais
    [x] Fundação
    [x] Estrutura
    [-] Lajes
    [-] Coberturas
    [-] Eletrica
    [x] Paredes e Fechamento
    [x] Forro
    [x] Conforto Interno
    */

    let {valorObraBranca, Dimensoes} = await CalcularValorBase(franquia,simData,escritorio,simData.escritorio.confort)
    console.log(`Valor retornado obra branca escritorio: ${valorObraBranca}`);
    let valorAcabamentos = 0
    let valorAmbiente = valorObraBranca + valorAcabamentos
    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    console.log('valorAmbiente escritorio: ', valorAmbiente)

    return valorAmbiente
}

export const calculateQuartos = async (quartos, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);
    const baseObraBranca = await loadbaseObraBranca(franquia);

    let area = calculateQuartosArea(quartos)
    // console.log('area: ', area)
    // const numSuites

    // let area = [...quartos.value]
    // // console.log('area: ', area)
    // area = area.map((e, i) => {
    //     let thisRoomArea = 0
    //     // console.log(`quartos.value[${i}]: `, e)
    //     for (let prop in e) {
    //         thisRoomArea += e[prop]
    //     }
    //     return thisRoomArea
    // })

    let numSuites = [...quartos.value]

    numSuites = numSuites.map((e, i) => {
        if (parseFloat(e.suite) > 0) {
            return 1
        } else {
            return 0
        }
    })

    numSuites = numSuites.reduce((acc, curr) => acc + curr)

    console.log('numSuites: ', numSuites)

    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.quartos[quartos.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.quartos[quartos.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.quartos[quartos.pattern].forro * area
    const peitoril = baseAcabamentos.quartos[quartos.pattern].peitoril
    const porta = baseAcabamentos.quartos[quartos.pattern].porta
    const esquadria = baseAcabamentos.quartos[quartos.pattern].esquadria
    const suite = baseAcabamentos.quartos[quartos.pattern].suite * numSuites

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + suite
        
    if (quartos.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateLavabos = async (lavabos, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);
    const baseObraBranca = await loadbaseObraBranca(franquia);

    let area = calculateBathroomArea(lavabos)

    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.lavabos[lavabos.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.lavabos[lavabos.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.lavabos[lavabos.pattern].forro * area
    const peitoril = baseAcabamentos.lavabos[lavabos.pattern].peitoril
    const porta = baseAcabamentos.lavabos[lavabos.pattern].porta
    const esquadria = baseAcabamentos.lavabos[lavabos.pattern].esquadria
    const loucas = baseAcabamentos.lavabos[lavabos.pattern].loucas
    const marmore = baseAcabamentos.lavabos[lavabos.pattern].marmore

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (lavabos.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateBanheiros = async (banheiros, baseSqMtr, franquia) => {
    const baseAcabamentos = await loadBaseAcabamentos(franquia);
    const baseObraBranca = await loadbaseObraBranca(franquia);

    let area = calculateBathroomArea(banheiros)

    const areaPiso = area 
    const areaParede = area * 2.93

    const valorBase = baseSqMtr.value * area
    const paredesInternas = areaParede * baseObraBranca.fechamento_interno.paredes
    const piso = baseAcabamentos.banheiros[banheiros.pattern].piso * areaPiso
    const pinturaParedes = baseAcabamentos.banheiros[banheiros.pattern].pintura * areaParede
    const pinturaForro = baseAcabamentos.banheiros[banheiros.pattern].forro * area
    const peitoril = baseAcabamentos.banheiros[banheiros.pattern].peitoril
    const porta = baseAcabamentos.banheiros[banheiros.pattern].porta
    const esquadria = baseAcabamentos.banheiros[banheiros.pattern].esquadria
    const loucas = baseAcabamentos.banheiros[banheiros.pattern].loucas
    const marmore = baseAcabamentos.banheiros[banheiros.pattern].marmore

    let valorAmbiente = valorBase + paredesInternas + piso + pinturaParedes + pinturaForro + peitoril + porta + esquadria + loucas + marmore
        
    if (banheiros.confort === 'sim') {
        valorAmbiente += baseObraBranca.conforto_interno * areaParede
    }

    const margemLucro = 1.3
    valorAmbiente = valorAmbiente * margemLucro

    return valorAmbiente
}

export const calculateInstalacoesPercentagem = (instalacoes, houseValue) => {
    let housePercentage = 0
    for (let prop in instalacoes) {
        housePercentage += instalacoes[prop]
    }

    // let valorAmbiente = houseValue * (housePercentage / 100)

    // return valorAmbiente
    return housePercentage
}

export const calculateQuartosArea = (quartos) => {
    let area = [...quartos.value]
    // console.log('area: ', area)
    area = area.map((e, i) => {
        let thisRoomArea = 0
        // console.log(`quartos.value[${i}]: `, e)
        for (let prop in e) {
            thisRoomArea += Number(e[prop])
        }
        return thisRoomArea
    })
    area = area.reduce((acc, curr) => acc + curr)
    // console.log('area: ', area)
    return area
}

export const calculateBathroomArea = (bathroom) => {
    let area = [...bathroom.value]
    // console.log('area: ', area)
    area = area.reduce((acc, curr) => acc + curr)
    // console.log('area: ', area)
    return area
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