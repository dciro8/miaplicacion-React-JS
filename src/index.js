// import React from 'react'; // importamos react
// import ReactDOM from 'react-dom'; // nos permite renderizar en el DOM
// const HolaMundo = <h1>Hola Mundo</h1>
// //selecionamos el id donde se renderizara el componente
// const root =  document.getElementById('root'); // hay un div con id root en index.html
// ReactDOM.render(HolaMundo, root); // pinta en la pantalla la constante HolaMundo en el div con id root


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();