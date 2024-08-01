import { loadBaseAcabamentos } from "./base_acabamentos.js"
import { loadbaseObraBranca } from "./base_obra_branca"

let formData;
let franquia;
let baseAcabamentos;
let baseObraBranca;
let acoConsiderado;

export const calculateRoomValues = (data, franchise) => {
  formData = data;
  franquia = franchise;

  if (formData.estrutura.quantidadePavimentos === "1") {
    acoConsiderado = formData.estrutura.grandesVaos ? 1 : 0;
  } else if (formData.estrutura.quantidadePavimentos > 1) {
    acoConsiderado = formData.estrutura.grandesVaos ? 2 : 1;
  }

  baseAcabamentos = loadBaseAcabamentos(franquia);
  baseObraBranca = loadbaseObraBranca(franquia);

  const garagemValue = calculateGaragemValue();
  const salaValue = calculateSalaValue();
  const quartoValue = calculateQuartoValue();

  const totalValue = garagemValue + salaValue + quartoValue;

  return {
    garagemValue,
    salaValue,
    quartoValue,
    totalValue,
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
}

const calculateGaragemValue = () => {
  let value = formData.garagemSize * getAcabamentoMultiplier(formData.garagemAcabamento);
  if (formData.garagemConforto) {
    value *= 1.1; // 10% extra for comfort
  }
  return value;
};

const calculateSalaValue = () => {
  let areaTotal = formData.sala.hallEntradaSala + formData.sala.salaEstar + formData.sala.tvSala + formData.sala.corredoresSala;
  
  console.log(`areaTotal ${areaTotal}`)
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
