import './App.css';
import Favourite from './components/Favourite';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Favourite/>
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;
