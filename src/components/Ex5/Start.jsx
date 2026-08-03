import React from 'react';

import { Exercicio5 } from './Exercicio5';
import { GlobalStorage } from './GlobalContext';

export const Start = () => {
    return (
        <div>
            <GlobalStorage>
                <Exercicio5 />
            </GlobalStorage>
        </div>
    );
};


