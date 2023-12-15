import './App.css'

import NavBar from "./components/NavBar";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Habilidades from "./components/Habilidades";
import Contato from "./components/Contato";

function App() {

  return (
    <main className="text-slate-500 bg-gray-800 body-font">
      <NavBar />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Contato />
    </main>
  )
}

export default App
