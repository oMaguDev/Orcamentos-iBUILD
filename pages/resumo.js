import React from "react";
import { useRouter } from "next/router";
import { calculateRoomValues } from "../utils/calculations";

const Resumo = () => {
  const router = useRouter();
  const formData = JSON.parse(router.query.data || "{}");

  if (!formData) {
    return <div>Loading...</div>;
  }

  const {
    garagemValue,
    salaValue,
    quartoValue,
    totalValue,
  } = calculateRoomValues(formData);

  const renderFormData = (data, sectionName) => (
    <div>
      <h3>{sectionName}</h3>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Resumo dos Valores</h1>

      {renderFormData(formData.garagem, "Garagem")}
      {renderFormData(formData.sala, "Sala")}
      {formData.quartos.map((quarto, index) => renderFormData(quarto, `Quarto ${index + 1}`))}
      {formData.banheiros.map((banheiro, index) => renderFormData(banheiro, `Banheiro ${index + 1}`))}
      {renderFormData(formData.cozinha, "Cozinha")}
      {formData.lavabos.map((lavabo, index) => renderFormData(lavabo, `Lavabo ${index + 1}`))}
      {renderFormData(formData.areaGourmet, "Área Gourmet")}
      {renderFormData(formData.areaServico, "Área de Serviço")}
      {renderFormData(formData.despensa, "Despensa")}
      {renderFormData(formData.escritorio, "Escritório")}
      {renderFormData(formData.estrutura, "Estrutura")}
      {renderFormData(formData.paredesExternas, "Paredes Externas")}
      {renderFormData(formData.cobertura, "Cobertura")}
      {renderFormData(formData.eletrica, "Elétrica")}
      {renderFormData(formData.hidraulica, "Hidráulica")}

      <h2>Valores Calculados</h2>
      <p><strong>Garagem:</strong> {garagemValue}</p>
      <p><strong>Sala:</strong> {salaValue}</p>
      <p><strong>Quarto:</strong> {quartoValue}</p>
      <p><strong>Valor Total:</strong> {totalValue}</p>
    </div>
  );
};

export default Resumo;
