import React from "react";


const App = () => {
  const [ativo, setAtivo] = React.useState(false);






  function handleClick() {
    setAtivo(!ativo);

    console.log(ativo);
  }
  return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>


  return (
    <div>

    </div>

  );
};

export default App;
