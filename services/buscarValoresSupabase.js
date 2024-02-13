import { supabase } from '../services/supabaseClient';

export async function fetchValores(franquia) {
    const { data, error } = await supabase
    .from('valores')
    .select('*') // seleciona todas as colunas
    .eq('id_franquia', franquia); // filtra para encontrar a linha com o id_user correspondente

    console.log('valores: ', data)
    console.log('tipo dos dados: ', typeof data)

    if (error) {
        console.log('erro: ', error)
        return null
    }

    return data

}