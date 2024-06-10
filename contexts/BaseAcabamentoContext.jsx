import React, { createContext, useState, useEffect, useContext } from 'react';
import { buscarValoresSupabase } from '../services/buscarValoresSupabase';

const BaseAcabamentosContext = createContext();

export const BaseAcabamentosProvider = ({ children }) => {

  const storedFranquia = localStorage.getItem('franquia');
  const [baseAcabamentos, setBaseAcabamentos] = useState({});
  console.log('storedFranquia: ', storedFranquia)
  useEffect(() => {
    const loadData = async () => {
      const dados = await buscarValoresSupabase(storedFranquia);
      setBaseAcabamentos(dados);
    };

    loadData();
  }, []);

  return (
    <BaseAcabamentosContext.Provider value={{ baseAcabamentos }}>
      {children}
    </BaseAcabamentosContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useBaseAcabamentos = () => useContext(BaseAcabamentosContext);