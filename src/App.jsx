// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const frutas = ['Pêssego', 'Jabuticaba','Laranja', 'Maçã', 'Damasco', 'Goiaba', 'Banana', 'Uva', 'Ameixa'];

const App = () => {
  const dados = luana;

  const total = dados.compras.reduce((acc, item)=> {   
          const precoNumero = Number(item.preco.replace(/\D/g, ''));      
          return acc + precoNumero;
                },0);

  return (
    <div>
      <h1>Exercício</h1>

      <div>Nome: {dados.cliente}</div>
      <div>Idade: {dados.idade}</div>
      <div>
        Situação: <span style={dados.ativa ? {color: 'green'} : {color: 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
      </div>   
    <div>
      Total gasto: R$ {total} {total > 10000 ? 'Execedeu o teto de gastos' : ''}   
    </div>  


    </div>
  );

};

export default App;
