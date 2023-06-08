import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Kelompok Tani/Navbar';
import Header from './components/Kelompok Tani/Header';
import Content from './components/Kelompok Tani/Content';
import Footer from './components/Kelompok Tani/Footer';

function App() {
  return (
    <div className="App">
    <Nav />
    <Header />
    <br></br>
    <p className='color fs-4 fw-bold text-center'>Beberapa Kelompok Tani di Wilayah Madiun</p>
    <Content />
    <Footer />
    </div>
  );
}

export default App;