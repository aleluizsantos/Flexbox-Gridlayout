import React from 'react';
import './App.css';

import react1 from './assets/react1.png';
import react2 from './assets/react2.png';
import react3 from './assets/react3.png';
import react4 from './assets/react4.png';
import react5 from './assets/react5.png';
import logoReact from './assets/logoReact.png';

function App() {
  return (
    <div>
      <header className="header">
        <a href="/">
          <img className="logoReact" src={logoReact} alt="logoReact"/>
        </a>
        <nav>
          <ul className="menu">
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Produto</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
        </nav>
      </header>

      <h1>Section Flexbox</h1>
      <section className="flex">
        <div>
          <img src={react1} alt="imageReact"/>
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react2} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react3} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react4} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react5} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react1} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
      </section>
    
      <h1>Section Grid1 Layout</h1>
      <section className="grid1">
        <div>
          <img src={react1} alt="imageReact"/>
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react2} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react3} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react4} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react5} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react1} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react2} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react3} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={react4} alt="imageReact"/>  
          <p>Legenda</p>  
        </div>
        <div className="anuncio">
          <img src={react1} alt="imageReact"/>  
          <p>Anúncio</p>  
        </div>
      </section>
    
      <h1>Section Grid2 Layout</h1>
      <section className="grid2">
        <div className="video">
          <img src={react1} alt="imageReact" />
          <h2>Como Criar sites</h2>
        </div>
        <div className="sidebar">
          <div>
            <img src={react2} alt="imageReact" />
            <p>Legenda</p>
          </div>
          <div>
            <img src={react3} alt="imageReact" />
            <p>Legenda</p>
          </div>
          <div>
            <img src={react4} alt="imageReact" />
            <p>Legenda</p>
          </div>
          <div>
            <img src={react5} alt="imageReact" />
            <p>Legenda</p>
          </div>
        </div>
      </section>
    
      <h1>Section Grid3 Layout</h1>
      <section className="grid3">
        <div className="grid3-item">
          <img src={react4} alt="imageReact" />
          <p>Legenda</p>
        </div>
        <div className="grid3-item">
          <img src={react1} alt="imageReact" />
          <p>Legenda</p>
        </div>
        <div className="grid3-item">
          <img src={react2} alt="imageReact" />
          <p>Legenda</p>
        </div>
      </section>
    
    </div>
  );
}

export default App;
