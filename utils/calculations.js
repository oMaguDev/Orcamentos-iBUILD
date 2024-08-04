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
  const areaTotalConstrucao = metragemTotalConstrucao();
  const tempoConstrucaoDias = calcularDias(areaTotalConstrucao)
  console.log(`Tempo Construcação em dias: ${tempoConstrucaoDias}`)
  console.log(`areaTotal: ${areaTotalConstrucao}`)

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

const metragemTotalConstrucao = () => {
  // Garagem - sala - quartos - banheiros - cozinha - lavabos - gourmet - areaServico - despensa - escritorio
  const areaQuartos = formData.quartos.reduce((total, quarto) => total + quarto.quartoSize + (quarto.quartoClosetSize || 0) + (quarto.quartoBanheiroSize || 0), 0);

  // Calcula a área total dos lavabos
  const areaLavabos = formData.lavabos.reduce((total, lavabo) => total + lavabo.areaLavabo, 0);

  // Calcula a área total dos banheiros
  const areaBanheiros = formData.banheiros.reduce((total, banheiro) => total + banheiro.banheiroSize, 0);

  const areaTotalConstrucao = 
    (formData.garagem.areaGaragem || 0) + 
    (formData.sala.hallEntradaSala || 0) + 
    (formData.sala.salaEstar || 0) + 
    (formData.sala.tvSala || 0) + 
    (formData.sala.corredoresSala || 0) + 
    (formData.cozinha.areaCozinha || 0) + 
    (formData.areaGourmet.areaGourmet || 0) + 
    (formData.areaServico.areaServico || 0) + 
    (formData.despensa.areaDespensa || 0) + 
    (formData.escritorio.areaEscritorio || 0) + 
    areaBanheiros + 
    areaLavabos + 
    areaQuartos;
  console.log(`formData.garagem.areaGaragem: ${formData.garagem.areaGaragem} + formData.sala.hallEntradaSala: ${formData.sala.hallEntradaSala} + formData.sala.salaEstar: ${formData.sala.salaEstar} + formData.sala.tvSala: ${formData.sala.tvSala} + formData.sala.corredoresSala: ${formData.sala.corredoresSala} + formData.cozinha.areaCozinha: ${formData.cozinha.areaCozinha} + formData.areaGourmet.areaGourmet: ${formData.areaGourmet.areaGourmet} + formData.areaServico.areaServico: ${formData.areaServico.areaServico} + formData.despensa.areaDespensa: ${formData.despensa.areaDespensa} + formData.escritorio.areaEscritorio: ${formData.escritorio.areaEscritorio} + areaBanheiros: ${areaBanheiros} + areaLavabos: ${areaLavabos} + areaQuartos: ${areaQuartos}`)
  return areaTotalConstrucao;
}

const calculateGaragemValue = () => {
  let value = formData.garagemSize * getAcabamentoMultiplier(formData.garagemAcabamento);
  const areaPiso = formData.garagem.areaGaragem * 1.1
  if (formData.garagemConforto) {
    value *= 1.1; // 10% extra for comfort
  }
  return value;
};

const calculateSalaValue = () => {
  let areaTotal = formData.sala.hallEntradaSala + formData.sala.salaEstar + formData.sala.tvSala + formData.sala.corredoresSala;

  console.log(`areaTotal sala ${areaTotal}`);
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
