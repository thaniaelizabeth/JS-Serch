
import './App.css'
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';
import { Navbar } from './components/navbar/Navbar';

function App() {
  
  return (
    <>
      <Navbar src="/img/dinosaurio.jpg" alt="Dino programador" />

      <Main/>

      <Footer year="2025" cohorte={50} inLove={false}></Footer> {/* Entre llaves se ponen numeros como valor para un atributo */}
    </>
  )
}

export default App;
