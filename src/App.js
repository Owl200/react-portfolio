import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Title from './components/Title';
import Menu from './components/Menu'
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [section, setSection] = useState('about');

  return (
    <div className="App">
      <motion.header className="App-header" initial={{y: -150, opacity: 0}} animate={{y: 0, opacity: 1}}>
        <Title/>
        {/* <Skills/> */}
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
      <section className='main-section'>
        {section === 'about' && <About/>}
        {section === 'projects' && <Projects/>}
        {section === 'contact' && <Contact/>}
      </section>
      <nav>
        <Menu section={setSection} />
      </nav>

    </div>
  );
}

export default App;
