import { useState } from 'react';

export default function Cafe() {
  const [preco, setPreco] = useState(5);

  function aumentar() {
    setPreco(preco + 1);
  }

  function reduzir() {
    setPreco(preco - 1);
  }

  return (
    <div className="container">
      <div className="titulo">
        <h2>Café Expresso ☕</h2>
        <p>Preço: R$ {preco}</p>
      </div>
      <div className="botoes">
        <button onClick={aumentar}>Aumentar preço</button>
        <button onClick={reduzir}>Reduzir preço</button>
      </div>
    </div>
  );
}