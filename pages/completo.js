import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  estiloArquitetonicoOptions,
  escadaOptions,
  pavimentosOptions,
  telhasOptions,
  calhasOptions,
  padraoParedesExternasOptions,
  acabamentosParedesExternasOptions,
  levantamentoAreaGaragemOptions,
  fundacaoOptions,
  levantamentoAreaEscritórioOptions,
  pisosPorcelanatoOptions,
  pisosLaminadoOptions,
  peitorilSoleirasOptions,
  portasMadeiraOptions,
  pinturaInternaOptions,
  portasJanelasEsquadriasOptions,
  levantamentoAreaSalaOptions,
  levantamentoAreaQuartoOptions,
  levantamentoAreaCozinhaOptions,
  revestimentoParedesOptions,
  balcoesBancadasOptions,
  metaisCozinhaOptions,
  levantamentoAreaBanheiro

} from '/utils/listContainersForImages.js';
import {
  Section,
  Label,
  InputNumber,
  Select,
  SwitchContainer,
  SwitchLabel,
  SwitchInput,
  SwitchSlider,
  Column,
  Row,
  SectionWithHeader,
  SubSection,
  SubmitButton,
  ImageToggleContainer,
  ImageToggle,
  Image,
  ImageLabel,
  ImageInput,
  Tooltip
} from '../components/Inputs';
import { FormContainer, PageContainer } from '../components/Completo/FormContainer';

const initialState = {
  garagem: {
    areaGaragem: [],
    telheirosGaragem: "",
    calcadasGaragem: "",
    perimetroGaragem: "",
    peDireitoGaragem: "",
    marmoresGaragem: "",
    marmoresGaragemAcabamento: "",
    portasGaragem: "",
    soleirasGaragem: "",
    fundacaoGaragem: [],
    pisosPorcelanatoGaragem:[],
    pisosLaminadoGaragem: [],
    peitorilSoleirasGaragem: [],
    portasMadeiraGaragem: [],
    portasJanelasEsquadriasGaragem: [],
    pinturaInternaGaragem: [],
    garagemConforto: false,
  },
  sala: {
    hallEntradaSala: "",
    salaEstar: "",
    tvSala: "",
    corredoresSala: "",
    perimetroSala: "",
    peDireitoSala: "",
    perimetroPeDuploSala: "",
    peDireitoDuploSala: "",
    portasSala: "",
    esquadriasSala: "",
    salaAcabamento: "",
    areaSala: [],
    fundacaoSala: [],
    pisoPorcelanatoSala: [],
    pisoLaminadoSala: [],
    peitorilSoleirasSala: [],
    portasMadeiraSala: [],
    portasJanelasEsquadriasSala: [],
    pinturaInternaSala: [],
    salaConforto: false,
  },
  cozinha: {
    areaCozinha: [],
    fundacaoCozinha: [],
    pisoPorcelanatoCozinha: [],
    pisoLaminadoCozinha: [],
    peitorilSoleirasCozinha: [],
    revestimentoParedesCozinha: [],
    balcoesBancadasCozinha: [],
    pinturaInternaCozinha: [],
    metaisCozinha: [],
    perimetroCozinha: "",
    peDireitoCozinha: "",
    portasMadeiraCozinha: [],
    portasJanelasEsquadriasCozinha: [],
    vidrosAluminioCozinha: "",
    kitsCozinha: "",
    marmoresCozinha: "",
    acabamentoCozinha: "",
    confortoCozinha: false,
  },
  areaGourmet: {
    areaGourmet: "",
    perimetroGourmet: "",
    peDireitoGourmet: "",
    portasMadeiraGourmet: "",
    vidrosAluminioGourmet: "",
    kitsGourmet: "",
    marmoresGourmet: "",
    acabamentoGourmet: "",
    confortoGourmet: false,
  },
  areaServico: {
    areaServico: "",
    perimetroServico: "",
    peDireitoServico: "",
    portasMadeiraServico: "",
    vidrosAluminioServico: "",
    kitsServico: "",
    marmoresServico: "",
    acabamentoServico: "",
    confortoServico: false,
  },
  despensa: {
    areaDespensa: "",
    perimetroDespensa: "",
    peDireitoDespensa: "",
    portasMadeiraDespensa: "",
    vidrosAluminioDespensa: "",
    acabamentoDespensa: "",
    confortoDespensa: false,
  },
  escritorio: {
    areaEscritorio: [],
    fundacaoEscritorio: [],
    pisoPocelanatoEscritorio: [],
    pisoLaminadoEscritorio: [],
    peDireitoEscritorio: "",
    peitorilSoleirasEscritorio:[],
    portasMadeiraEscritorio: [],
    vidrosAluminioEscritorio: "",
    acabamentoEscritorio: "",
    pinturaInternaEscritorio: [],
    portasJanelasEsquadriasEscritorio: [],
    confortoEscritorio: false,
  },
  estrutura: {
    estiloArquitetonico: "",
    grandesVaos: false,
    estiloEscada: [],
    quantidadePavimentos: "",
    
  },
  paredesExternas: {
    padraoParedesExternas: "",
    padraoParedesExternasPintura: [],
  },
  cobertura: {
    areaCobertura: "",
    areaLajes: "",
    areaCalhas: [],
    tipoCobertura: [],
  },
  eletrica: {
    voltagemEletrica: "",
  },
  quartos: [],
  lavabos: [],
  banheiros: [],
  hidraulica: {
    tipoHidraulica: "",
  },
};

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState(() => {
    // Carrega o estado inicial do localStorage, se existir
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem('formData');
      return savedData ? JSON.parse(savedData) : initialState;
    }
    return initialState;
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
      setIsClient(true);
    }
  }, []);

  const handleChange = (e, section, field) => {
    const { type, checked, value } = e.target;
    let fieldValue = type === 'checkbox' ? checked : value;
  
    // Verifica se o campo é numérico e converte para número
    if (type === 'number') {
      fieldValue = parseFloat(fieldValue);
    }
  
    setFormData(prevFormData => {
      const newFormData = {
        ...prevFormData,
        [section]: {
          ...prevFormData[section],
          [field]: fieldValue,
        },
      };
      localStorage.setItem('formData', JSON.stringify(newFormData)); // Salva no localStorage
      return newFormData;
    });
  };

  const handleSubChange = (section, index, e, field) => {
    const { type, checked, value } = e.target;
    let fieldValue = type === 'checkbox' ? checked : value;
  
    // Verifica se o campo é numérico e converte para número
    if (type === 'number') {
      fieldValue = parseFloat(fieldValue);
    }
  
    setFormData(prevFormData => {
      const newArray = [...prevFormData[section]];
      newArray[index] = {
        ...newArray[index],
        [field]: fieldValue,
      };
      const newFormData = {
        ...prevFormData,
        [section]: newArray,
      };
      localStorage.setItem('formData', JSON.stringify(newFormData)); // Salva no localStorage
      return newFormData;
    });
  };

  const addSubItem = (section) => {
    setFormData(prevFormData => {
      const newArray = [...prevFormData[section], {}];
      const newFormData = {
        ...prevFormData,
        [section]: newArray,
      };
      localStorage.setItem('formData', JSON.stringify(newFormData)); // Salva no localStorage
      return newFormData;
    });
  };

  const handleImageToggle = (section, field, value, allowMultiple, padrao="") => {
    setFormData(prevFormData => {
      const sectionData = prevFormData[section] || {};
      const fieldData = sectionData[field] || (allowMultiple ? [] : '');
    
      let newFieldData;
      if (allowMultiple) {
        // Para múltiplas seleções
        if (Array.isArray(fieldData) && fieldData.some(item => item.value === value)) {
          newFieldData = fieldData.filter(item => item.value !== value);
        } else {
          newFieldData = [...fieldData, { value, input: padrao }];
        }
      } else {
        // Para seleção única
        newFieldData = { value, input: padrao };
      }
    
      const newFormData = {
        ...prevFormData,
        [section]: {
          ...sectionData,
          [field]: newFieldData,
        },
      };
      localStorage.setItem('formData', JSON.stringify(newFormData));
      return newFormData;
    });
  };
  
  const handleImageToggleSub = (section, index, field, value, allowMultiple, padrao = "") => {
    setFormData(prevFormData => {
      const sectionData = [...prevFormData[section]];
      const itemData = sectionData[index] || {};
      const fieldData = itemData[field] || (allowMultiple ? [] : '');
  
      let newFieldData;
      if (allowMultiple) {
        if (Array.isArray(fieldData) && fieldData.some(item => item.value === value)) {
          newFieldData = fieldData.filter(item => item.value !== value);
        } else {
          newFieldData = [...fieldData, { value, input: padrao }];
        }
      } else {
        newFieldData = { value, input: padrao };
      }
  
      sectionData[index] = {
        ...itemData,
        [field]: newFieldData,
      };
  
      const newFormData = {
        ...prevFormData,
        [section]: sectionData,
      };
  
      localStorage.setItem('formData', JSON.stringify(newFormData));
      return newFormData;
    });
  };
  
  
  const handleImageInputChange = (section, field, value, input) => {
    setFormData(prevFormData => {
      const sectionData = prevFormData[section] || {};
      const fieldData = sectionData[field] || (Array.isArray(sectionData[field]) ? [] : {});
  
      let newFieldData;
      if (Array.isArray(fieldData)) {
        newFieldData = fieldData.map(item =>
          item.value === value ? { ...item, [input.field]: input.value } : item
        );
      } else {
        newFieldData = { ...fieldData, [input.field]: input.value };
      }
  
      const newFormData = {
        ...prevFormData,
        [section]: {
          ...sectionData,
          [field]: newFieldData,
        },
      };
      localStorage.setItem('formData', JSON.stringify(newFormData));
      return newFormData;
    });
  };
 
  const handleImageInputChangeSub = (section, index, field, value, input) => {
    setFormData(prevFormData => {
      const sectionData = [...prevFormData[section]];
      const itemData = sectionData[index] || {};
      const fieldData = itemData[field] || (Array.isArray(itemData[field]) ? [] : {});
  
      let newFieldData;
      if (Array.isArray(fieldData)) {
        newFieldData = fieldData.map(item =>
          item.value === value ? { ...item, [input.field]: input.value } : item
        );
      } else {
        newFieldData = { ...fieldData, [input.field]: input.value };
      }
  
      sectionData[index] = {
        ...itemData,
        [field]: newFieldData,
      };
  
      const newFormData = {
        ...prevFormData,
        [section]: sectionData,
      };
  
      localStorage.setItem('formData', JSON.stringify(newFormData));
      return newFormData;
    });
  };
  

  const handleSubmit = e => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    localStorage.setItem('formData', jsonData); // Salva no localStorage
    router.push('/resumo');
  };
  return (
    isClient && (
      <PageContainer>
        <FormContainer onSubmit={handleSubmit}>
          <SectionWithHeader title="ESTILO ARQUITETÔNICO">
            <SubSection title="QUAL O ESTILO SUA CASA?" description="Tudo bem se não for exatamente igual, a ideia aqui é nos ajudar a entender qual o estilo do seu projeto">
            <ImageToggleContainer>
              {estiloArquitetonicoOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={formData.estrutura.estiloArquitetonico && formData.estrutura.estiloArquitetonico.value === option.value}
                  onClick={() => handleImageToggle('estrutura', 'estiloArquitetonico', option.value, false)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  <Image src={option.img} alt={option.label} />
                </ImageToggle>
              ))}
            </ImageToggleContainer>
            </SubSection>
          </SectionWithHeader>
          {/* Cobertura */}
          <SectionWithHeader title="Cobertura" description="Informações sobre a cobertura">
            <SubSection title="Tipos de Cobertura">
              <ImageToggleContainer>
              {telhasOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={Array.isArray(formData.cobertura.tipoCobertura) && formData.cobertura.tipoCobertura.some(item => item.value === option.value)}
                  onClick={() => handleImageToggle('cobertura', 'tipoCobertura', option.value, true)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  {option.img ? (
                    <div>
                    
                    <Image src={option.img} alt={option.label} />
                    <ImageInput
                      title="Quantidade Total na Obra - M²"
                      value={Array.isArray(formData.cobertura.tipoCobertura) ? (formData.cobertura.tipoCobertura.find(item => item.value === option.value)?.input || '') : ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChange('cobertura', 'tipoCobertura', option.value, { field: 'input', value: e.target.value })}
                      />
                    </div>
                  ) : (
                    <>
                      <ImageInput
                        title="Descrever o tipo de telha"
                        type="text"
                        value={Array.isArray(formData.cobertura.tipoCobertura) ? (formData.cobertura.tipoCobertura.find(item => item.value === option.value)?.tipoTelha || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('cobertura', 'tipoCobertura', option.value, { field: 'tipoTelha', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Valor por m² material e mão de obra"
                        type="number"
                        value={Array.isArray(formData.cobertura.tipoCobertura) ? (formData.cobertura.tipoCobertura.find(item => item.value === option.value)?.valor || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('cobertura', 'tipoCobertura', option.value, { field: 'valor', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Quantidade Total na Obra - M²"
                        type="number"
                        value={Array.isArray(formData.cobertura.tipoCobertura) ? (formData.cobertura.tipoCobertura.find(item => item.value === option.value)?.metragem || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('cobertura', 'tipoCobertura', option.value, { field: 'metragem', value: e.target.value });
                        }}
                      />
                    </>
                  )}
                </ImageToggle>
              ))}
              </ImageToggleContainer>

            </SubSection>
            <SubSection title="Calhas, Rufos e Pingadeiras">
              <ImageToggleContainer>
                {calhasOptions.map(option => (
                  <ImageToggle
                    key={option.value}
                    selected={Array.isArray(formData.cobertura.areaCalhas) && formData.cobertura.areaCalhas.some(item => item.value === option.value)}
                    onClick={() => handleImageToggle('cobertura', 'areaCalhas', option.value, true)}
                  >
                    <ImageLabel>{option.label}</ImageLabel>
                    <Image src={option.img} alt={option.label} />
                    <ImageInput
                      title= "Quantidade Total na Obra - ML"
                      value={Array.isArray(formData.cobertura.areaCalhas) ? (formData.cobertura.areaCalhas.find(item => item.value === option.value)?.input || '') : ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChange('cobertura', 'areaCalhas', option.value, { field: 'input', value: e.target.value })}
                    />
                  </ImageToggle>
                ))}
                </ImageToggleContainer>
            </SubSection>
          </SectionWithHeader>
          {/* Paredes Externas */}
          <SectionWithHeader title="Paredes Externas" description="Informações sobre as paredes externas">
            <SubSection title="Metragem de Paredes Externas">
            <ImageToggleContainer>
                  {padraoParedesExternasOptions.map(option => (
                    <ImageToggle
                    key={option.value}
                    selected={formData.paredesExternas.padraoParedesExternas && formData.paredesExternas.padraoParedesExternas.value === option.value}
                    onClick={() => handleImageToggle('paredesExternas', 'padraoParedesExternas', option.value, false)}
                  >
                    <ImageLabel>{option.label}</ImageLabel>
                    <Image src={option.img} alt={option.label} />
                    {formData.paredesExternas.padraoParedesExternas && formData.paredesExternas.padraoParedesExternas.value === option.value && (
                      <ImageInput
                        title="Quantidade Total na Obra - M² de Face"
                        value={formData.paredesExternas.padraoParedesExternas.input || ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleImageInputChange('paredesExternas', 'padraoParedesExternas', option.value, { field: 'input', value: e.target.value })}
                      />
                    )}
                  </ImageToggle>
                  ))}
            </ImageToggleContainer>
            </SubSection>

            <SubSection title="Acabamentos - Parede Externa (Textura)">
            <ImageToggleContainer>
                  {acabamentosParedesExternasOptions.map(option => (
                    <ImageToggle
                      key={option.value}
                      selected={Array.isArray(formData.paredesExternas.padraoParedesExternasPintura) && formData.paredesExternas.padraoParedesExternasPintura.some(item => item.value === option.value)}
                      onClick={() => handleImageToggle('paredesExternas', 'padraoParedesExternasPintura', option.value, true)}
                    >
                      <ImageLabel>{option.label}</ImageLabel>
                      <Image src={option.img} alt={option.label} />
                      <ImageInput
                        title="Quantidade Total na Obra - M² de Face"
                        value={Array.isArray(formData.paredesExternas.padraoParedesExternasPintura) ? (formData.paredesExternas.padraoParedesExternasPintura.find(item => item.value === option.value)?.input || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleImageInputChange('paredesExternas', 'padraoParedesExternasPintura', option.value, { field: 'input', value: e.target.value })}
                      />
                    </ImageToggle>
                  ))}
                </ImageToggleContainer>
            </SubSection>
          </SectionWithHeader>      
          <SectionWithHeader title="QUANTIDADE DE PAVIMENTOS E CÁLCULO DA ESTRUTURA DE STEEL FRAME">
            <SubSection title="QUANTOS PAVIMENTOS?">
            <ImageToggleContainer>
              {pavimentosOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={formData.estrutura.quantidadePavimentos && formData.estrutura.quantidadePavimentos.value === option.value}
                  onClick={() => handleImageToggle('estrutura', 'quantidadePavimentos', option.value)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  <Image src={option.img} alt={option.label} />
                  <Tooltip text="Se a obra possuir 1 Pavimento e não possui grandes vãos o aço considerado será 35kg/m²
                                  Se a obra possuir 1 Pavimento e possui grandes vãos o aço considerado será 40kg/m²
                                  Se a obra possuir 2 Pavimentos e não possui grandes vãos o aço considerado será 40kg/m²
                                  Se a obra possuir 2 Pavimentos e possui grandes vãos o aço considerado será 45kg/m²
                                  " />
                  {formData.estrutura.quantidadePavimentos && formData.estrutura.quantidadePavimentos.value === option.value && (
                    <ImageInput
                      title="Selecione o tipo de aço"
                      type="select"
                      value={formData.estrutura.quantidadePavimentos.input || ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChange('estrutura', 'quantidadePavimentos', option.value, { field: 'input', value: e.target.value })}
                      options={['35k', '40k', '45k']}
                    />
                  )}
                </ImageToggle>
              ))}
            </ImageToggleContainer>
            </SubSection>

            {parseInt(formData.estrutura.quantidadePavimentos.value) >= 2 && (
              <SubSection title="Estilo de Escada">
                <ImageToggleContainer>
                  {escadaOptions.map(option => (
                    <ImageToggle
                    key={option.value}
                    selected={Array.isArray(formData.estrutura.estiloEscada) && formData.estrutura.estiloEscada.some(item => item.value === option.value)}
                    onClick={() => handleImageToggle('estrutura', 'estiloEscada', option.value, true)}
                  >
                    <ImageLabel>{option.label}</ImageLabel>
                    <Image src={option.img} alt={option.label} />
                    {['vigaCentral', 'suspensa'].includes(option.value) && (
                      <div>
                        <ImageInput
                          title="Peso aproximado da escada - Kg"
                          value={Array.isArray(formData.estrutura.estiloEscada) ? (formData.estrutura.estiloEscada.find(item => item.value === option.value)?.peso || '') : ''}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => handleImageInputChange('estrutura', 'estiloEscada', option.value, { field: 'peso', value: e.target.value })}
                        />
                        <ImageInput
                          title="Qual o valor do Kg de aço com mão de obra?"
                          value={Array.isArray(formData.estrutura.estiloEscada) ? (formData.estrutura.estiloEscada.find(item => item.value === option.value)?.valorAco || '') : ''}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => handleImageInputChange('estrutura', 'estiloEscada', option.value, { field: 'valorAco', value: e.target.value })}
                        />
                      </div>
                    )}
                  </ImageToggle>
                  ))}
                </ImageToggleContainer>
              </SubSection>
            )}
          </SectionWithHeader>
          {/* Garagem */}
          <SectionWithHeader title="Garagem" description="Informações sobre a garagem">
        <SubSection title="Dimensões">
        <ImageToggleContainer>
          {levantamentoAreaGaragemOptions.map(option => (
            <ImageToggle
              key={option.value}
              selected={Array.isArray(formData.garagem.areaGaragem) && formData.garagem.areaGaragem.some(item => item.value === option.value)}
              onClick={() => handleImageToggle('garagem', 'areaGaragem', option.value, true)}
            >
              <ImageLabel>{option.label}</ImageLabel>
              <Image src={option.img} alt={option.label} />
              {formData.garagem.areaGaragem && Array.isArray(formData.garagem.areaGaragem) && formData.garagem.areaGaragem.some(item => item.value === option.value) && (
                <div>
                  <ImageInput
                    title="Área - M²"
                    value={formData.garagem.areaGaragem.find(item => item.value === option.value)?.area || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('garagem', 'areaGaragem', option.value, { field: 'area', value: e.target.value })}
                  />
                  <ImageInput
                    title="Perímetro de todas as paredes - ML"
                    value={formData.garagem.areaGaragem.find(item => item.value === option.value)?.perimetro || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('garagem', 'areaGaragem', option.value, { field: 'perimetro', value: e.target.value })}
                  />
                  <ImageInput
                    title="Pé Direito"
                    value={formData.garagem.areaGaragem.find(item => item.value === option.value)?.peDireito || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('garagem', 'areaGaragem', option.value, { field: 'peDireito', value: e.target.value })}
                  />
                  <ImageInput
                    title="Área total de forros - M²"
                    value={formData.garagem.areaGaragem.find(item => item.value === option.value)?.areaForros || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('garagem', 'areaGaragem', option.value, { field: 'areaForros', value: e.target.value })}
                  />
                </div>
              )}
            </ImageToggle>
          ))}
        </ImageToggleContainer>

          
        </SubSection>
        
        <SubSection title="Fundação">
          <ImageToggleContainer>
            {fundacaoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.paredesExternas.padraoParedesExternasPintura) && formData.paredesExternas.padraoParedesExternasPintura.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('paredesExternas', 'padraoParedesExternasPintura', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.paredesExternas.padraoParedesExternasPintura) ? (formData.paredesExternas.padraoParedesExternasPintura.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('paredesExternas', 'padraoParedesExternasPintura', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>


          <Row>
            <Column>
              <Label htmlFor="marmoresGaragem">Área de Mármores e Granitos em m²</Label>
              <InputNumber
                type="number"
                id="marmoresGaragem"
                name="marmoresGaragem"
                value={formData.garagem.marmoresGaragem || ''}
                onChange={(e) => handleChange(e, 'garagem', 'marmoresGaragem')}
                />
            </Column>
            <Column>
              <Label htmlFor="marmoresGaragemAcabamento">Tipo de Acabamento</Label>
                <Select
                  id="marmoresGaragemAcabamento"
                  name="marmoresGaragemAcabamento"
                  value={formData.garagem.marmoresGaragemAcabamento || ''}
                  onChange={(e) => handleChange(e, 'garagem', 'marmoresGaragemAcabamento')}
                  >
                  <option value="">Selecione uma opção</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="supreme">Supreme</option>
                </Select>
            </Column>
          </Row>
          <Row>
            <Column>
              <Label htmlFor="portasGaragem">Quantidade de portas</Label>
              <InputNumber
                type="number"
                id="portasGaragem"
                name="portasGaragem"
                value={formData.garagem.portasGaragem || ''}
                onChange={(e) => handleChange(e, 'garagem', 'portasGaragem')}
                />
            </Column>
            <Column>
              <Label htmlFor="soleirasGaragem">Acabamento das Soleiras e Beirais</Label>
                <Select
                  id="soleirasGaragem"
                  name="soleirasGaragem"
                  value={formData.garagem.soleirasGaragem || ''}
                  onChange={(e) => handleChange(e, 'garagem', 'soleirasGaragem')}
                  >
                  <option value="">Selecione uma opção</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="supreme">Supreme</option>
                </Select>
            </Column>
          </Row>
          <Row>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Conforto Termoacústico
                  <SwitchInput
                    type="checkbox"
                    name="garagemConforto"
                    checked={formData.garagem.garagemConforto || false}
                    onChange={(e) => handleChange(e, 'garagem', 'garagemConforto')}
                  />
                  <SwitchSlider checked={formData.garagem.garagemConforto || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>
          </SectionWithHeader>
          {/* Sala */}
          <SectionWithHeader title="Sala" description="Informações sobre a sala">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="hallEntradaSala">Hall de Entrada</Label>
              <InputNumber
                type="number"
                id="hallEntradaSala"
                name="hallEntradaSala"
                value={formData.sala.hallEntradaSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'hallEntradaSala')}
              />
            </Column>
            <Column>
              <Label htmlFor="salaEstar">Sala de Estar/Jantar</Label>
              <InputNumber
                type="number"
                id="salaEstar"
                name="salaEstar"
                value={formData.sala.salaEstar || ''}
                onChange={(e) => handleChange(e, 'sala', 'salaEstar')}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label htmlFor="tvSala">Sala de Tv</Label>
              <InputNumber
                type="number"
                id="tvSala"
                name="tvSala"
                value={formData.sala.tvSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'tvSala')}
              />
            </Column>
            <Column>
              <Label htmlFor="corredoresSala">Corredores</Label>
              <InputNumber
                type="number"
                id="corredoresSala"
                name="corredoresSala"
                value={formData.sala.corredoresSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'corredoresSala')}
              />
            </Column>
          </Row>
              <text>
              Levantamento Área de Paredes 
              </text>
          <Row>
            <Column>
              <Label htmlFor="perimetroSala">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroSala"
                name="perimetroSala"
                value={formData.sala.perimetroSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'perimetroSala')}
              />
            </Column>
            <Column>
              <Label htmlFor="peDireitoSala">Pé Direito</Label>
              <InputNumber
                type="number"
                id="peDireitoSala"
                name="peDireitoSala"
                value={formData.sala.peDireitoSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'peDireitoSala')}
              />
            </Column>
          </Row>
            <text>
            Levantamento Área de Paredes Pé Direto Duplo
            </text>
          <Row>
            <Column>
              <Label htmlFor="perimetroPeDuploSala">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroPeDuploSala"
                name="perimetroPeDuploSala"
                value={formData.sala.perimetroPeDuploSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'perimetroPeDuploSala')}
              />
            </Column>
            <Column>
              <Label htmlFor="peDireitoDuploSala">Pé Direito Duplo</Label>
              <InputNumber
                type="number"
                id="peDireitoDuploSala"
                name="peDireitoDuploSala"
                value={formData.sala.peDireitoDuploSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'peDireitoDuploSala')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Esquadrias de Madeira, Vidros e Alúmínio">
        <Row>
            <Column>
              <Label htmlFor="portasSala">Quantidade de portas</Label>
              <InputNumber
                type="number"
                id="portasSala"
                name="portasSala"
                value={formData.sala.portasSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'portasSala')}
                />
            </Column>
            <Column>
              <Label htmlFor="esquadriasSala">M² de Vidros/Esquadria de Alumínio</Label>
              <InputNumber
                type="number"
                id="esquadriasSala"
                name="esquadriasSala"
                value={formData.sala.esquadriasSala || ''}
                onChange={(e) => handleChange(e, 'sala', 'esquadriasSala')}
                />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Acabamentos">
          <Row>
          <Column>
              <Label htmlFor="salaAcabamento">Tipo de Acabamento</Label>
              <Select
                id="salaAcabamento"
                name="salaAcabamento"
                value={formData.sala.salaAcabamento || ''}
                onChange={(e) => handleChange(e, 'sala', 'salaAcabamento')}
              >
                <option value="">Selecione uma opção</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
                <option value="sem_acabamento">Sem Acabamento (?)</option>
              </Select>
            </Column>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Conforto Termoacústico
                  <SwitchInput
                    type="checkbox"
                    name="salaConforto"
                    checked={formData.sala.salaConforto || false}
                    onChange={(e) => handleChange(e, 'sala', 'salaConforto')}
                  />
                  <SwitchSlider checked={formData.sala.salaConforto || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>
          </SectionWithHeader>
          <SectionWithHeader title="Cozinha" description="Informações sobre a cozinha">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaCozinha">Área da Cozinha (m²)</Label>
              <InputNumber
                type="number"
                id="areaCozinha"
                name="areaCozinha"
                value={formData.cozinha.areaCozinha || ''}
                onChange={(e) => handleChange(e, 'cozinha', 'areaCozinha')}
              />
            </Column>
          </Row>
          <Row>
          <Column>
              <Label htmlFor="perimetroCozinha">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroCozinha"
                name="perimetroCozinha"
                value={formData.cozinha.perimetroCozinha || ''}
                onChange={(e) => handleChange(e, 'cozinha', 'perimetroCozinha')}
              />
            </Column>
            <Column>
              <Label htmlFor="peDireitoCozinha">Pé Direito</Label>
              <InputNumber
                type="number"
                id="peDireitoCozinha"
                name="peDireitoCozinha"
                value={formData.cozinha.peDireitoCozinha || ''}
                onChange={(e) => handleChange(e, 'cozinha', 'peDireitoCozinha')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Esquadrias de Madeira, Vidro e Alumínio">
          <Row>
            <Column>
              <Label htmlFor="portasMadeiraCozinha">Quantidade de Portas de Madeiras</Label>
              <InputNumber
                type="number"
                id="portasMadeiraCozinha"
                name="portasMadeiraCozinha"
                value={formData.cozinha.portasMadeiraCozinha || ''}
                onChange={(e) => handleChange(e, 'cozinha', 'portasMadeiraCozinha')}
              />
            </Column>
            <Column>
              <Label htmlFor="vidrosAluminioCozinha">M² de Vidros/Esquadria de Alumínio</Label>
              <InputNumber
                type="number"
                id="vidrosAluminioCozinha"
                name="vidrosAluminioCozinha"
                value={formData.cozinha.vidrosAluminioCozinha || ''}
                onChange={(e) => handleChange(e, 'cozinha', 'vidrosAluminioCozinha')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Kit Cozinha">
          <Row>
            <Column>
              <Label htmlFor="kitsCozinha">Quantos Kits Cozinha possui no projeto?</Label>
              <InputNumber
                type="number"
                id="kitsCozinha"
                name="kitsCozinha"
                value={formData.cozinha.kitsCozinha || ''}
                onChange={(e) => handleChange(e, 'cozinha', 'kitsCozinha')}
              />
            </Column>
            <Column>
              <p>Se a cozinha possuir uma ilha além da pia padrão ou a área gourmet for no mesmo ambiente considerar 2 Kits Cozinha ou mais caso seja o caso
              </p>
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Mármores e Granitos">
          <Row>
            <Column>
              <Label htmlFor="marmoresCozinha">Quantidade total de balcões e bancadas (mármores e granitos)</Label>
              <InputNumber
                type="number"
                id="marmoresCozinha"
                name="marmoresCozinha"
                value={formData.cozinha.marmoresCozinha || ''}
                onChange={(e) => handleChange(e, 'cozinha', 'marmoresCozinha')}
              />
            </Column>
            <Column>
            <p>
              Somar todas as áreas de balcoes e bancadas, inclusive ilhas e etc.
            </p>
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Acabamentos">
          <Row>
            <Column>
              <Label htmlFor="acabamentoCozinha">Tipo de Acabamento</Label>
              <Select
                id="acabamentoCozinha"
                name="acabamentoCozinha"
                value={formData.cozinha.acabamentoCozinha || ''}
                onChange={(e) => handleChange(e, 'cozinha', 'acabamentoCozinha')}
              >
                <option value="">Selecione uma opção</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
                <option value="sem_acabamento">Sem acabamento</option>
              </Select>
            </Column>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Conforto Termoacústico
                  <SwitchInput
                    type="checkbox"
                    name="confortoCozinha"
                    checked={formData.cozinha.confortoCozinha || false}
                    onChange={(e) => handleChange(e, 'cozinha', 'confortoCozinha')}
                  />
                  <SwitchSlider checked={formData.cozinha.confortoCozinha || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>
          </SectionWithHeader>
          {formData.lavabos.map((lavabo, index) => (
        <SectionWithHeader key={index} title={`Lavabo ${index + 1}`} description={`Informações sobre o lavabo ${index + 1}`}>
          <SubSection title="Dimensões">
            <Row>
              <Column>
                <Label htmlFor={`areaLavabo${index}`}>Área do Lavabo (m²)</Label>
                <InputNumber
                  type="number"
                  id={`areaLavabo${index}`}
                  name={`areaLavabo${index}`}
                  value={lavabo.areaLavabo || ''}
                  onChange={(e) => handleSubChange('lavabos', index, e, 'areaLavabo')}
                />
              </Column>
            </Row>
            <Row>
            <Column>
                <Label htmlFor={`perimetroLavabo${index}`}>Perímetro</Label>
                <InputNumber
                  type="number"
                  id={`perimetroLavabo${index}`}
                  name={`perimetroLavabo${index}`}
                  value={lavabo.perimetro || ''}
                  onChange={(e) => handleSubChange('lavabos', index, e, 'perimetro')}
                />
              </Column>
              <Column>
                <Label htmlFor={`peDireitoLavabo${index}`}>Pé Direito</Label>
                <InputNumber
                  type="number"
                  id={`peDireitoLavabo${index}`}
                  name={`peDireitoLavabo${index}`}
                  value={lavabo.peDireito || ''}
                  onChange={(e) => handleSubChange('lavabos', index, e, 'peDireito')}
                />
              </Column>
            </Row>
          </SubSection>

          <SubSection title="Esquadrias de Madeira, Vidros e Alumínio">
            <Row>
              <Column>
              <Label htmlFor={`portasLavabo${index}`}>Quantidade de Portas de Madeira</Label>
                <InputNumber
                  type="number"
                  id={`portasLavabo${index}`}
                  name={`portasLavabo${index}`}
                  value={lavabo.portasLavabo || ''}
                  onChange={(e) => handleSubChange('lavabos', index, e, 'portasLavabo')}
                />
              </Column>
              <Column>
              <Label htmlFor={`esquadriasLavabo${index}`}>M² de Vidros/Esquadrias de Alumínio</Label>
                <InputNumber
                  type="number"
                  id={`esquadriasLavabo${index}`}
                  name={`esquadriasLavabo${index}`}
                  value={lavabo.esquadriasLavabo || ''}
                  onChange={(e) => handleSubChange('lavabos', index, e, 'esquadriasLavabo')}
                />
              </Column>
            </Row>
          </SubSection>
          <SubSection>
            <Row>
              <Column>
              <Label htmlFor={`kitLavabo${index}`}>Quantos Kits Lavabo possui no projeto? (não seria a quantidade de lavabos?)</Label>
                <InputNumber
                  type="number"
                  id={`kitLavabo${index}`}
                  name={`kitLavabo${index}`}
                  value={lavabo.kitLavabo || ''}
                  onChange={(e) => handleSubChange('lavabos', index, e, 'kitLavabo')}
                />
              </Column>
            </Row>
          </SubSection>
          <SubSection title="Mármores e Granitos">
            <Row>
              <Column>
                <Label htmlFor={`marmoresLavabo${index}`}>Quantidade de Balcões e Bancadas</Label>
                <InputNumber
                  type="number"
                  id={`marmoresLavabo${index}`}
                  name={`marmoresLavabo${index}`}
                  value={lavabo.marmores || ''}
                  onChange={(e) => handleSubChange('lavabos', index, e, 'marmores')}
                />
              </Column>
            </Row>
          </SubSection>

          <SubSection title="Acabamentos">
            <Row>
              <Column>
                <Label htmlFor={`acabamentoLavabo${index}`}>Tipo de Acabamento</Label>
                <Select
                  id={`acabamentoLavabo${index}`}
                  name={`acabamentoLavabo${index}`}
                  value={lavabo.acabamento || ''}
                  onChange={(e) => handleSubChange('lavabos', index, e, 'acabamento')}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="supreme">Supreme</option>
                  <option value="sem_acabamento">Sem acabamento</option>
                </Select>
              </Column>
              <Column>
                <SwitchContainer>
                  <SwitchLabel>
                    Conforto Termoacústico
                    <SwitchInput
                      type="checkbox"
                      name={`confortoLavabo${index}`}
                      checked={lavabo.conforto || false}
                      onChange={(e) => handleSubChange('lavabos', index, e, 'conforto')}
                    />
                    <SwitchSlider checked={lavabo.conforto || false} />
                  </SwitchLabel>
                </SwitchContainer>
              </Column>
            </Row>
          </SubSection>
        </SectionWithHeader>
          ))}
          <button type="button" onClick={() => addSubItem('lavabos')}>Adicionar Lavabo</button>     
          <SectionWithHeader title="Área Gourmet" description="Informações sobre a área gourmet">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaGourmet">Área Gourmet (m²)</Label>
              <InputNumber
                type="number"
                id="areaGourmet"
                name="areaGourmet"
                value={formData.areaGourmet.areaGourmet || ''}
                onChange={(e) => handleChange(e, 'areaGourmet', 'areaGourmet')}
              />
            </Column>
          </Row>
          <Row>
          <Column>
              <Label htmlFor="perimetroGourmet">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroGourmet"
                name="perimetroGourmet"
                value={formData.areaGourmet.perimetroGourmet || ''}
                onChange={(e) => handleChange(e, 'areaGourmet', 'perimetroGourmet')}
              />
            </Column>
            <Column>
              <Label htmlFor="peDireitoGourmet">Pé Direito</Label>
              <InputNumber
                type="number"
                id="peDireitoGourmet"
                name="peDireitoGourmet"
                value={formData.areaGourmet.peDireitoGourmet || ''}
                onChange={(e) => handleChange(e, 'areaGourmet', 'peDireitoGourmet')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Esquadrias de Madeira, Vidro e Alumínio">
          <Row>
            <Column>
              <Label htmlFor="portasMadeiraGourmet">Quantidade de Portas de Madeiras</Label>
              <InputNumber
                type="number"
                id="portasMadeiraGourmet"
                name="portasMadeiraGourmet"
                value={formData.areaGourmet.portasMadeiraGourmet || ''}
                onChange={(e) => handleChange(e, 'areaGourmet', 'portasMadeiraGourmet')}
              />
            </Column>
            <Column>
              <Label htmlFor="vidrosAluminioGourmet">M² de Vidros/Esquadria de Alumínio</Label>
              <InputNumber
                type="number"
                id="vidrosAluminioGourmet"
                name="vidrosAluminioGourmet"
                value={formData.areaGourmet.vidrosAluminioGourmet || ''}
                onChange={(e) => handleChange(e, 'areaGourmet', 'vidrosAluminioGourmet')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Kit Área Gourmet">
          <Row>
            <Column>
              <Label htmlFor="kitsGourmet">Quantos Kits Área Gourmet possui no projeto?</Label>
              <InputNumber
                type="number"
                id="kitsGourmet"
                name="kitsGourmet"
                value={formData.areaGourmet.kitsGourmet || ''}
                onChange={(e) => handleChange(e, 'areaGourmet', 'kitsGourmet')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Mármores e Granitos">
          <Row>
            <Column>
              <Label htmlFor="marmoresGourmet">Quantidade total de balcões e bancadas (mármores e granitos)</Label>
              <InputNumber
                type="number"
                id="marmoresGourmet"
                name="marmoresGourmet"
                value={formData.areaGourmet.marmoresGourmet || ''}
                onChange={(e) => handleChange(e, 'areaGourmet', 'marmoresGourmet')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Acabamentos">
          <Row>
            <Column>
              <Label htmlFor="acabamentoGourmet">Tipo de Acabamento</Label>
              <Select
                id="acabamentoGourmet"
                name="acabamentoGourmet"
                value={formData.areaGourmet.acabamentoGourmet || ''}
                onChange={(e) => handleChange(e, 'areaGourmet', 'acabamentoGourmet')}
              >
                <option value="">Selecione uma opção</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
                <option value="sem_acabamento">Sem acabamento</option>
              </Select>
            </Column>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Conforto Termoacústico
                  <SwitchInput
                    type="checkbox"
                    name="confortoGourmet"
                    checked={formData.areaGourmet.confortoGourmet || false}
                    onChange={(e) => handleChange(e, 'areaGourmet', 'confortoGourmet')}
                  />
                  <SwitchSlider checked={formData.areaGourmet.confortoGourmet || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>
          </SectionWithHeader>     
          <SectionWithHeader title="Área de Serviço" description="Informações sobre a área de serviço">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaServico">Área de Serviço (m²)</Label>
              <InputNumber
                type="number"
                id="areaServico"
                name="areaServico"
                value={formData.areaServico.areaServico || ''}
                onChange={(e) => handleChange(e, 'areaServico', 'areaServico')}
              />
            </Column>
          </Row>
          <Row>
          <Column>
              <Label htmlFor="perimetroServico">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroServico"
                name="perimetroServico"
                value={formData.areaServico.perimetroServico || ''}
                onChange={(e) => handleChange(e, 'areaServico', 'perimetroServico')}
              />
            </Column>
            <Column>
              <Label htmlFor="peDireitoServico">Pé Direito</Label>
              <InputNumber
                type="number"
                id="peDireitoServico"
                name="peDireitoServico"
                value={formData.areaServico.peDireitoServico || ''}
                onChange={(e) => handleChange(e, 'areaServico', 'peDireitoServico')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Esquadrias de Madeira, Vidro e Alumínio">
          <Row>
            <Column>
              <Label htmlFor="portasMadeiraServico">Quantidade de Portas de Madeiras</Label>
              <InputNumber
                type="number"
                id="portasMadeiraServico"
                name="portasMadeiraServico"
                value={formData.areaServico.portasMadeiraServico || ''}
                onChange={(e) => handleChange(e, 'areaServico', 'portasMadeiraServico')}
              />
            </Column>
            <Column>
              <Label htmlFor="vidrosAluminioServico">M² de Vidros/Esquadria de Alumínio</Label>
              <InputNumber
                type="number"
                id="vidrosAluminioServico"
                name="vidrosAluminioServico"
                value={formData.areaServico.vidrosAluminioServico || ''}
                onChange={(e) => handleChange(e, 'areaServico', 'vidrosAluminioServico')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Kit Lavanderia">
          <Row>
            <Column>
              <Label htmlFor="kitsServico">Quantos Kits Lavanderia possui no projeto?</Label>
              <InputNumber
                type="number"
                id="kitsServico"
                name="kitsServico"
                value={formData.areaServico.kitsServico || ''}
                onChange={(e) => handleChange(e, 'areaServico', 'kitsServico')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Mármores e Granitos">
          <Row>
            <Column>
              <Label htmlFor="marmoresServico">Quantidade total de balcões e bancadas (mármores e granitos)</Label>
              <InputNumber
                type="number"
                id="marmoresServico"
                name="marmoresServico"
                value={formData.areaServico.marmoresServico || ''}
                onChange={(e) => handleChange(e, 'areaServico', 'marmoresServico')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Acabamentos">
          <Row>
            <Column>
              <Label htmlFor="acabamentoServico">Tipo de Acabamento</Label>
              <Select
                id="acabamentoServico"
                name="acabamentoServico"
                value={formData.areaServico.acabamentoServico || ''}
                onChange={(e) => handleChange(e, 'areaServico', 'acabamentoServico')}
              >
                <option value="">Selecione uma opção</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
                <option value="sem_acabamento">Sem acabamento</option>
              </Select>
            </Column>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Conforto Termoacústico
                  <SwitchInput
                    type="checkbox"
                    name="confortoServico"
                    checked={formData.areaServico.confortoServico || false}
                    onChange={(e) => handleChange(e, 'areaServico', 'confortoServico')}
                  />
                  <SwitchSlider checked={formData.areaServico.confortoServico || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>
          </SectionWithHeader>     
          <SectionWithHeader title="Despensa" description="Informações sobre a despensa">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaDespensa">Área da Despensa (m²)</Label>
              <InputNumber
                type="number"
                id="areaDespensa"
                name="areaDespensa"
                value={formData.despensa.areaDespensa || ''}
                onChange={(e) => handleChange(e, 'despensa', 'areaDespensa')}
              />
            </Column>
          </Row>
          <Row>
          <Column>
              <Label htmlFor="perimetroDespensa">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroDespensa"
                name="perimetroDespensa"
                value={formData.despensa.perimetroDespensa || ''}
                onChange={(e) => handleChange(e, 'despensa', 'perimetroDespensa')}
              />
            </Column>
            <Column>
              <Label htmlFor="peDireitoDespensa">Pé Direito</Label>
              <InputNumber
                type="number"
                id="peDireitoDespensa"
                name="peDireitoDespensa"
                value={formData.despensa.peDireitoDespensa || ''}
                onChange={(e) => handleChange(e, 'despensa', 'peDireitoDespensa')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Esquadrias de Madeira, Vidro e Alumínio">
          <Row>
            <Column>
              <Label htmlFor="portasMadeiraDespensa">Quantidade de Portas de Madeiras</Label>
              <InputNumber
                type="number"
                id="portasMadeiraDespensa"
                name="portasMadeiraDespensa"
                value={formData.despensa.portasMadeiraDespensa || ''}
                onChange={(e) => handleChange(e, 'despensa', 'portasMadeiraDespensa')}
              />
            </Column>
            <Column>
              <Label htmlFor="vidrosAluminioDespensa">M² de Vidros/Esquadria de Alumínio</Label>
              <InputNumber
                type="number"
                id="vidrosAluminioDespensa"
                name="vidrosAluminioDespensa"
                value={formData.despensa.vidrosAluminioDespensa || ''}
                onChange={(e) => handleChange(e, 'despensa', 'vidrosAluminioDespensa')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Acabamentos">
          <Row>
            <Column>
              <Label htmlFor="acabamentoDespensa">Tipo de Acabamento</Label>
              <Select
                id="acabamentoDespensa"
                name="acabamentoDespensa"
                value={formData.despensa.acabamentoDespensa || ''}
                onChange={(e) => handleChange(e, 'despensa', 'acabamentoDespensa')}
              >
                <option value="">Selecione uma opção</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
                <option value="sem_acabamento">Sem acabamento</option>
              </Select>
            </Column>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Conforto Termoacústico
                  <SwitchInput
                    type="checkbox"
                    name="confortoDespensa"
                    checked={formData.despensa.confortoDespensa || false}
                    onChange={(e) => handleChange(e, 'despensa', 'confortoDespensa')}
                  />
                  <SwitchSlider checked={formData.despensa.confortoDespensa || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>
          </SectionWithHeader>   
          <SectionWithHeader title="GARAGEM E TELHEIROS">
        <SubSection title="Levantamento de Áreas" description="Somatória total de m² de parede externa, inclusive volumes de caixa d'água, decorativos, beirais e etc.">
          
        <ImageToggleContainer>
          {levantamentoAreaGaragemOptions.map(option => (
            <ImageToggle
              key={option.value}
              selected={Array.isArray(formData.garagem.areaGaragem) && formData.garagem.areaGaragem.some(item => item.value === option.value)}
              onClick={() => handleImageToggle('garagem', 'areaGaragem', option.value, true)}
            >
              <ImageLabel>{option.label}</ImageLabel>
              <Image src={option.img} alt={option.label} />
              {formData.garagem.areaGaragem && Array.isArray(formData.garagem.areaGaragem) && formData.garagem.areaGaragem.some(item => item.value === option.value) && (
                <div>
                  <ImageInput
                    title="Área - M²"
                    value={formData.garagem.areaGaragem.find(item => item.value === option.value)?.area || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('garagem', 'areaGaragem', option.value, { field: 'area', value: e.target.value })}
                  />
                  <ImageInput
                    title="Perímetro de todas as paredes - ML"
                    value={formData.garagem.areaGaragem.find(item => item.value === option.value)?.perimetro || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('garagem', 'areaGaragem', option.value, { field: 'perimetro', value: e.target.value })}
                  />
                  <ImageInput
                    title="Pé Direito"
                    value={formData.garagem.areaGaragem.find(item => item.value === option.value)?.peDireito || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('garagem', 'areaGaragem', option.value, { field: 'peDireito', value: e.target.value })}
                  />
                  <ImageInput
                    title="Área total de forros - M²"
                    value={formData.garagem.areaGaragem.find(item => item.value === option.value)?.areaForros || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('garagem', 'areaGaragem', option.value, { field: 'areaForros', value: e.target.value })}
                  />
                </div>
              )}
            </ImageToggle>
          ))}
        </ImageToggleContainer>   
        </SubSection>

        <SubSection title="Fundação" description="Somatória total de m² de pisos">
        <ImageToggleContainer>
            {fundacaoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.garagem.fundacaoGaragem) && formData.garagem.fundacaoGaragem.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('garagem', 'fundacaoGaragem', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.garagem.fundacaoGaragem) ? (formData.garagem.fundacaoGaragem.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('garagem', 'fundacaoGaragem', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Porcelanato" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosPorcelanatoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.garagem.pisosPorcelanatoGaragem) && formData.garagem.pisosPorcelanatoGaragem.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('garagem', 'pisosPorcelanatoGaragem', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.garagem.pisosPorcelanatoGaragem) ? (formData.garagem.pisosPorcelanatoGaragem.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('garagem', 'pisosPorcelanatoGaragem', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Laminados" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosLaminadoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.garagem.pisosLaminadoGaragem) && formData.garagem.pisosLaminadoGaragem.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('garagem', 'pisosLaminadoGaragem', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.garagem.pisosLaminadoGaragem) ? (formData.garagem.pisosLaminadoGaragem.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('garagem', 'pisosLaminadoGaragem', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Peitoril e Soleiras" description="Somatória total de soleiras em ML da garagem.">
        <ImageToggleContainer>
            {peitorilSoleirasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.garagem.peitorilSoleirasGaragem) && formData.garagem.peitorilSoleirasGaragem.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('garagem', 'peitorilSoleirasGaragem', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade Total na Obra - ML"
                  value={Array.isArray(formData.garagem.peitorilSoleirasGaragem) ? (formData.garagem.peitorilSoleirasGaragem.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('garagem', 'peitorilSoleirasGaragem', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Portas de Madeira" description="Quantidade total de portas no ambiente.">
          <ImageToggleContainer>
              {portasMadeiraOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={Array.isArray(formData.garagem.portasMadeiraGaragem) && formData.garagem.portasMadeiraGaragem.some(item => item.value === option.value)}
                  onClick={() => handleImageToggle('garagem', 'portasMadeiraGaragem', option.value, true)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  {option.img ? (
                    <div>
                    
                    <Image src={option.img} alt={option.label} />
                    <ImageInput
                      title="Quantidade total na obra - UN"
                      value={Array.isArray(formData.garagem.portasMadeiraGaragem) ? (formData.garagem.portasMadeiraGaragem.find(item => item.value === option.value)?.input || '') : ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChange('garagem', 'portasMadeiraGaragem', option.value, { field: 'input', value: e.target.value })}
                      />
                    </div>
                  ) : (
                    <>
                      <ImageInput
                        title="Descrever o tipo, medidas e modelo da porta"
                        type="text"
                        value={Array.isArray(formData.garagem.portasMadeiraGaragem) ? (formData.garagem.portasMadeiraGaragem.find(item => item.value === option.value)?.portasMadeiraGaragem || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('garagem', 'portasMadeiraGaragem', option.value, { field: 'portasMadeiraGaragem', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Valor unitário com material e mão de obra"
                        type="number"
                        value={Array.isArray(formData.garagem.portasMadeiraGaragem) ? (formData.garagem.portasMadeiraGaragem.find(item => item.value === option.value)?.valor || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('garagem', 'portasMadeiraGaragem', option.value, { field: 'valor', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Quantidade Total na Obra - Un"
                        type="number"
                        value={Array.isArray(formData.garagem.portasMadeiraGaragem) ? (formData.garagem.portasMadeiraGaragem.find(item => item.value === option.value)?.metragem || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('garagem', 'portasMadeiraGaragem', option.value, { field: 'metragem', value: e.target.value });
                        }}
                      />
                    </>
                  )}
                </ImageToggle>
              ))}
              </ImageToggleContainer>
          </SubSection>


          <SubSection title="Acabamentos - Portas e Janelas Esquadrias" description="Somatória total de m² de pisos da garagem.">
        <ImageToggleContainer>
            {portasJanelasEsquadriasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.garagem.portasJanelasEsquadriasGaragem) && formData.garagem.portasJanelasEsquadriasGaragem.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('garagem', 'portasJanelasEsquadriasGaragem', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total na obra - UN"
                  value={Array.isArray(formData.garagem.portasJanelasEsquadriasGaragem) ? (formData.garagem.portasJanelasEsquadriasGaragem.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('garagem', 'portasJanelasEsquadriasGaragem', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pintura Interna" description="Somatória total de M²/Face de paredes a serem pintadas.">
        <ImageToggleContainer>
            {pinturaInternaOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.garagem.pinturaInternaGaragem) && formData.garagem.pinturaInternaGaragem.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('garagem', 'pinturaInternaGaragem', option.value, true, '34,00')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Tot. M²/Face:"
                  value={Array.isArray(formData.garagem.pinturaInternaGaragem) ? (formData.garagem.pinturaInternaGaragem.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('garagem', 'pinturaInternaGaragem', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          </SectionWithHeader>      
          <SectionWithHeader title="SALA, ESTAR-TV, HALL E CORREDORES">
        <SubSection title="Levantamento de Áreas" description="Somatória total de m² de parede externa, inclusive volumes de caixa d'água, decorativos, beirais e etc.">
          
        <ImageToggleContainer>
          {levantamentoAreaSalaOptions.map(option => (
            <ImageToggle
              key={option.value}
              selected={Array.isArray(formData.sala.areaSala) && formData.sala.areaSala.some(item => item.value === option.value)}
              onClick={() => handleImageToggle('sala', 'areaSala', option.value, true)}
            >
              <ImageLabel>{option.label}</ImageLabel>
              <Image src={option.img} alt={option.label} />
              {formData.sala.areaSala && Array.isArray(formData.sala.areaSala) && formData.sala.areaSala.some(item => item.value === option.value) && (
                <div>
                  <ImageInput
                    title="Área - M²"
                    value={formData.sala.areaSala.find(item => item.value === option.value)?.area || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('sala', 'areaSala', option.value, { field: 'area', value: e.target.value })}
                  />
                  <ImageInput
                    title="Perímetro de todas as paredes - ML"
                    value={formData.sala.areaSala.find(item => item.value === option.value)?.perimetro || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('sala', 'areaSala', option.value, { field: 'perimetro', value: e.target.value })}
                  />
                  <ImageInput
                    title="Pé Direito"
                    value={formData.sala.areaSala.find(item => item.value === option.value)?.peDireito || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('sala', 'areaSala', option.value, { field: 'peDireito', value: e.target.value })}
                  />
                  <ImageInput
                    title="Área total de forros - M²"
                    value={formData.sala.areaSala.find(item => item.value === option.value)?.areaForros || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('sala', 'areaSala', option.value, { field: 'areaForros', value: e.target.value })}
                  />
                </div>
              )}
            </ImageToggle>
          ))}
        </ImageToggleContainer>   
        </SubSection>

        <SubSection title="Fundação" description="Somatória total de m² de pisos">
        <ImageToggleContainer>
            {fundacaoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.sala.fundacaoSala) && formData.sala.fundacaoSala.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('sala', 'fundacaoSala', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.sala.fundacaoSala) ? (formData.sala.fundacaoSala.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('sala', 'fundacaoSala', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Porcelanato" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosPorcelanatoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.sala.pisoPocelanatosala) && formData.sala.pisoPocelanatosala.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('sala', 'pisoPocelanatosala', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.sala.pisoPocelanatosala) ? (formData.sala.pisoPocelanatosala.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('sala', 'pisoPocelanatosala', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Laminados" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosLaminadoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.sala.pisoLaminadoSala) && formData.sala.pisoLaminadoSala.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('sala', 'pisoLaminadoSala', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.sala.pisoLaminadoSala) ? (formData.sala.pisoLaminadoSala.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('sala', 'pisoLaminadoSala', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Peitoril e Soleiras" description="Somatória total de soleiras em ML da garagem.">
        <ImageToggleContainer>
            {peitorilSoleirasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.sala.peitorilSoleirasSala) && formData.sala.peitorilSoleirasSala.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('sala', 'peitorilSoleirasSala', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade Total na Obra - ML"
                  value={Array.isArray(formData.sala.peitorilSoleirasSala) ? (formData.sala.peitorilSoleirasSala.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('sala', 'peitorilSoleirasSala', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Portas de Madeira" description="Quantidade total de portas no ambiente.">
          <ImageToggleContainer>
              {portasMadeiraOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={Array.isArray(formData.sala.portasMadeiraSala) && formData.sala.portasMadeiraSala.some(item => item.value === option.value)}
                  onClick={() => handleImageToggle('sala', 'portasMadeiraSala', option.value, true)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  {option.img ? (
                    <div>
                    
                    <Image src={option.img} alt={option.label} />
                    <ImageInput
                      title="Quantidade total na obra - UN"
                      value={Array.isArray(formData.sala.portasMadeiraSala) ? (formData.sala.portasMadeiraSala.find(item => item.value === option.value)?.input || '') : ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChange('sala', 'portasMadeiraSala', option.value, { field: 'input', value: e.target.value })}
                      />
                    </div>
                  ) : (
                    <>
                      <ImageInput
                        title="Descrever o tipo, medidas e modelo da porta"
                        type="text"
                        value={Array.isArray(formData.sala.portasMadeiraSala) ? (formData.sala.portasMadeiraSala.find(item => item.value === option.value)?.portasMadeiraSala || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('sala', 'portasMadeiraSala', option.value, { field: 'portasMadeiraSala', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Valor unitário com material e mão de obra"
                        type="number"
                        value={Array.isArray(formData.sala.portasMadeiraSala) ? (formData.sala.portasMadeiraSala.find(item => item.value === option.value)?.valor || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('sala', 'portasMadeiraSala', option.value, { field: 'valor', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Quantidade Total na Obra - Un"
                        type="number"
                        value={Array.isArray(formData.sala.portasMadeiraSala) ? (formData.sala.portasMadeiraSala.find(item => item.value === option.value)?.metragem || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('sala', 'portasMadeiraSala', option.value, { field: 'metragem', value: e.target.value });
                        }}
                      />
                    </>
                  )}
                </ImageToggle>
              ))}
              </ImageToggleContainer>
          </SubSection>


          <SubSection title="Acabamentos - Portas e Janelas Esquadrias" description="Somatória total de m² de pisos da garagem.">
        <ImageToggleContainer>
            {portasJanelasEsquadriasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.sala.portasJanelasEsquadriasSala) && formData.sala.portasJanelasEsquadriasSala.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('sala', 'portasJanelasEsquadriasSala', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total na obra - UN"
                  value={Array.isArray(formData.sala.portasJanelasEsquadriasSala) ? (formData.sala.portasJanelasEsquadriasSala.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('sala', 'portasJanelasEsquadriasSala', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pintura Interna" description="Somatória total de M²/Face de paredes a serem pintadas.">
        <ImageToggleContainer>
            {pinturaInternaOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.sala.pinturaInternaSala) && formData.sala.pinturaInternaSala.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('sala', 'pinturaInternaSala', option.value, true, '34,00')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Tot. M²/Face:"
                  value={Array.isArray(formData.sala.pinturaInternaSala) ? (formData.sala.pinturaInternaSala.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('sala', 'pinturaInternaSala', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>











          <Row>
            <Column>
              <Label htmlFor="portasMadeiraEscritorio">Quantidade de Portas de Madeiras</Label>
              <InputNumber
                type="number"
                id="portasMadeiraEscritorio"
                name="portasMadeiraEscritorio"
                value={formData.escritorio.portasMadeiraEscritorio || ''}
                onChange={(e) => handleChange(e, 'escritorio', 'portasMadeiraEscritorio')}
              />
            </Column>
            <Column>
              <Label htmlFor="vidrosAluminioEscritorio">M² de Vidros/Esquadria de Alumínio</Label>
              <InputNumber
                type="number"
                id="vidrosAluminioEscritorio"
                name="vidrosAluminioEscritorio"
                value={formData.escritorio.vidrosAluminioEscritorio || ''}
                onChange={(e) => handleChange(e, 'escritorio', 'vidrosAluminioEscritorio')}
              />
            </Column>
          </Row>

        <SubSection title="Acabamentos">
          <Row>
            <Column>
              <Label htmlFor="acabamentoEscritorio">Tipo de Acabamento</Label>
              <Select
                id="acabamentoEscritorio"
                name="acabamentoEscritorio"
                value={formData.escritorio.acabamentoEscritorio || ''}
                onChange={(e) => handleChange(e, 'escritorio', 'acabamentoEscritorio')}
              >
                <option value="">Selecione uma opção</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
                <option value="sem_acabamento">Sem acabamento</option>
              </Select>
            </Column>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Conforto Termoacústico
                  <SwitchInput
                    type="checkbox"
                    name="confortoEscritorio"
                    checked={formData.escritorio.confortoEscritorio || false}
                    onChange={(e) => handleChange(e, 'escritorio', 'confortoEscritorio')}
                  />
                  <SwitchSlider checked={formData.escritorio.confortoEscritorio || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>
          </SectionWithHeader>
          <SectionWithHeader title="ESCRITÓRIO E DESPENSA">
        <SubSection title="Levantamento de Áreas" description="Somatória total de m² de parede externa, inclusive volumes de caixa d'água, decorativos, beirais e etc.">
          
        <ImageToggleContainer>
          {levantamentoAreaEscritórioOptions.map(option => (
            <ImageToggle
              key={option.value}
              selected={Array.isArray(formData.escritorio.areaEscritorio) && formData.escritorio.areaEscritorio.some(item => item.value === option.value)}
              onClick={() => handleImageToggle('escritorio', 'areaEscritorio', option.value, true)}
            >
              <ImageLabel>{option.label}</ImageLabel>
              <Image src={option.img} alt={option.label} />
              {formData.escritorio.areaEscritorio && Array.isArray(formData.escritorio.areaEscritorio) && formData.escritorio.areaEscritorio.some(item => item.value === option.value) && (
                <div>
                  <ImageInput
                    title="Área - M²"
                    value={formData.escritorio.areaEscritorio.find(item => item.value === option.value)?.area || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('escritorio', 'areaEscritorio', option.value, { field: 'area', value: e.target.value })}
                  />
                  <ImageInput
                    title="Perímetro de todas as paredes - ML"
                    value={formData.escritorio.areaEscritorio.find(item => item.value === option.value)?.perimetro || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('escritorio', 'areaEscritorio', option.value, { field: 'perimetro', value: e.target.value })}
                  />
                  <ImageInput
                    title="Pé Direito"
                    value={formData.escritorio.areaEscritorio.find(item => item.value === option.value)?.peDireito || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('escritorio', 'areaEscritorio', option.value, { field: 'peDireito', value: e.target.value })}
                  />
                  <ImageInput
                    title="Área total de forros - M²"
                    value={formData.escritorio.areaEscritorio.find(item => item.value === option.value)?.areaForros || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('escritorio', 'areaEscritorio', option.value, { field: 'areaForros', value: e.target.value })}
                  />
                </div>
              )}
            </ImageToggle>
          ))}
        </ImageToggleContainer>   
        </SubSection>

        <SubSection title="Fundação" description="Somatória total de m² de pisos">
        <ImageToggleContainer>
            {fundacaoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.escritorio.fundacaoEscritorio) && formData.escritorio.fundacaoEscritorio.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('escritorio', 'fundacaoEscritorio', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.escritorio.fundacaoEscritorio) ? (formData.escritorio.fundacaoEscritorio.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('escritorio', 'fundacaoEscritorio', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Porcelanato" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosPorcelanatoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.escritorio.pisoPocelanatoEscritorio) && formData.escritorio.pisoPocelanatoEscritorio.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('escritorio', 'pisoPocelanatoEscritorio', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.escritorio.pisoPocelanatoEscritorio) ? (formData.escritorio.pisoPocelanatoEscritorio.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('escritorio', 'pisoPocelanatoEscritorio', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Laminados" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosLaminadoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.escritorio.pisoLaminadoEscritorio) && formData.escritorio.pisoLaminadoEscritorio.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('escritorio', 'pisoLaminadoEscritorio', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.escritorio.pisoLaminadoEscritorio) ? (formData.escritorio.pisoLaminadoEscritorio.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('escritorio', 'pisoLaminadoEscritorio', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Peitoril e Soleiras" description="Somatória total de soleiras em ML da garagem.">
        <ImageToggleContainer>
            {peitorilSoleirasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.escritorio.peitorilSoleirasEscritorio) && formData.escritorio.peitorilSoleirasEscritorio.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('escritorio', 'peitorilSoleirasEscritorio', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade Total na Obra - ML"
                  value={Array.isArray(formData.escritorio.peitorilSoleirasEscritorio) ? (formData.escritorio.peitorilSoleirasEscritorio.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('escritorio', 'peitorilSoleirasEscritorio', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Portas de Madeira" description="Quantidade total de portas no ambiente.">
          <ImageToggleContainer>
              {portasMadeiraOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={Array.isArray(formData.escritorio.portasMadeiraEscritorio) && formData.escritorio.portasMadeiraEscritorio.some(item => item.value === option.value)}
                  onClick={() => handleImageToggle('escritorio', 'portasMadeiraEscritorio', option.value, true)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  {option.img ? (
                    <div>
                    
                    <Image src={option.img} alt={option.label} />
                    <ImageInput
                      title="Quantidade total na obra - UN"
                      value={Array.isArray(formData.escritorio.portasMadeiraEscritorio) ? (formData.escritorio.portasMadeiraEscritorio.find(item => item.value === option.value)?.input || '') : ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChange('escritorio', 'portasMadeiraEscritorio', option.value, { field: 'input', value: e.target.value })}
                      />
                    </div>
                  ) : (
                    <>
                      <ImageInput
                        title="Descrever o tipo, medidas e modelo da porta"
                        type="text"
                        value={Array.isArray(formData.escritorio.portasMadeiraEscritorio) ? (formData.escritorio.portasMadeiraEscritorio.find(item => item.value === option.value)?.tipoTelha || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('escritorio', 'portasMadeiraEscritorio', option.value, { field: 'portasMadeiraEscritorio', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Valor unitário com material e mão de obra"
                        type="number"
                        value={Array.isArray(formData.escritorio.portasMadeiraEscritorio) ? (formData.escritorio.portasMadeiraEscritorio.find(item => item.value === option.value)?.valor || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('escritorio', 'portasMadeiraEscritorio', option.value, { field: 'valor', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Quantidade Total na Obra - Un"
                        type="number"
                        value={Array.isArray(formData.escritorio.portasMadeiraEscritorio) ? (formData.escritorio.portasMadeiraEscritorio.find(item => item.value === option.value)?.metragem || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('escritorio', 'portasMadeiraEscritorio', option.value, { field: 'metragem', value: e.target.value });
                        }}
                      />
                    </>
                  )}
                </ImageToggle>
              ))}
              </ImageToggleContainer>
          </SubSection>


          <SubSection title="Acabamentos - Portas e Janelas Esquadrias" description="Somatória total de m² de pisos da garagem.">
        <ImageToggleContainer>
            {portasJanelasEsquadriasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.escritorio.portasJanelasEsquadriasEscritorio) && formData.escritorio.portasJanelasEsquadriasEscritorio.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('escritorio', 'portasJanelasEsquadriasEscritorio:', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total na obra - UN"
                  value={Array.isArray(formData.escritorio.portasJanelasEsquadriasEscritorio) ? (formData.escritorio.portasJanelasEsquadriasEscritorio.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('escritorio', 'portasJanelasEsquadriasEscritorio', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pintura Interna" description="Somatória total de M²/Face de paredes a serem pintadas.">
        <ImageToggleContainer>
            {pinturaInternaOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.escritorio.pinturaInternaEscritorio) && formData.escritorio.pinturaInternaEscritorio.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('escritorio', 'pinturaInternaEscritorio', option.value, true, '34,00')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Tot. M²/Face:"
                  value={Array.isArray(formData.escritorio.pinturaInternaEscritorio) ? (formData.escritorio.pinturaInternaEscritorio.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('escritorio', 'pinturaInternaEscritorio', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>
          </SectionWithHeader>
          {formData.quartos.map((quarto, index) => (
        <SectionWithHeader key={index} title={`QUARTOS E CLOSETS ${index + 1}`}>

        <SubSection title="Levantamento de Áreas" description="Somatória total de m² de parede externa, inclusive volumes de caixa d'água, decorativos, beirais e etc.">
        <ImageToggleContainer>
          {levantamentoAreaQuartoOptions.map(option => (
            <ImageToggle
              key={option.value}
              selected={Array.isArray(quarto.areaQuarto) && quarto.areaQuarto.some(item => item.value === option.value)}
              onClick={() => handleImageToggleSub('quartos', index, 'areaQuarto', option.value, true)}
            >
              <ImageLabel>{option.label}</ImageLabel>
              <Image src={option.img} alt={option.label} />
              {quarto.areaQuarto && Array.isArray(quarto.areaQuarto) && quarto.areaQuarto.some(item => item.value === option.value) && (
                <div>
                  <ImageInput
                    title="Área - M²"
                    value={quarto.areaQuarto.find(item => item.value === option.value)?.area || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChangeSub('quartos', index, 'areaQuarto', option.value, { field: 'area', value: e.target.value })}
                  />
                  <ImageInput
                    title="Perímetro de todas as paredes - ML"
                    value={quarto.areaQuarto.find(item => item.value === option.value)?.perimetro || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChangeSub('quartos', index, 'areaQuarto', option.value, { field: 'perimetro', value: e.target.value })}
                  />
                  <ImageInput
                    title="Pé Direito"
                    value={quarto.areaQuarto.find(item => item.value === option.value)?.peDireito || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChangeSub('quartos', index, 'areaQuarto', option.value, { field: 'peDireito', value: e.target.value })}
                  />
                  <ImageInput
                    title="Área total de forros - M²"
                    value={quarto.areaQuarto.find(item => item.value === option.value)?.areaForros || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChangeSub('quartos', index, 'areaQuarto', option.value, { field: 'areaForros', value: e.target.value })}
                  />
                </div>
              )}
            </ImageToggle>
          ))}
        </ImageToggleContainer>   


        <SubSection title="Fundação" description="Somatória total de m² de pisos">
        <ImageToggleContainer>
            {fundacaoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(quarto.fundacaoQuarto) && quarto.fundacaoQuarto.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('quartos', index, 'fundacaoQuarto', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(quarto.fundacaoQuarto) ? (quarto.fundacaoQuarto.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('quartos', index, 'fundacaoQuarto', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Porcelanato" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosPorcelanatoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(quarto.pisoPocelanatoQuarto) && quarto.pisoPocelanatoQuarto.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('quartos', index, 'pisoPocelanatoQuarto', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(quarto.pisoPocelanatoQuarto) ? (quarto.pisoPocelanatoQuarto.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('quartos', index, 'pisoPocelanatoQuarto', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Laminados" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosLaminadoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(quarto.pisoLaminadoQuarto) && quarto.pisoLaminadoQuarto.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('quartos', index, 'pisoLaminadoQuarto', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(quarto.pisoLaminadoQuarto) ? (quarto.pisoLaminadoQuarto.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('quartos', index, 'pisoLaminadoQuarto', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Peitoril e Soleiras" description="Somatória total de soleiras em ML da garagem.">
        <ImageToggleContainer>
            {peitorilSoleirasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(quarto.peitorilSoleirasQuarto) && quarto.peitorilSoleirasQuarto.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('quartos', index, 'peitorilSoleirasQuarto', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade Total na Obra - ML"
                  value={Array.isArray(quarto.peitorilSoleirasQuarto) ? (quarto.peitorilSoleirasQuarto.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('quartos', index, 'peitorilSoleirasQuarto', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Portas de Madeira" description="Quantidade total de portas no ambiente.">
          <ImageToggleContainer>
              {portasMadeiraOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={Array.isArray(quarto.portasMadeiraQuarto) && quarto.portasMadeiraQuarto.some(item => item.value === option.value)}
                  onClick={() => handleImageToggleSub('quartos', index, 'portasMadeiraQuarto', option.value, true)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  {option.img ? (
                    <div>
                    
                    <Image src={option.img} alt={option.label} />
                    <ImageInput
                      title="Quantidade total na obra - UN"
                      value={Array.isArray(quarto.portasMadeiraQuarto) ? (quarto.portasMadeiraQuarto.find(item => item.value === option.value)?.input || '') : ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChangeSub('quartos', index, 'portasMadeiraQuarto', option.value, { field: 'input', value: e.target.value })}
                      />
                    </div>
                  ) : (
                    <>
                      <ImageInput
                        title="Descrever o tipo, medidas e modelo da porta"
                        type="text"
                        value={Array.isArray(quarto.portasMadeiraQuarto) ? (quarto.portasMadeiraQuarto.find(item => item.value === option.value)?.portasMadeiraQuarto || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChangeSub('quartos', index, 'portasMadeiraQuarto', option.value, { field: 'portasMadeiraQuarto', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Valor unitário com material e mão de obra"
                        type="number"
                        value={Array.isArray(quarto.portasMadeiraQuarto) ? (quarto.portasMadeiraQuarto.find(item => item.value === option.value)?.valor || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChangeSub('quartos', index, 'portasMadeiraQuarto', option.value, { field: 'valor', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Quantidade Total na Obra - Un"
                        type="number"
                        value={Array.isArray(quarto.portasMadeiraQuarto) ? (quarto.portasMadeiraQuarto.find(item => item.value === option.value)?.metragem || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChangeSub('quartos', index, 'portasMadeiraQuarto', option.value, { field: 'metragem', value: e.target.value });
                        }}
                      />
                    </>
                  )}
                </ImageToggle>
              ))}
              </ImageToggleContainer>
          </SubSection>


          <SubSection title="Acabamentos - Portas e Janelas Esquadrias" description="Somatória total de m² de pisos da garagem.">
        <ImageToggleContainer>
            {portasJanelasEsquadriasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(quarto.portasJanelasEsquadriasQuarto) && quarto.portasJanelasEsquadriasQuarto.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('quartos', index, 'portasJanelasEsquadriasQuarto', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total na obra - UN"
                  value={Array.isArray(quarto.portasJanelasEsquadriasQuarto) ? (quarto.portasJanelasEsquadriasQuarto.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('quartos', index, 'portasJanelasEsquadriasQuarto', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pintura Interna" description="Somatória total de M²/Face de paredes a serem pintadas.">
        <ImageToggleContainer>
            {pinturaInternaOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(quarto.pinturaInternaQuarto) && quarto.pinturaInternaQuarto.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('quartos', index, 'pinturaInternaQuarto', option.value, true, '34,00')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Tot. M²/Face:"
                  value={Array.isArray(quarto.pinturaInternaQuarto) ? (quarto.pinturaInternaQuarto.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('quartos', index, 'pinturaInternaQuarto', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>
          </SubSection>
        </SectionWithHeader>
          ))}
          <button type="button" onClick={() => addSubItem('quartos')}>Adicionar Quarto</button> 
          <SectionWithHeader title="COZINHA E ÁREA GOURMET">
        <SubSection title="Levantamento de Áreas" description="Somatória total de m² de parede externa, inclusive volumes de caixa d'água, decorativos, beirais e etc.">
        <ImageToggleContainer>
          {levantamentoAreaCozinhaOptions.map(option => (
            <ImageToggle
              key={option.value}
              selected={Array.isArray(formData.cozinha.areaCozinha) && formData.cozinha.areaCozinha.some(item => item.value === option.value)}
              onClick={() => handleImageToggle('cozinha', 'areaCozinha', option.value, true)}
            >
              <ImageLabel>{option.label}</ImageLabel>
              <Image src={option.img} alt={option.label} />
              {formData.cozinha.areaCozinha && Array.isArray(formData.cozinha.areaCozinha) && formData.cozinha.areaCozinha.some(item => item.value === option.value) && (
                <div>
                  <ImageInput
                    title="Área - M²"
                    value={formData.cozinha.areaCozinha.find(item => item.value === option.value)?.area || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('cozinha', 'areaCozinha', option.value, { field: 'area', value: e.target.value })}
                  />
                  <ImageInput
                    title="Perímetro de todas as paredes - ML"
                    value={formData.cozinha.areaCozinha.find(item => item.value === option.value)?.perimetro || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('cozinha', 'areaCozinha', option.value, { field: 'perimetro', value: e.target.value })}
                  />
                  <ImageInput
                    title="Pé Direito"
                    value={formData.cozinha.areaCozinha.find(item => item.value === option.value)?.peDireito || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('cozinha', 'areaCozinha', option.value, { field: 'peDireito', value: e.target.value })}
                  />
                  <ImageInput
                    title="Área total de forros - M²"
                    value={formData.cozinha.areaCozinha.find(item => item.value === option.value)?.areaForros || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChange('cozinha', 'areaCozinha', option.value, { field: 'areaForros', value: e.target.value })}
                  />
                </div>
              )}
            </ImageToggle>
          ))}
        </ImageToggleContainer>   
        </SubSection>

        <SubSection title="Fundação" description="Somatória total de m² de pisos">
        <ImageToggleContainer>
            {fundacaoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.fundacaoCozinha) && formData.cozinha.fundacaoCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'fundacaoCozinha', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.cozinha.fundacaoCozinha) ? (formData.cozinha.fundacaoCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'fundacaoCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Porcelanato" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosPorcelanatoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.pisoPorcelanatoCozinha) && formData.cozinha.pisoPorcelanatoCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'pisoPorcelanatoCozinha', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.cozinha.pisoPorcelanatoCozinha) ? (formData.cozinha.pisoPorcelanatoCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'pisoPorcelanatoCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Revestimento de Paredes" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {revestimentoParedesOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.revestimentoParedesCozinha) && formData.cozinha.revestimentoParedesCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'revestimentoParedesCozinha', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.cozinha.revestimentoParedesCozinha) ? (formData.cozinha.revestimentoParedesCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'revestimentoParedesCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Laminados" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosLaminadoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.pisoLaminadoCozinha) && formData.cozinha.pisoLaminadoCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'pisoLaminadoCozinha', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(formData.cozinha.pisoLaminadoCozinha) ? (formData.cozinha.pisoLaminadoCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'pisoLaminadoCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Balcões e Bancadas" description="Somatória total de balcões e bancas em M² neste ambiente.">
        <ImageToggleContainer>
            {balcoesBancadasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.balcoesBancadasCozinha) && formData.cozinha.balcoesBancadasCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'balcoesBancadasCozinha', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total neste ambiente - M²"
                  value={Array.isArray(formData.cozinha.balcoesBancadasCozinha) ? (formData.cozinha.balcoesBancadasCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'balcoesBancadasCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Peitoril e Soleiras" description="Somatória total de soleiras em ML da garagem.">
        <ImageToggleContainer>
            {peitorilSoleirasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.peitorilSoleirasCozinha) && formData.cozinha.peitorilSoleirasCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'peitorilSoleirasCozinha', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade Total na Obra - ML"
                  value={Array.isArray(formData.cozinha.peitorilSoleirasCozinha) ? (formData.cozinha.peitorilSoleirasCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'peitorilSoleirasCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Portas de Madeira" description="Quantidade total de portas no ambiente.">
          <ImageToggleContainer>
              {portasMadeiraOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={Array.isArray(formData.cozinha.portasMadeiraCozinha) && formData.cozinha.portasMadeiraCozinha.some(item => item.value === option.value)}
                  onClick={() => handleImageToggle('cozinha', 'portasMadeiraCozinha', option.value, true)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  {option.img ? (
                    <div>
                    
                    <Image src={option.img} alt={option.label} />
                    <ImageInput
                      title="Quantidade total na obra - UN"
                      value={Array.isArray(formData.cozinha.portasMadeiraCozinha) ? (formData.cozinha.portasMadeiraCozinha.find(item => item.value === option.value)?.input || '') : ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChange('cozinha', 'portasMadeiraCozinha', option.value, { field: 'input', value: e.target.value })}
                      />
                    </div>
                  ) : (
                    <>
                      <ImageInput
                        title="Descrever o tipo, medidas e modelo da porta"
                        type="text"
                        value={Array.isArray(formData.cozinha.portasMadeiraCozinha) ? (formData.cozinha.portasMadeiraCozinha.find(item => item.value === option.value)?.portasMadeiraCozinha || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('cozinha', 'portasMadeiraCozinha', option.value, { field: 'portasMadeiraCozinha', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Valor unitário com material e mão de obra"
                        type="number"
                        value={Array.isArray(formData.cozinha.portasMadeiraCozinha) ? (formData.cozinha.portasMadeiraCozinha.find(item => item.value === option.value)?.valor || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('cozinha', 'portasMadeiraCozinha', option.value, { field: 'valor', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Quantidade Total na Obra - Un"
                        type="number"
                        value={Array.isArray(formData.cozinha.portasMadeiraCozinha) ? (formData.cozinha.portasMadeiraCozinha.find(item => item.value === option.value)?.metragem || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChange('cozinha', 'portasMadeiraCozinha', option.value, { field: 'metragem', value: e.target.value });
                        }}
                      />
                    </>
                  )}
                </ImageToggle>
              ))}
              </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Portas e Janelas Esquadrias" description="Somatória total de m² de pisos da garagem.">
        <ImageToggleContainer>
            {portasJanelasEsquadriasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.portasJanelasEsquadriasCozinha) && formData.cozinha.portasJanelasEsquadriasCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'portasJanelasEsquadriasCozinha', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total na obra - UN"
                  value={Array.isArray(formData.cozinha.portasJanelasEsquadriasCozinha) ? (formData.cozinha.portasJanelasEsquadriasCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'portasJanelasEsquadriasCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pintura Interna" description="Somatória total de M²/Face de paredes a serem pintadas.">
        <ImageToggleContainer>
            {pinturaInternaOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.pinturaInternaCozinha) && formData.cozinha.pinturaInternaCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'pinturaInternaCozinha', option.value, true, '34,00')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Tot. M²/Face:"
                  value={Array.isArray(formData.cozinha.pinturaInternaCozinha) ? (formData.cozinha.pinturaInternaCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'pinturaInternaCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Metais Cozinha" description="Somatória total de m² de pisos da garagem.">
        <ImageToggleContainer>
            {metaisCozinhaOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(formData.cozinha.metaisCozinha) && formData.cozinha.metaisCozinha.some(item => item.value === option.value)}
                onClick={() => handleImageToggle('cozinha', 'metaisCozinha', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total na obra - UN"
                  value={Array.isArray(formData.cozinha.metaisCozinha) ? (formData.cozinha.metaisCozinha.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChange('cozinha', 'metaisCozinha', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>











        

        <SubSection title="Acabamentos">
          <Row>
            <Column>
              <Label htmlFor="acabamentoEscritorio">Tipo de Acabamento</Label>
              <Select
                id="acabamentoEscritorio"
                name="acabamentoEscritorio"
                value={formData.escritorio.acabamentoEscritorio || ''}
                onChange={(e) => handleChange(e, 'escritorio', 'acabamentoEscritorio')}
              >
                <option value="">Selecione uma opção</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
                <option value="sem_acabamento">Sem acabamento</option>
              </Select>
            </Column>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Conforto Termoacústico
                  <SwitchInput
                    type="checkbox"
                    name="confortoEscritorio"
                    checked={formData.escritorio.confortoEscritorio || false}
                    onChange={(e) => handleChange(e, 'escritorio', 'confortoEscritorio')}
                  />
                  <SwitchSlider checked={formData.escritorio.confortoEscritorio || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>
          </SectionWithHeader>
          {formData.banheiros.map((banheiro, index) => (
        <SectionWithHeader key={index} title={`BANHEIROS ${index + 1}`}>

        <SubSection title="Levantamento de Áreas" description="Somatória total de m² de parede externa, inclusive volumes de caixa d'água, decorativos, beirais e etc.">
        <ImageToggleContainer>
          {levantamentoAreaBanheiro.map(option => (
            <ImageToggle
              key={option.value}
              selected={Array.isArray(banheiro.areaBanheiro) && banheiro.areaBanheiro.some(item => item.value === option.value)}
              onClick={() => handleImageToggleSub('banheiros', index, 'areaBanheiro', option.value, true)}
            >
              <ImageLabel>{option.label}</ImageLabel>
              <Image src={option.img} alt={option.label} />
              {banheiro.areaBanheiro && Array.isArray(banheiro.areaBanheiro) && banheiro.areaBanheiro.some(item => item.value === option.value) && (
                <div>
                  <ImageInput
                    title="Área - M²"
                    value={banheiro.areaBanheiro.find(item => item.value === option.value)?.area || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChangeSub('banheiros', index, 'areaBanheiro', option.value, { field: 'area', value: e.target.value })}
                  />
                  <ImageInput
                    title="Perímetro de todas as paredes - ML"
                    value={banheiro.areaBanheiro.find(item => item.value === option.value)?.perimetro || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChangeSub('banheiros', index, 'areaBanheiro', option.value, { field: 'perimetro', value: e.target.value })}
                  />
                  <ImageInput
                    title="Pé Direito"
                    value={banheiro.areaBanheiro.find(item => item.value === option.value)?.peDireito || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChangeSub('banheiros', index, 'areaBanheiro', option.value, { field: 'peDireito', value: e.target.value })}
                  />
                  <ImageInput
                    title="Área total de forros - M²"
                    value={banheiro.areaBanheiro.find(item => item.value === option.value)?.areaForros || ''}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => handleImageInputChangeSub('banheiros', index, 'areaBanheiro', option.value, { field: 'areaForros', value: e.target.value })}
                  />
                </div>
              )}
            </ImageToggle>
          ))}
        </ImageToggleContainer>   


        <SubSection title="Fundação" description="Somatória total de m² de pisos">
        <ImageToggleContainer>
            {fundacaoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.fundacaoBanheiro) && banheiro.fundacaoBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'fundacaoBanheiro', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(banheiro.fundacaoBanheiro) ? (banheiro.fundacaoBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'fundacaoBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Porcelanato" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosPorcelanatoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.pisoPocelanatoBanheiro) && banheiro.pisoPocelanatoBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'pisoPocelanatoBanheiro', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(banheiro.pisoPocelanatoBanheiro) ? (banheiro.pisoPocelanatoBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'pisoPocelanatoBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Revestimento de Paredes" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {revestimentoParedesOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.revestimentoParedesBanheiro) && banheiro.revestimentoParedesBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'revestimentoParedesBanheiro', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(banheiro.revestimentoParedesBanheiro) ? (banheiro.revestimentoParedesBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'revestimentoParedesBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pisos Laminados" description="Somatória total de m² de pisos.">
        <ImageToggleContainer>
            {pisosLaminadoOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.pisoLaminadoBanheiro) && banheiro.pisoLaminadoBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'pisoLaminadoBanheiro', option.value, true, '34')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Qtde. M²"
                  value={Array.isArray(banheiro.pisoLaminadoBanheiro) ? (banheiro.pisoLaminadoBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'pisoLaminadoBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Balcões e Bancadas" description="Somatória total de soleiras em ML da garagem.">
        <ImageToggleContainer>
            {balcoesBancadasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.balcoesBancadasBanheiro) && banheiro.balcoesBancadasBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'balcoesBancadasBanheiro', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade Total na Obra - ML"
                  value={Array.isArray(banheiro.balcoesBancadasBanheiro) ? (banheiro.balcoesBancadasBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'balcoesBancadasBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Peitoril e Soleiras" description="Somatória total de soleiras em ML da garagem.">
        <ImageToggleContainer>
            {peitorilSoleirasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.peitorilSoleirasBanheiro) && banheiro.peitorilSoleirasBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'peitorilSoleirasBanheiro', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade Total na Obra - ML"
                  value={Array.isArray(banheiro.peitorilSoleirasBanheiro) ? (banheiro.peitorilSoleirasBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'peitorilSoleirasBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Portas de Madeira" description="Quantidade total de portas no ambiente.">
          <ImageToggleContainer>
              {portasMadeiraOptions.map(option => (
                <ImageToggle
                  key={option.value}
                  selected={Array.isArray(banheiro.portasMadeiraBanheiro) && banheiro.portasMadeiraBanheiro.some(item => item.value === option.value)}
                  onClick={() => handleImageToggleSub('banheiros', index, 'portasMadeiraBanheiro', option.value, true)}
                >
                  <ImageLabel>{option.label}</ImageLabel>
                  {option.img ? (
                    <div>
                    
                    <Image src={option.img} alt={option.label} />
                    <ImageInput
                      title="Quantidade total na obra - UN"
                      value={Array.isArray(banheiro.portasMadeiraBanheiro) ? (banheiro.portasMadeiraBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleImageInputChangeSub('banheiros', index, 'portasMadeiraBanheiro', option.value, { field: 'input', value: e.target.value })}
                      />
                    </div>
                  ) : (
                    <>
                      <ImageInput
                        title="Descrever o tipo, medidas e modelo da porta"
                        type="text"
                        value={Array.isArray(banheiro.portasMadeiraBanheiro) ? (banheiro.portasMadeiraBanheiro.find(item => item.value === option.value)?.portasMadeiraBanheiro || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChangeSub('banheiros', index, 'portasMadeiraBanheiro', option.value, { field: 'portasMadeiraBanheiro', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Valor unitário com material e mão de obra"
                        type="number"
                        value={Array.isArray(banheiro.portasMadeiraBanheiro) ? (banheiro.portasMadeiraBanheiro.find(item => item.value === option.value)?.valor || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChangeSub('banheiros', index, 'portasMadeiraBanheiro', option.value, { field: 'valor', value: e.target.value });
                        }}
                      />
                      <ImageInput
                        title="Quantidade Total na Obra - Un"
                        type="number"
                        value={Array.isArray(banheiro.portasMadeiraBanheiro) ? (banheiro.portasMadeiraBanheiro.find(item => item.value === option.value)?.metragem || '') : ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          handleImageInputChangeSub('banheiros', index, 'portasMadeiraBanheiro', option.value, { field: 'metragem', value: e.target.value });
                        }}
                      />
                    </>
                  )}
                </ImageToggle>
              ))}
              </ImageToggleContainer>
          </SubSection>


          <SubSection title="Acabamentos - Portas e Janelas Esquadrias" description="Somatória total de m² de pisos da garagem.">
        <ImageToggleContainer>
            {portasJanelasEsquadriasOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.portasJanelasEsquadriasBanheiro) && banheiro.portasJanelasEsquadriasBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'portasJanelasEsquadriasBanheiro', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total na obra - UN"
                  value={Array.isArray(banheiro.portasJanelasEsquadriasBanheiro) ? (banheiro.portasJanelasEsquadriasBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'portasJanelasEsquadriasBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Pintura Interna" description="Somatória total de M²/Face de paredes a serem pintadas.">
        <ImageToggleContainer>
            {pinturaInternaOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.pinturaInternaBanheiro) && banheiro.pinturaInternaBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'pinturaInternaBanheiro', option.value, true, '34,00')}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Tot. M²/Face:"
                  value={Array.isArray(banheiro.pinturaInternaBanheiro) ? (banheiro.pinturaInternaBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'pinturaInternaBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          <SubSection title="Acabamentos - Metais Cozinha" description="Somatória total de m² de pisos da garagem.">
        <ImageToggleContainer>
            {metaisCozinhaOptions.map(option => (
              <ImageToggle
                key={option.value}
                selected={Array.isArray(banheiro.metaisBanheiro) && banheiro.metaisBanheiro.some(item => item.value === option.value)}
                onClick={() => handleImageToggleSub('banheiros', index, 'metaisBanheiro', option.value, true)}
              >
                <ImageLabel>{option.label}</ImageLabel>
                <Image src={option.img} alt={option.label} />
                <ImageInput
                  title="Quantidade total na obra - UN"
                  value={Array.isArray(banheiro.metaisBanheiro) ? (banheiro.metaisBanheiro.find(item => item.value === option.value)?.input || '') : ''}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleImageInputChangeSub('banheiros', index, 'metaisBanheiro', option.value, { field: 'input', value: e.target.value })}
                />
              </ImageToggle>
            ))}
          </ImageToggleContainer>
          </SubSection>

          </SubSection>
        </SectionWithHeader>
          ))}
          <button type="button" onClick={() => addSubItem('quartos')}>Adicionar Quarto</button>
      </FormContainer>
    </PageContainer>
    ))}