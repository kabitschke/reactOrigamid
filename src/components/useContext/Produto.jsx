import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setContar(global.contar + 1);
  }

  return (
    <div>
      Produto:
      <button onClick={() => global.adicionarUm()}>{global.contar}</button>
    </div>
  );
};

export default Produto;
