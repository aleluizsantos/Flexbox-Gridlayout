import React from 'react';
import './App.css';

import lobo1 from './assets/lobo1.jpg';
import lobo2 from './assets/lobo2.jpg';
import lobo3 from './assets/lobo3.jpg';
import lobo4 from './assets/lobo4.jpg';

function App() {
  return (
    <div>
      <header className="header">
        <a href="">Logo</a>
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
          <img src={lobo1}/>
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo2}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo3}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo2}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo1}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo3}/>  
          <p>Legenda</p>  
        </div>
      </section>
    
      <h1>Section Grid1 Layout</h1>
      <section className="grid1">
        <div>
          <img src={lobo1}/>
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo2}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo3}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo2}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo1}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo3}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo2}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo1}/>  
          <p>Legenda</p>  
        </div>
        <div>
          <img src={lobo3}/>  
          <p>Legenda</p>  
        </div>
        <div className="anuncio">
          <img src={lobo1}/>  
          <p>Anúncio</p>  
        </div>
      </section>
    
      <h1>Section Grid2 Layout</h1>
      <section className="grid2">
        <div className="video">
          <img src={lobo1} />
          <h2>Como Criar sites</h2>
        </div>
        <div className="sidebar">
          <div>
            <img src={lobo2} />
            <p>Legenda</p>
          </div>
          <div>
            <img src={lobo3} />
            <p>Legenda</p>
          </div>
          <div>
            <img src={lobo1} />
            <p>Legenda</p>
          </div>
          <div>
            <img src={lobo3} />
            <p>Legenda</p>
          </div>
        </div>
      </section>
    
      <h1>Section Grid3 Layout</h1>
      <section className="grid3">
        <div className="grid3-item">
          <img src={lobo4} />
          <p>Legenda</p>
        </div>
        <div className="grid3-item">
          <img src={lobo1} />
          <p>Legenda</p>
        </div>
        <div className="grid3-item">
          <img src={lobo2} />
          <p>Legenda</p>
        </div>
      </section>
    
    </div>
  );
}

export default App;


{/* <div className="container">
      <header>
        <h1>My Website</h1>
        <p>Probably the best website in the world</p>
      </header>
      <main>
        <article>
          <h2>Tile headein</h2>
          <h3>Title description</h3>
          <p>Lorem ipsum dolor</p>
          <p>sunt in cupa qui officia</p>
        </article>
        
      </main>
      <footer>
        <p>Copyright &copy; 2020, Coding Alessandro</p>
      </footer>
    </div> */}