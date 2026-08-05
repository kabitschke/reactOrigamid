import React from 'react';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];


export const CheckBox = () => {

    const [cores, setCores] = React.useState([]);

    function handleChange({ target }) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    }

    function handleChecked(cor) {
        //console.log(cor);
        return cores.includes(cor);
    }


    return (

        <form>
            {
                coresArray.map((item, i) => (
                    <label key={item}>
                        <input
                            type="checkbox"
                            value={item}
                            //checked={handleChecked(item)}
                            onChange={handleChange}
                        />
                        {item}
                    </label>

                ))
            }
            <ul>
                {cores.map((cor) => (
                    <li key={cor}>{cor}</li>
                ))}
            </ul>
        </form>
    );
}