import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/home/Navbar';
import Header from './components/home/Header';
import Content from './components/home/Content';
import Content2 from './components/home/Content2';
import Footer from './components/Kelompok Tani/Footer';

function App() {
  return (
    <div className="App">
    <Nav />
    <Header />
    <br></br>
    <p className='color fs-4 fw-bold text-center'>Tanpa Petani Kita Tidak Bisa Makan Nasi dan Sayur</p>
    <Content />
    <Content2 />
    <Footer />
    </div>
  );
}

export default App;