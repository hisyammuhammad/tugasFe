import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Mitigasi Hama/Navbar';
import Header from './components/Mitigasi Hama/Header';
import Footer from './components/Mitigasi Hama/Footer';
import Content from './components/Mitigasi Hama/Content';

function App() {
  return (
    <div className="App">
    <Nav />
    <Header />
    <p className='color fw-bold text-center fs-3'>Detail Persebaran Pertanian di Madiun</p>
    <Content />
    <Footer />
    </div>
  );
}

export default App;