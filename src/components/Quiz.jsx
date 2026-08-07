import React from 'react';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

export const Quiz = () => {
  const [count, setCount] = React.useState(0);
  const [resposta, setResposta] = React.useState({});
  const [checado, setChecado] = React.useState(false);
  const [finish, setFinish] = React.useState(false);

  const meuArray = new Array(perguntas.length);






  const nextQuestion = () => {
    // if (count === perguntas.length - 1 && checado) {
    //   setFinish(true);
    // }
    if (checado === false) {
      return
    }



    setTimeout(() => {
      if (count < perguntas.length - 1) {
        setCount(count + 1);
        setChecado(!checado);
      } else {

        setFinish(true);
      }

    }, 1000);


  }

  console.log('fim:', finish, 'chec:', checado, 'count', count, 'res', resposta);
  const handleChange = (e) => {
    setResposta({ ...resposta, [count]: e.target.value, })
    setChecado(e.target.checked);
  }
  return (
    <div>
      {
        !finish &&


        <div>
          <h4>{perguntas[count].pergunta}</h4>
          {perguntas[count].options.map((item) => (
            <div key={item}>
              <label style={{ display: 'flex', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  value={item}
                  checked={resposta[count] === item}
                  onChange={(e) => handleChange(e)}
                  style={{ width: '12px', cursor: 'pointer' }}
                />
                {item}
              </label>
            </div>
          ))}
          <button onClick={() => nextQuestion()}>Próxima</button>

        </div>


      }
      {
        finish &&
        <div>
          <h4>Resultado</h4>


          {
            resposta[1]
          }
          {
            perguntas[1].resposta
          }


        </div>

      }
    </div>
  );
};
