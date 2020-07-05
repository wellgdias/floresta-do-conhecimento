import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Container from '../Container';
import Topbar from '../Topbar';
import Routes from '../../routes';
import Footer from '../Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Topbar />
        <Routes />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
