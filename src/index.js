import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import NavMiddle from './components/layout/NavMiddle';
import NavMiddleMenu from './components/itens/NavMiddleMenu';
import NavTop from './components/layout/NavTop';

import './index.css';

ReactDOM.render(
  <Fragment>

    <NavTop/>
    <Header/>
    <NavMiddle/>
    <NavMiddleMenu/>
    <Main/>
    <Footer/>

  </Fragment>,
  document.getElementById('root')
);
