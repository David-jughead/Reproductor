import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundMessage from '../components/NotFoundMessage';
import '../assets/styles/Components/NotFound.scss';

const NotFound = () => (
    <React.Fragment>
        <Header />
        <NotFoundMessage />
        <Footer />
    </React.Fragment>
);

export default NotFound;