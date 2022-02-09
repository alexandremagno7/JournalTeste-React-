import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import NavMiddle from './components/layout/NavMiddle';
import NavTop from './components/layout/NavTop';

import './index.css';

ReactDOM.render(
  <Fragment>

    <NavTop/>
    <Header/>
    <NavMiddle/>
    <Main/>

  </Fragment>,
  document.getElementById('root')
);
