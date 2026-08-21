import styles from './Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footer}>
            &copy; Copyright 2025-{new Date().getFullYear()} Todos os direitos reservados
        </div>
    )
}

export default Footer;