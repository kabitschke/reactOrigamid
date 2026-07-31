import React from 'react';
import { GlobalContext } from './GlobalContext';

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

export const Exercicio5 = () => {
  const global = React.useContext(GlobalContext);
  //<button onClick={() => global.adicionarUm()}>{global.contar}</button>
  return (
    <div>
      <h3>Dados da API</h3>
    </div>
  );
};
