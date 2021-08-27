import React from 'react';
import '../src/global.scss'
import '../src/styles/style.scss'
import logotipo from '../src/img/logotipo.png'
function App() {
  return (
    <div>
      <div className="container">
        <main>
          <img src={logotipo} alt="logotipo" />
          <h2>Em Breve... <br />Site em construção</h2>
        </main>
        <div className="social-icons">
          <h4>Clique para acessar</h4>
          <a href="https://www.facebook.com/casanovajardimdaspedras"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/acasanovapizzaria/"><i className="fab fa-instagram"></i></a>
          <a href="wa.me/5511996591281"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.google.com/maps/place/Pizzaria+Casa+Nova+Jd.+das+Pedras/@-23.7783968,-46.6839683,15z/data=!4m2!3m1!1s0x0:0x97389a144f77bb3c?sa=X&ved=2ahUKEwjL7Im1ktLyAhXmrJUCHeAzBMIQ_BJ6BQiEARAF"><i className="fas fa-map-marked-alt"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
