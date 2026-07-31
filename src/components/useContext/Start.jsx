import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

//Import Start no APP

export const Start = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};
