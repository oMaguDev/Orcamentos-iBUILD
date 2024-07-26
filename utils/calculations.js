export const calculateRoomValues = (formData) => {
    const garagemValue = calculateGaragemValue(formData);
    const salaValue = calculateSalaValue(formData);
    const quartoValue = calculateQuartoValue(formData);
  
    const totalValue = garagemValue + salaValue + quartoValue;
  
    return {
      garagemValue,
      salaValue,
      quartoValue,
      totalValue,
    };
  };
  
  const calculateGaragemValue = (formData) => {
    let value = formData.garagemSize * getAcabamentoMultiplier(formData.garagemAcabamento);
    if (formData.garagemConforto) {
      value *= 1.1; // 10% extra for comfort
    }
    return value;
  };
  
  const calculateSalaValue = (formData) => {
    let value = formData.salaSize * getAcabamentoMultiplier(formData.salaAcabamento);
    if (formData.salaConforto) {
      value *= 1.1; // 10% extra for comfort
    }
    return value;
  };
  
  const calculateQuartoValue = (formData) => {
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
  