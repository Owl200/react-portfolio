import './App.css';
import { motion } from 'framer-motion';
import Skills from './components/Skills';
import Title from './components/Title';
import Menu from './components/Menu'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <motion.header className="App-header" initial={{y: -150, opacity: 0}} animate={{y: 0, opacity: 1}}>
        <Title/>
        <Skills/>
      </motion.header>
      <div class="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <About/>
      <nav>
        <Menu/>
      </nav>

    </div>
  );
}

export default App;
