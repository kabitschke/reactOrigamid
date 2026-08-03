import React from 'react';
import { getProductAll } from '../../Hooks/useFavorites';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [result, setResult] = React.useState(null);

  function limparDados() {
    setResult(null);
  }

  React.useEffect(() => {
    const loadData = async () => {
      const dados = await getProductAll();
      setResult(dados);
    };
    loadData();
  }, []);

  return (
    <GlobalContext.Provider value={{ result, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
