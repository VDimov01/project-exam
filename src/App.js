import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Slider} from './components/Slider'
import {About} from './components/About'
import {Portfolio} from './components/Portfolio'
import {Achieve} from './components/Achieve'
import {Client} from './components/Client'
import {Contact} from './components/Contact'
import {Info} from './components/Info'


function App() {
  return (
    <div className="App">
      <Header />

      <Slider />

      <Portfolio />

      <Client />

      <Achieve />

      <About />

      <Contact />

      <Info />

      <Footer />
    </div>
  );
}

export default App;
