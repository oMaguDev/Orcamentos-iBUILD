import { loadBaseAcabamentos } from "./base_acabamentos.js";
import { loadbaseObraBranca } from "./base_obra_branca";

let formData;
let franquia;
let baseAcabamentos;
let baseObraBranca;
let acoConsiderado;

export const calculateRoomValues = async (data, franchise) => {
  formData = data;
  franquia = franchise;
  const acoMap = {
    '35k': 0,
    '40k': 1,
    '45k': 2,
  };
  acoConsiderado = acoMap[data.estrutura.quantidadePavimentos];

  baseAcabamentos = await loadBaseAcabamentos(franquia);
  baseObraBranca = await loadbaseObraBranca(franquia);
  // console.log(`baseObraBranca 2 ${JSON.stringify(baseObraBranca)}`); // Convertendo o objeto em string para exibição
  const paredesExternas = calculateParedesExternasValue();
  const garagemValue = calculateGaragemValue();
  const salaValue = calculateSalaValue();
  const quartoValue = calculateQuartoValue();

  const totalValue = garagemValue + salaValue + quartoValue;

  return {
    paredesExternas
    // garagemValue,
    // salaValue,
    // quartoValue,
    // totalValue,
  };
};

const calcularDias = (areaTotalConstrucao) => {
  if (areaTotalConstrucao <= 100) {
    return 90;
  } else if (areaTotalConstrucao >= 101 && areaTotalConstrucao <= 150) {
    return 135;
  } else if (areaTotalConstrucao >= 151 && areaTotalConstrucao <= 200) {
    return 150;
  } else if (areaTotalConstrucao >= 201 && areaTotalConstrucao <= 250) {
    return 165;
  } else if (areaTotalConstrucao >= 251 && areaTotalConstrucao <= 300) {
    return 180;
  } else if (areaTotalConstrucao >= 301 && areaTotalConstrucao <= 350) {
    return 190;
  } else if (areaTotalConstrucao >= 351 && areaTotalConstrucao <= 400) {
    return 220;
  } else if (areaTotalConstrucao >= 401 && areaTotalConstrucao <= 450) {
    return 250;
  } else if (areaTotalConstrucao >= 451 && areaTotalConstrucao <= 500) {
    return 280;
  } else if (areaTotalConstrucao >= 501 && areaTotalConstrucao <= 550) {
    return 290;
  } else if (areaTotalConstrucao >= 551 && areaTotalConstrucao <= 600) {
    return 300;
  } else if (areaTotalConstrucao >= 601 && areaTotalConstrucao <= 650) {
    return 320;
  } else if (areaTotalConstrucao >= 651 && areaTotalConstrucao <= 700) {
    return 365;
  } else {
    return 0; // valor padrão se a área não se enquadrar em nenhum intervalo
  }
};

const calculateGaragemValue = () => {
  let value = formData.garagemSize * getAcabamentoMultiplier(formData.garagemAcabamento);
  if (formData.garagemConforto) {
    value *= 1.1; // 10% extra for comfort
  }
  return value;
};

const calculateSalaValue = () => {
  let areaTotal = formData.sala.hallEntradaSala + formData.sala.salaEstar + formData.sala.tvSala + formData.sala.corredoresSala;

  console.log(`areaTotal ${areaTotal}`);
  let value = areaTotal * getAcabamentoMultiplier(formData.salaAcabamento); // Ajuste para calcular o valor com base no acabamento
  if (formData.salaConforto) {
    value *= 1.1; // 10% extra for comfort
  }
  return value;
};

const calculateQuartoValue = () => {
  let value = formData.quartoSize * getAcabamentoMultiplier(formData.quartoAcabamento);
  if (formData.quartoConforto) {
    value *= 1.1; // 10% extra for comfort
  }
  return value;
};

const calculateParedesExternasValue = () => {
  let value = formData.paredesExternas.metragemParedesExternas * baseObraBranca.paredes.paredesExternas[formData.paredesExternas.padraoParedesExternas];
  console.log(`Metragem ${formData.paredesExternas.metragemParedesExternas} padrao ${formData.paredesExternas.padraoParedesExternas} valor ${baseObraBranca.paredes.paredesExternas[formData.paredesExternas.padraoParedesExternas]} total ${value}`);
  return value;
};

const getAcabamentoMultiplier = (acabamento) => {
  switch (acabamento) {
    case "premium":
      return 1.5;
    case "supreme":
      return 2.0;
    default:
      return 1.0;
  }
};
