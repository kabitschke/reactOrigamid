import React from 'react';
import Input from './components/CamposForm/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const cpf = useForm('cpf');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && cpf.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

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
