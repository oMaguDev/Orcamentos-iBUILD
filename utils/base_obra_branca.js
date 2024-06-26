import { buscarValoresSupabase } from "../services/buscarValoresSupabase";


export async function loadbaseObraBranca(franquia) {
    const dadosObraBranca = await buscarValoresSupabase("obra_branca","Franquia_id", franquia);
    // console.log('dadosBaseObraBranca: ', dadosObraBranca)
    return {
        standard: {
            initial_services: Number(dadosObraBranca.find(item => item.workItemId_scienge === 353)?.total_price) || 9999, //6073.16,
            foundation: Number(dadosObraBranca.find(item => item.workItemId_scienge === 6826)?.total_price) || 9999, //14954.46,
            structure: Number(dadosObraBranca.find(item => item.workItemId_scienge === 370)?.total_price) || 9999, //76020.00,
            slab: Number(dadosObraBranca.find(item => item.workItemId_scienge === 6862)?.total_price) || 9999, //958.30,
            foundation_superficial: Number(dadosObraBranca.find(item => item.workItemId_scienge === 359)?.total_price) || 9999, //149.54,
            slab_wet: Number(dadosObraBranca.find(item => item.workItemId_scienge === 6863)?.total_price) || 9999, //191.66,
            finishing: Number(dadosObraBranca.find(item => item.workItemId_scienge === 391)?.total_price) || 9999, //109.41,
            walls: [
                Number(dadosObraBranca.find(item => item.workItemId_scienge === 80001)?.total_price) || 9999, //17505.60,
                Number(dadosObraBranca.find(item => item.workItemId_scienge === 398)?.total_price) || 9999, //5356.80,
                Number(dadosObraBranca.find(item => item.workItemId_scienge === 6873)?.total_price) || 9999, //6832.00,
            ],
            one_pavement_meter: Number(dadosObraBranca.find(item => item.workItemId_scienge === 417)?.total_price) || 9999, //1277.00,
        },
        premium: {
            initial_services: dadosObraBranca.find(item => item.workItemId_scienge === 353)?.total_price || 9999, //6073.16,
            foundation: dadosObraBranca.find(item => item.workItemId_scienge === 6826)?.total_price || 9999, //9999, //14954.46,
            structure: dadosObraBranca.find(item => item.workItemId_scienge === 370)?.total_price || 9999, //76020.00,
            slab: dadosObraBranca.find(item => item.workItemId_scienge === 6862)?.total_price || 9999, //958.30,
            foundation_superficial: dadosObraBranca.find(item => item.workItemId_scienge === 359)?.total_price || 9999, //149.54,
            slab_wet: dadosObraBranca.find(item => item.workItemId_scienge === 6863)?.total_price || 9999, //191.66,
            finishing: dadosObraBranca.find(item => item.workItemId_scienge === 391)?.total_price || 9999, //159.08,
            walls: [
                dadosObraBranca.find(item => item.workItemId_scienge === 80001)?.total_price || 9999, //25452.80,
                dadosObraBranca.find(item => item.workItemId_scienge === 398)?.total_price || 9999, //5356.80,
                dadosObraBranca.find(item => item.workItemId_scienge === 6873)?.total_price || 9999, //6832.00,
            ],
            one_pavement_meter: dadosObraBranca.find(item => item.workItemId_scienge === 417)?.total_price || 9999, //1356.48,
        },
        supreme: {
            initial_services: Number(dadosObraBranca.find(item => item.workItemId_scienge === 353)?.total_price) || 9999, //6073.16,
            foundation: Number(dadosObraBranca.find(item => item.workItemId_scienge === 6826)?.total_price) || 9999, //14954.46,
            structure: Number(dadosObraBranca.find(item => item.workItemId_scienge === 370)?.total_price) || 9999, //76020.00,
            slab: Number(dadosObraBranca.find(item => item.workItemId_scienge === 6862)?.total_price) || 9999, //958.30,
            foundation_superficial: Number(dadosObraBranca.find(item => item.workItemId_scienge === 359)?.total_price) || 9999, //149.54,
            slab_wet: Number(dadosObraBranca.find(item => item.workItemId_scienge === 6863)?.total_price) || 9999, //191.66,
            finishing: Number(dadosObraBranca.find(item => item.workItemId_scienge === 391)?.total_price) || 9999, //109.41,
            walls: [
                Number(dadosObraBranca.find(item => item.workItemId_scienge === 80001)?.total_price) || 9999, //17505.60,
                Number(dadosObraBranca.find(item => item.workItemId_scienge === 398)?.total_price) || 9999, //5356.80,
                Number(dadosObraBranca.find(item => item.workItemId_scienge === 6873)?.total_price) || 9999, //6832.00,
            ],
            one_pavement_meter: Number(dadosObraBranca.find(item => item.workItemId_scienge === 417)?.total_price) || 9999, //1388.96,
        },
        cobertura: {
            termoacustica: 121.55,
            fibrocimento: 50.78,
            ceramica: 40.71,
            calhas: 25.61,
        },
        fechamento_interno: {
            paredes: 34.23,
        },
        conforto_interno: 49.49,
}
}