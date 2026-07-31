import React from 'react';
import { getProduct } from '../Hooks/useFavorites';
export const Product = () => {
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


  //   // Salva um dado no navegador
  // localStorage.setItem("usuario", "João Silva");

  // // Recupera o dado salvo
  // const nome = localStorage.getItem("usuario");
  // console.log(nome); // Saída: João Silva

  // // Remove o item
  // localStorage.removeItem("usuario");

  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [productStorage, setProductStorage] = React.useState(null);



  const handleClick = async (produto) => {
    setLoading(true);
    const data = await getProduct(produto);
    localStorage.setItem('produto', produto);
    setResult(data);
    setLoading(false);
    setProductStorage(produto);
  }


  React.useEffect(() => {
    const stored = localStorage.getItem("produto");
    if (stored) {
      setProductStorage(stored);
      handleClick(productStorage);
    }

  }, [productStorage]);

  // React.useEffect(() => {
  //   localStorage.setItem('produto', JSON.stringify(produto));
  // }, [produto]);

  // React.useEffect(() => {
  //   const stored = localStorage.getItem('produto');
  //   if (stored) {
  //     setProduto(JSON.parse(stored));
  //   }
  // }, []);

  return (
    <div>
      {
        productStorage && <h1>Preferências: {productStorage}</h1>
      }

      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={() => handleClick('notebook')}>notebook</button>
        <button onClick={() => handleClick('smartphone')}>smartphone</button>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : result ? (
        <div>
          <h2>{result.nome}</h2>
          <p>{result.preco}</p>
        </div>
      ) : null}
    </div>
  );
};
