import { supabase } from '../services/supabaseClient';

export async function buscarValoresSupabase(table, column, value) {
    // Verifica se o valor fornecido é um número válido
    // console.log("Buscando valores Supabase ",table,column,value)
    if (isNaN(value)) {
        console.log('Erro: O valor fornecido não é um número válido.');
        return null;
    }
    value = Number(value);

    const { data, error } = await supabase
        .from(table) // utiliza a tabela passada como parâmetro
        .select('*') // seleciona todas as colunas
        .eq(column, value); // aplica o filtro na coluna e valor especificados

    // console.log('data: ', data);
    // console.log('tipo dos dados: ', typeof data);

    if (error) {
        console.log('erro: ', error);
        return [];
    }

    return data;
}