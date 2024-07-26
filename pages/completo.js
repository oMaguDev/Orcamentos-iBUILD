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
    garagemType: "",
    garagemConforto: false,
    garagemAcabamento: "standard",
  },
  sala: {
    salaSize: "",
    salaFloorType: "",
    salaConforto: false,
    salaAcabamento: "standard",
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
        
        <SubSection title="Obra Branca">
          <Row>
            <Column>
              <Label htmlFor="garagemType">Tipo de Garagem</Label>
              <Select
                id="garagemType"
                name="garagemType"
                value={formData.garagem.garagemType || ''}
                onChange={(e) => handleChange(e, 'garagem', 'garagemType')}
              >
                <option value="">Selecione um tipo</option>
                <option value="single">Simples</option>
                <option value="double">Dupla</option>
              </Select>
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Acabamentos">
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
            <Column>
              <Label htmlFor="garagemAcabamento">Tipo de Acabamento</Label>
              <Select
                id="garagemAcabamento"
                name="garagemAcabamento"
                value={formData.garagem.garagemAcabamento || ''}
                onChange={(e) => handleChange(e, 'garagem', 'garagemAcabamento')}
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="supreme">Supreme</option>
              </Select>
            </Column>
          </Row>
        </SubSection>
      </SectionWithHeader>

      <SectionWithHeader title="Sala" description="Informações sobre a sala">
        <SubSection title="Dimensões">
          <Row>
            <Column>
              <Label htmlFor="salaSize">Tamanho da Sala (m²)</Label>
              <InputNumber
                type="number"
                id="salaSize"
                name="salaSize"
                value={formData.sala.salaSize || ''}
                onChange={(e) => handleChange(e, 'sala', 'salaSize')}
              />
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Obra Branca">
          <Row>
            <Column>
              <Label htmlFor="salaFloorType">Tipo de Piso</Label>
              <Select
                id="salaFloorType"
                name="salaFloorType"
                value={formData.sala.salaFloorType || ''}
                onChange={(e) => handleChange(e, 'sala', 'salaFloorType')}
              >
                <option value="">Selecione um tipo</option>
                <option value="wood">Madeira</option>
                <option value="tile">Cerâmica</option>
              </Select>
            </Column>
          </Row>
        </SubSection>

        <SubSection title="Acabamentos">
          <Row>
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
              </Select>
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

      <SubmitButton type="submit">Enviar</SubmitButton>
    </form>
  );
}
