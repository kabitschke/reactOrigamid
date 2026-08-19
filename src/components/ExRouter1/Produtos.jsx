import React from "react";
import { getProduct, getProductAll } from "../../Hooks/useFetch";
import styles from './Produtos.module.css';
import { useParams } from "react-router-dom";


// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Produto = () => {

    const params = useParams();



    const [produtos, setProdutos] = React.useState(null);
    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        Produtos();

    }, []);

    const Produtos = async () => {
        const data = await getProductAll();
        setProdutos(data);
    };

    const handleClick = async (id) => {
        setLoading(true);
        const data = await getProduct(id);
        setProduto(data);
        setLoading(false);
    }


    return (
        <div className={styles.container}>
            {
                produto ? (
                    <div>
                        <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                        <div className={styles.title}>{produto.nome}</div>
                        <div>{produto.preco}</div>
                    </div>

                ) : (

                    <div className={styles.grid}>
                        {produtos && produtos.map((item) => (
                            <div key={item.id} className={styles.item} onClick={() => handleClick(item.id)}>
                                <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
                                <div className={styles.title}>{item.nome}</div>
                            </div>
                        ))}
                    </div>
                )
            }




        </div>
    );
}

export default Produto;