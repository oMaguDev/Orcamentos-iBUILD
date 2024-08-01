import { loadBaseAcabamentos } from "./base_acabamentos.js"
import { loadbaseObraBranca } from "./base_obra_branca"

export const calculateRoomValues = (formData, franquia) => {
    const baseAcabamentos = loadBaseAcabamentos(franquia);
    const baseObraBranca = loadbaseObraBranca(franquia);
    const garagemValue = calculateGaragemValue(formData,baseObraBranca,baseAcabamentos);
    const salaValue = calculateSalaValue(formData,baseObraBranca,baseAcabamentos);
    const quartoValue = calculateQuartoValue(formData,baseObraBranca,baseAcabamentos);
  
    const totalValue = garagemValue + salaValue + quartoValue;
  
    return {
      garagemValue,
      salaValue,
      quartoValue,
      totalValue,
    };
  };
  
  const calculateGaragemValue = (formData,baseObraBranca,baseAcabamentos) => {
    let value = formData.garagemSize * getAcabamentoMultiplier(formData.garagemAcabamento);
    if (formData.garagemConforto) {
      value *= 1.1; // 10% extra for comfort
    }
    return value;
  };
  
  const calculateSalaValue = (formData,baseObraBranca,baseAcabamentos) => {
    let value = formData.salaSize * getAcabamentoMultiplier(formData.salaAcabamento);
    if (formData.salaConforto) {
      value *= 1.1; // 10% extra for comfort
    }
    return value;
  };
  
  const calculateQuartoValue = (formData,baseObraBranca,baseAcabamentos) => {
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
  