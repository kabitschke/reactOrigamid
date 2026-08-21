import React from 'react';
import styles from './Start.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Produtos';
import Produto from './Produto';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import Contato from './Contato';

const Start = () => {

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <div className={styles.content}>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Produtos />} />
                        <Route path='produto/:id' element={<Produto />} />
                        <Route path='contato' element={<Contato />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Start;