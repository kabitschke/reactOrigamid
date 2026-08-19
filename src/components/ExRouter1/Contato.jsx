import styles from './Contato.module.css';
import Head from './Head';
import foto from './img/contato.jpg';
const Contato = () => {
    return (
        <section className={`${styles.contato} animeLeft`}>
            <Head title='Ranek | Contato' description='Entre em contato' />
            <img src={foto} alt="Máquina de escrever" />
            <div>
                <h1>Entre em Contato</h1>
                <ul className={styles.dados}>
                    <li>mayconkabitschke@gmail.com</li>
                    <li>9999-9999</li>
                    <li>Rua Logo Ali, 00</li>
                </ul>

            </div>

        </section>
    )
}

export default Contato;