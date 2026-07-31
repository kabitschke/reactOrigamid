import React from 'react';

import { Exercicio5 } from './components/Exercicio5';
import { GlobalStorage } from './components/GlobalContext';

const App = () => {
  return (
    <div>
      <GlobalStorage>
        <Exercicio5 />
      </GlobalStorage>
    </div>
  );
};

export default App;
