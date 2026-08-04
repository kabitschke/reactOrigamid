import React from 'react';
const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },

  {
    id: 'email',
    label: 'Email',
    type: 'text',
  },

  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },

  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },

  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },

  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },

  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },

  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];
export const Formulario = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
        //[field.id]: '' cria chave dinâmica (nome, email, etc) : os dois pontos servem para ligar a chave ao valor que inicialmente será vazio ''
      };
    }, {}),
  );

  //Exemplo chave dinâmica
  const chave = 'cidade';

  const obj = {
    [chave]: 'São Paulo',
  };

  //Aqui o JavaScript entende:
  //“pega o valor da variável campo e usa como nome da chave”
  //{cidade: 'São Paulo'}

  const campo = 'email';

  const teste = {
    [campo]: 'teste@email.com',
  };
  //{email: 'teste@email.com'}

  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    //[id]: value cria chave dinâmica (nome, email, etc) : os dois pontos servem para ligar a chave ao valor que será Value o que foi digitado no campo input
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            style={{ margin: '10px 0' }}
            type={type}
            id={id}
            value={form[id]}
            onChange={handleChange}
          />
        </div>
      ))}
      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
  );
};
