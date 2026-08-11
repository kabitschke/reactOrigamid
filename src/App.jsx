import React from 'react';
import Input from './components/CamposForm/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const cpf = useForm('cpf');
  const [resposta, setResposta] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && cpf.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }




  const numberInit = [2, 0, 0, 1, 3, 3, 4, 3, 7, 0, 0];
  //valor digitado pelo usuário

  const novoArray = numberInit.slice(0, -2);
  //remove os dois últimos 






  //O array init tem que ser igual ao array passado na função
  //A função testa os dois últimos digitos do cpf se no final o
  //  array der igual o cpf informado é valido

  const validateCpf = (number) => {
    /**** Primeira Etapa ************/

    const res = [];



    for (let i = 10; i >= 2; i--) {
      const index = 10 - i;
      res.push(number[index] * i);
    }

    const total = res.reduce((acc, item) => {
      return acc + item;
    }, 0);

    const resto = total % 11;
    let digCheck = 11 - resto;
    digCheck > 9 ? digCheck = 0 : digCheck;
    number.push(digCheck);


    /**** Segunda Etapa ************/
    const res2 = [];

    for (let i = 11; i >= 2; i--) {
      const index = 11 - i;
      res2.push(number[index] * i);
    }

    const total2 = res2.reduce((acc, item) => {
      return acc + item;
    }, 0);

    const resto2 = total2 % 11;
    let digCheck2 = 11 - resto2;
    digCheck2 > 9 ? digCheck2 = 0 : digCheck2;

    number.push(digCheck2);


    const iguais = number.length === numberInit.length && number.every(
      (item, index) => item === numberInit[index]
    );

    return iguais;

  }

  console.log(validateCpf(novoArray));








  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />

      <Input
        label="Email"
        id="email"
        type="text"
        placeholder="fulano@gmail.com"
        {...email}
      />

      <Input
        label="CPF"
        id="cpf"
        type="text"
        placeholder="123.456.789-10"
        {...cpf}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
