import { getProduct } from '../Hooks/useFavorites';
import React from 'react';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

export const Button1 = () => {
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleClick = async (produto) => {
    setLoading(true);
    const data = await getProduct(produto);
    setResult(data);
    setLoading(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={() => handleClick('notebook')}>notebook</button>
        <button onClick={() => handleClick('smartphone')}>smartphone</button>
        <button onClick={() => handleClick('tablet')}>tablet</button>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : result ? (
        <div>
          <h2>{result.nome}</h2>
          <p>{result.preco}</p>
          {/* {result.fotos.map((item) => (
            <img key={item.titulo} src={item.src} alt={item.titulo} />
          ))} */}
          <img src={result.fotos[0].src} alt={result.fotos[0].titulo} />

          <p>{result.descricao}</p>
          <p>{result.vendido ? 'À Venda' : 'Vendido'}</p>
        </div>
      ) : null}
    </div>
  );
};
