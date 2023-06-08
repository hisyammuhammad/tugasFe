//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Kelompok Tani/Navbar';
import Header from './components/halaman2/Header';
import Content from './components/halaman2/Content';
import Footer from './components/Kelompok Tani/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="container mt-4 d-flex justify-content-between">
      <Content />
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export default App;