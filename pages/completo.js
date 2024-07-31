import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
  SubmitButton
} from '../components/Inputs';

const initialState = {
  garagem: {
    areaGaragem: "",
    telheirosGaragem: "",
    calcadasGaragem: "",
    perimetroGaragem: "",
    peDireitoGaragem: "",
    marmoresGaragem: "",
    marmoresGaragemAcabamento: "standard",
    portasGaragem: "",
    soleirasGaragem: "standard",
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
    salaAcabamento: "standard",
    salaConforto: false,
  },
  quartos: [],
  banheiros: [],
  cozinha: {
    areaCozinha: "",
    perimetroCozinha: "",
    peDireitoCozinha: "",
    portasMadeiraCozinha: "",
    vidrosAluminioCozinha: "",
    kitsCozinha: "",
    marmoresCozinha: "",
    acabamentoCozinha: "standard",
    confortoCozinha: false,
  },
  lavabos: [],
  areaGourmet: {
    areaGourmet: "",
    perimetroGourmet: "",
    peDireitoGourmet: "",
    portasMadeiraGourmet: "",
    vidrosAluminioGourmet: "",
    kitsGourmet: "",
    marmoresGourmet: "",
    acabamentoGourmet: "standard",
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
    acabamentoServico: "standard",
    confortoServico: false,
  },
  despensa: {
    areaDespensa: "",
    perimetroDespensa: "",
    peDireitoDespensa: "",
    portasMadeiraDespensa: "",
    vidrosAluminioDespensa: "",
    acabamentoDespensa: "standard",
    confortoDespensa: false,
  },
  escritorio: {
    areaEscritorio: "",
    perimetroEscritorio: "",
    peDireitoEscritorio: "",
    portasMadeiraEscritorio: "",
    vidrosAluminioEscritorio: "",
    acabamentoEscritorio: "standard",
    confortoEscritorio: false,
  },
  estrutura: {
    quantidadePavimentos: "1",
    grandesVaos: false,
    estiloEscada: "",
    estiloArquitetonico: "",
  },
  paredesExternas: {
    metragemParedesExternas: "",
    padraoParedesExternas: "standard",
  },
  cobertura: {
    areaCobertura: "",
    areaLajes: "",
    areaCalhas: "",
    tipoCobertura: "termoacustica",
  },
  hallEntrada: {
    areaHallEntrada: "",
  },
  salaJantar: {
    areaSalaJantar: "",
  },
  corredores: {
    areaCorredores: "",
  },
  peDireitoDuplo: {
    perimetroPeDireitoDuplo: "",
    alturaPeDireitoDuplo: "",
  },
};


export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e, section, field) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [field]: fieldValue,
      },
    }));
  };

  const handleSubChange = (section, index, e, field) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData(prevFormData => {
      const newArray = [...prevFormData[section]];
      newArray[index] = {
        ...newArray[index],
        [field]: fieldValue,
      };
      return {
        ...prevFormData,
        [section]: newArray,
      };
    });
  };

  const addSubItem = (section) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: [...prevFormData[section], {}],
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    router.push({
      pathname: '/resumo',
      query: { data: jsonData },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Pavimentos */}
      <SectionWithHeader title="Pavimentos e Estrutura" description="Informações sobre a estrutura da obra">
        <SubSection title="Quantidade de Pavimentos">
          <Row>
            <Column>
              <Label htmlFor="quantidadePavimentos">Quantos pavimentos?</Label>
              <Select
                id="quantidadePavimentos"
                name="quantidadePavimentos"
                value={formData.quantidadePavimentos || ''}
                onChange={(e) => handleChange(e, 'estrutura', 'quantidadePavimentos')}
                >
                <option value="1">1 Pavimento (Térrea)</option>
                <option value="2">2 Pavimentos</option>
              </Select>
            </Column>
            </Row>
            <Row>
            <Column>
              <SwitchContainer>
                <SwitchLabel>
                  Obra possui grandes vãos?
                  <SwitchInput
                    type="checkbox"
                    name="grandesVaos"
                    checked={formData.estrutura.grandesVaos || false}
                    onChange={(e) => handleChange(e, 'estrutura', 'grandesVaos')}
                  />
                  <SwitchSlider checked={formData.estrutura.grandesVaos || false} />
                </SwitchLabel>
              </SwitchContainer>
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Estilo de Escada">
          <Row>
            <Column>
              <Label htmlFor="estiloEscada">Qual o padrão de escada? (Só tem escada se tem mais de 1 pavimento?)</Label>
              <Select
                id="estiloEscada"
                name="estiloEscada"
                value={formData.estrutura.estiloEscada || ''}
                onChange={(e) => handleChange(e, 'estrutura', 'estiloEscada')}
              >
                <option value="engastada">Escada engastada com parte inferior fechada</option>
                <option value="vigasLaterais">Escada com vigas laterais</option>
                <option value="vigaCentral">Escada com viga central</option>
                <option value="suspensa">Escada suspensa</option>
                <option value="flutuante">Escada flutuante</option>
              </Select>
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Estilo Arquitetônico">
          <Row>
            <Column>
              <Label htmlFor="estiloArquitetonico">Qual o estilo da sua casa? (Precisa no completo?)</Label>
              <Select
                id="estiloArquitetonico"
                name="estiloArquitetonico"
                value={formData.estrutura.estiloArquitetonico || ''}
                onChange={(e) => handleChange(e, 'estrutura', 'estiloArquitetonico')}
              >
                <option value="minimalista">Minimalista</option>
                <option value="contemporanea">Contemporânea</option>
                <option value="neoClassica">Neo-Clássica</option>
                <option value="mediterranea">Mediterrânea</option>
                <option value="americano">Americano</option>
                <option value="europeia">Europeia</option>
                <option value="brasileira">Brasileira</option>
                <option value="classica">Clássica</option>
              </Select>
            </Column>
          </Row>
        </SubSection>
      </SectionWithHeader>  
      {/* Cobertura */}
      <SectionWithHeader title="Cobertura" description="Informações sobre a cobertura">
        <SubSection title="Área de Cobertura">
          <Row>
            <Column>
              <Label htmlFor="areaCobertura">Somatória total de área de cobertura incluindo telheiros e eventuais beirais (m²)</Label>
              <InputNumber
                type="number"
                id="areaCobertura"
                name="areaCobertura"
                value={formData.cobertura.areaCobertura || ''}
                onChange={(e) => handleChange(e, 'cobertura', 'areaCobertura')}
              />
            </Column>
            <Column>
              <Label htmlFor="areaLajes">Somatória total de áreas de lajes impermeabilizadas (m²)</Label>
              <InputNumber
                type="number"
                id="areaLajes"
                name="areaLajes"
                value={formData.cobertura.areaLajes || ''}
                onChange={(e) => handleChange(e, 'cobertura', 'areaLajes')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Calhas, Rufos e Pingadeiras">
          <Row>
            <Column>
              <Label htmlFor="areaCalhas">Somatória total de calhas, rufos e pingadeiras (m²)</Label>
              <InputNumber
                type="number"
                id="areaCalhas"
                name="areaCalhas"
                value={formData.cobertura.areaCalhas || ''}
                onChange={(e) => handleChange(e, 'cobertura', 'areaCalhas')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Tipos de Cobertura">
          <Row>
            <Column>
              <Label htmlFor="tipoCobertura">Tipo de Cobertura</Label>
              <Select
                id="tipoCobertura"
                name="tipoCobertura"
                value={formData.cobertura.tipoCobertura || ''}
                onChange={(e) => handleChange(e, 'cobertura', 'tipoCobertura')}
              >
                <option value="termoacustica">Cobertura Telha Termoacústica</option>
                <option value="fibrocimento">Cobertura Telha Fibrocimento</option>
                <option value="ceramica">Cobertura Telha Cerâmica</option>
                <option value="translucida">Cobertura Telha Translúcida</option>
              </Select>
            </Column>
          </Row>
        </SubSection>
      </SectionWithHeader>
      {/* Garagem */}
      <SectionWithHeader title="Garagem" description="Informações sobre a garagem">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaGaragem">Área de Garagem e Varandas (m²)</Label>
              <InputNumber
                type="number"
                id="areaGaragem"
                name="areaGaragem"
                value={formData.garagem.areaGaragem || ''}
                onChange={(e) => handleChange(e, 'garagem', 'areaGaragem')}
                />
            </Column>
            <Column>
              <Label htmlFor="telheirosGaragem">Somatória de Telheiros (m²)</Label>
              <InputNumber
                type="number"
                id="telheirosGaragem"
                name="telheirosGaragem"
                value={formData.garagem.telheirosGaragem || ''}
                onChange={(e) => handleChange(e, 'garagem', 'telheirosGaragem')}
                />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label htmlFor="calcadasGaragem">Somatória de todas as calçadas externas (m²)</Label>
              <InputNumber
                type="number"
                id="calcadasGaragem"
                name="calcadasGaragem"
                value={formData.garagem.calcadasGaragem || ''}
                onChange={(e) => handleChange(e, 'garagem', 'calcadasGaragem')}
                />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label htmlFor="perimetroGaragem">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroGaragem"
                name="perimetroGaragem"
                value={formData.garagem.perimetroGaragem || ''}
                onChange={(e) => handleChange(e, 'garagem', 'perimetroGaragem')}
                />
            </Column>
            <Column>
              <Label htmlFor="peDireitoGaragem">Pé Direito</Label>
              <InputNumber
                type="number"
                id="peDireitoGaragem"
                name="peDireitoGaragem"
                value={formData.garagem.peDireitoGaragem || ''}
                onChange={(e) => handleChange(e, 'garagem', 'peDireitoGaragem')}
                />
            </Column>
          </Row>
        </SubSection>
        
        <SubSection title="Acabamentos">
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

      {formData.quartos.map((quarto, index) => (
        <SectionWithHeader key={index} title={`Quarto ${index + 1}`} description={`Informações sobre o quarto ${index + 1}`}>
          <SubSection title="Dimensões">
            <Row>
              <Column>
                <Label htmlFor={`quartoSize${index}`}>Área do Quarto (m²)</Label>
                <InputNumber
                  type="number"
                  id={`quartoSize${index}`}
                  name={`quartoSize${index}`}
                  value={quarto.quartoSize || ''}
                  onChange={(e) => handleSubChange('quartos', index, e, 'quartoSize')}
                />
              </Column>
              <Column>
                <Label htmlFor={`perimetroQuarto${index}`}>Perímetro</Label>
                <InputNumber
                  type="number"
                  id={`perimetroQuarto${index}`}
                  name={`perimetroQuarto${index}`}
                  value={quarto.perimetro || ''}
                  onChange={(e) => handleSubChange('quartos', index, e, 'perimetro')}
                />
              </Column>
              <Column>
                <Label htmlFor={`peDireitoQuarto${index}`}>Pé Direito</Label>
                <InputNumber
                  type="number"
                  id={`peDireitoQuarto${index}`}
                  name={`peDireitoQuarto${index}`}
                  value={quarto.peDireito || ''}
                  onChange={(e) => handleSubChange('quartos', index, e, 'peDireito')}
                />
              </Column>
            </Row>
          </SubSection>

          <SubSection title="Mármores e Granitos">
            <Row>
              <Column>
                <Label htmlFor={`marmores${index}`}>Quantidade de Balcões e Bancadas</Label>
                <InputNumber
                  type="number"
                  id={`marmores${index}`}
                  name={`marmores${index}`}
                  value={quarto.marmores || ''}
                  onChange={(e) => handleSubChange('quartos', index, e, 'marmores')}
                />
              </Column>
            </Row>
          </SubSection>

          <SubSection title="Acabamentos">
            <Row>
              <Column>
                <Label htmlFor={`acabamento${index}`}>Tipo de Acabamento</Label>
                <Select
                  id={`acabamento${index}`}
                  name={`acabamento${index}`}
                  value={quarto.acabamento || ''}
                  onChange={(e) => handleSubChange('quartos', index, e, 'acabamento')}
                >
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
                      name={`conforto${index}`}
                      checked={quarto.conforto || false}
                      onChange={(e) => handleSubChange('quartos', index, e, 'conforto')}
                    />
                    <SwitchSlider checked={quarto.conforto || false} />
                  </SwitchLabel>
                </SwitchContainer>
              </Column>
            </Row>
          </SubSection>
        </SectionWithHeader>
      ))}

      <button type="button" onClick={() => addSubItem('quartos')}>Adicionar Quarto</button>

      {/* Seções para outros cômodos */}
      
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
              <Label htmlFor="portasMadeiraCozinha">Quantidade de Portas de Madeiras até 0,9 m de largura</Label>
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
              <Label htmlFor="portasMadeiraGourmet">Quantidade de Portas de Madeiras até 0,9 m de largura</Label>
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
              <Label htmlFor="portasMadeiraServico">Quantidade de Portas de Madeiras até 0,9 m de largura</Label>
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
              <Label htmlFor="portasMadeiraDespensa">Quantidade de Portas de Madeiras até 0,9 m de largura</Label>
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

      <SectionWithHeader title="Escritório" description="Informações sobre o escritório">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaEscritorio">Área do Escritório (m²)</Label>
              <InputNumber
                type="number"
                id="areaEscritorio"
                name="areaEscritorio"
                value={formData.escritorio.areaEscritorio || ''}
                onChange={(e) => handleChange(e, 'escritorio', 'areaEscritorio')}
              />
            </Column>
            <Column>
              <Label htmlFor="perimetroEscritorio">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroEscritorio"
                name="perimetroEscritorio"
                value={formData.escritorio.perimetroEscritorio || ''}
                onChange={(e) => handleChange(e, 'escritorio', 'perimetroEscritorio')}
              />
            </Column>
            <Column>
              <Label htmlFor="peDireitoEscritorio">Pé Direito</Label>
              <InputNumber
                type="number"
                id="peDireitoEscritorio"
                name="peDireitoEscritorio"
                value={formData.escritorio.peDireitoEscritorio || ''}
                onChange={(e) => handleChange(e, 'escritorio', 'peDireitoEscritorio')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Esquadrias de Madeira, Vidro e Alumínio">
          <Row>
            <Column>
              <Label htmlFor="portasMadeiraEscritorio">Quantidade de Portas de Madeiras até 0,9 m de largura</Label>
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


      <SectionWithHeader title="Paredes Externas" description="Informações sobre as paredes externas">
        <SubSection title="Metragem de Paredes Externas">
          <Row>
            <Column>
              <Label htmlFor="metragemParedesExternas">Somatória total de m² de parede externa</Label>
              <InputNumber
                type="number"
                id="metragemParedesExternas"
                name="metragemParedesExternas"
                value={formData.paredesExternas.metragemParedesExternas || ''}
                onChange={(e) => handleChange(e, 'paredesExternas', 'metragemParedesExternas')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Padrão das Paredes Externas">
          <Row>
            <Column>
              <Label htmlFor="padraoParedesExternas">Qual o padrão das paredes externas?</Label>
              <Select
                id="padraoParedesExternas"
                name="padraoParedesExternas"
                value={formData.paredesExternas.padraoParedesExternas || ''}
                onChange={(e) => handleChange(e, 'paredesExternas', 'padraoParedesExternas')}
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
              </Select>
            </Column>
          </Row>
        </SubSection>
      </SectionWithHeader>

      <SectionWithHeader title="Hall de Entrada" description="Informações sobre o hall de entrada">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaHallEntrada">Área do Hall de Entrada (m²)</Label>
              <InputNumber
                type="number"
                id="areaHallEntrada"
                name="areaHallEntrada"
                value={formData.hallEntrada.areaHallEntrada || ''}
                onChange={(e) => handleChange(e, 'hallEntrada', 'areaHallEntrada')}
              />
            </Column>
          </Row>
        </SubSection>
      </SectionWithHeader>

      <SectionWithHeader title="Sala de Jantar" description="Informações sobre a sala de jantar">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaSalaJantar">Área da Sala de Jantar (m²)</Label>
              <InputNumber
                type="number"
                id="areaSalaJantar"
                name="areaSalaJantar"
                value={formData.salaJantar.areaSalaJantar || ''}
                onChange={(e) => handleChange(e, 'salaJantar', 'areaSalaJantar')}
              />
            </Column>
          </Row>
        </SubSection>
      </SectionWithHeader>

      <SectionWithHeader title="Corredores" description="Informações sobre os corredores">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="areaCorredores">Área dos Corredores (m²)</Label>
              <InputNumber
                type="number"
                id="areaCorredores"
                name="areaCorredores"
                value={formData.corredores.areaCorredores || ''}
                onChange={(e) => handleChange(e, 'corredores', 'areaCorredores')}
              />
            </Column>
          </Row>
        </SubSection>
      </SectionWithHeader>

      <SectionWithHeader title="Pé Direito Duplo" description="Informações sobre o pé direito duplo">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="perimetroPeDireitoDuplo">Perímetro</Label>
              <InputNumber
                type="number"
                id="perimetroPeDireitoDuplo"
                name="perimetroPeDireitoDuplo"
                value={formData.peDireitoDuplo.perimetroPeDireitoDuplo || ''}
                onChange={(e) => handleChange(e, 'peDireitoDuplo', 'perimetroPeDireitoDuplo')}
              />
            </Column>
            <Column>
              <Label htmlFor="alturaPeDireitoDuplo">Altura do Pé Direito Duplo (m)</Label>
              <InputNumber
                type="number"
                id="alturaPeDireitoDuplo"
                name="alturaPeDireitoDuplo"
                value={formData.peDireitoDuplo.alturaPeDireitoDuplo || ''}
                onChange={(e) => handleChange(e, 'peDireitoDuplo', 'alturaPeDireitoDuplo')}
              />
            </Column>
          </Row>
        </SubSection>
      </SectionWithHeader>


      <SubmitButton type="submit">Enviar</SubmitButton>
    </form>
  );
}
