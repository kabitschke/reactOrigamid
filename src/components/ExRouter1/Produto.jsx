import React from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../Hooks/useFetch';
import styles from './Produto.module.css';
import Head from './Head';

const Produto = () => {
  const [loading, setLoading] = React.useState(false);
  const [produto, setProduto] = React.useState(null);

  const params = useParams();


  React.useEffect(() => {
    handleProduto()

  }, []);

  const handleProduto = async () => {
    if (params.id) {
      setLoading(true);
      const data = await getProduct(params.id);
      setProduto(data);
    }
    setLoading(false);
  }


  return (
    <div>
      <Head title={`Produto | ${produto ? produto.nome : null}`} description='Os melhores eletronicos você só encontra aqui.' />
      {
        loading ? <div className={styles.loader}></div > : null
      }
      {
        produto ? (
          <div className={styles.produto}>


            {
              produto.fotos.map((item) => (
                <div key={item.src} className={styles.imgProduct}>
                  <img src={item.src} alt={item.titulo} />
                </div>
              ))
            }


            <div className={styles.description}>
              <div className={styles.title}>{produto.nome}</div>
              <div className={styles.preco}>R$ {produto.preco}</div>
              <p>{produto.descricao}</p>
            </div>

          </div>

        ) : null

      }

    </div>
  )
}

export default Produto;