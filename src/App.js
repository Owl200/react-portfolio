import './App.css';
import Skills from './components/Skills';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Skills/>
      </header>
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

    </div>
  );
}

export default App;
