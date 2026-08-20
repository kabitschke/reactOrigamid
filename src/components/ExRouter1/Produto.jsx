import React from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../Hooks/useFetch';
import styles from './Produto.module.css';

const Produto = () => {
  const [loading, setLoading] = React.useState(false);
  const [produto, setProduto] = React.useState(null);

   const params = useParams();


   React.useEffect(()=> {
    handleProduto()
     
  },[]);
  
  const handleProduto = async () => {
     setLoading(true);
     const data = await getProduct(params.id);
     setProduto(data);
     setLoading(false);
 }

   
  return(
    <div>
      {
        loading ?? <p>Carregando...</p>
      }
      {
          produto ? (
              <div>
                  <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                  <div className={styles.title}>{produto.nome}</div>
                  <div>{produto.preco}</div>
              </div>

          ) : null

      }

    </div>
  )
}

export default Produto;