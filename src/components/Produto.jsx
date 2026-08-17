import React from "react";
import { getProductAll } from "../Hooks/useFetch";
import styles from './Produto.module.css';


// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Produto = () => {

    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        Produtos();

    }, []);

    const Produtos = async () => {
        setLoading(true);
        const data = await getProductAll();
        setProduto(data);
        setLoading(false);
    };



    return (
        <div className={styles.container}>
            <h1>Produtos</h1>
            <div className={styles.grid}>
                {produto && produto.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />
                        <div className={styles.title}>{item.nome}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Produto;