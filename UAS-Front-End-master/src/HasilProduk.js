import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Hasil Produk/Navbar';
import Header from './components/Hasil Produk/Header';
import Content from './components/Hasil Produk/Content';
import Footer from './components/Hasil Produk/Footer';

function App() {
  return (
    <div className="App">
    <Nav />
    <Header />
    <br></br>
    <p className='color fs-4 fw-bold text-center'>Hasil Panen yang Paling Sering di Wilayah Madiun</p>
    <Content />
    <Footer />
    </div>
  );
}

export default App;