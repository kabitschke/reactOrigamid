import React from "react";
import { getProduct, getProductAll } from "../../Hooks/useFetch";
import styles from './Produtos.module.css';
import { Link, useParams } from "react-router-dom";


// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Produto = () => {
    const [produtos, setProdutos] = React.useState(null);
    

    React.useEffect(() => {
        Produtos();

    }, []);

    const Produtos = async () => {
        const data = await getProductAll();
        setProdutos(data);
    };

    return (
        <div className={styles.container}>      

                    <div className={`${styles.grid} animeLeft`}>
                        {produtos && produtos.map((item) => (
                            <Link key={item.id} className={styles.item} to={`produto/${item.id}`}>
                                <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
                                <div className={styles.title}>{item.nome}</div>
                            </Link>
                        ))}
                    </div>
                    
        </div>
    );
}

export default Produto;