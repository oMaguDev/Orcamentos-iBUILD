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

  return (
    <div>
      <h1>Resumo dos Valores</h1>
      <h2>Garagem</h2>
      <p>Valor: {garagemValue}</p>

      <h2>Sala</h2>
      <p>Valor: {salaValue}</p>

      <h2>Quarto</h2>
      <p>Valor: {quartoValue}</p>

      <h2>Valor Total</h2>
      <p>Valor: {totalValue}</p>
    </div>
  );
};

export default Resumo;
