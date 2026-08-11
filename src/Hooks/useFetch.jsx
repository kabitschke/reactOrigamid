export const getProduct = async (produto) => {
  const res = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
  );

  if (!res.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  return res.json();
};

export const getProductAll = async () => {
  const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/`);

  if (!res.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  return res.json();
};

//Produto = tablet, smartphone e notebook
