import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoivesGrid from './components/MoviesGrid';

function App() {
  return (
    <div className="App">

      <div className='container'>
        <Header></Header>
        <MoivesGrid></MoivesGrid>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
