const numberInit = [2, 0, 0, 1, 3, 3, 4, 3, 7, 7, 8];
  //valor digitado pelo usuário

  const novoArray = numberInit.slice(0, -2);
  //remove os dois últimos 
  //Passe o novo Array na função validateCPF já sem os dois últimos dígitos para verificação
  //A função testa os dois últimos dígitos do cpf se no final os dois últimos dígitos forem iguais ao cpf informado 
  // é um cpf valido

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