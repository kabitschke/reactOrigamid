import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex: /^(([^<>()[]\\.,;:\s@"]+(.[^<>()[]\\.,;:\s@"]+)\*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  cpf: {
    regex: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
    message: 'Cpf inválido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  //validação de cpf https://souforce.cloud/regra-de-validacao-para-cpf-e-cnpj-no-salesforce/
  const digits =
    type === 'cpf'
      ? value.replace(/\D/g, '').split('').map(Number)
      : [];



function validate(value) {
  if (type === false) return true;

  if (value.length === 0) {
    setError('Preencha um valor');
    return false;
  }

  if (type === 'cpf') {
    const numbers = value
      .replace(/\D/g, '')
      .split('')
      .map(Number);

    if (numbers.length !== 11 || !validateCpf(numbers)) {
      setError('CPF inválido');
      return false;
    }

    setError(null);
    return true;
  }

  if (types[type] && !types[type].regex.test(value)) {
    setError(types[type].message);
    return false;
  }

  setError(null);
  return true;
}

  function onChange({ target }) {
    if (error) validate(target.value);

    setValue(target.value);
  }

  return {
    value,
    setValue,
    digits,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;

 const validateCpf = (number) => {
  const cpf = [...number];

  // Os dois últimos números são os dígitos informados
  const digit1 = cpf[9];
  const digit2 = cpf[10];

  // Trabalhamos somente com os 9 primeiros
  const base = cpf.slice(0, 9);

  // Primeiro dígito
  let total = 0;

  for (let i = 10; i >= 2; i--) {
    const index = 10 - i;

    total += base[index] * i;
  }

  const resto = total % 11;
  const check1 = resto < 2 ? 0 : 11 - resto;

  // Segundo dígito
  const base2 = [...base, check1];

  let total2 = 0;

  for (let i = 11; i >= 2; i--) {
    const index = 11 - i;

    total2 += base2[index] * i;
  }

  const resto2 = total2 % 11;
  const check2 = resto2 < 2 ? 0 : 11 - resto2;

  return digit1 === check1 && digit2 === check2;
};