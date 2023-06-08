import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbak =() => {
  return (
    <>
      <Navbar className='navbar position-fixed w-100'>
        <Container>
          <Navbar.Brand className=" text-light fw-bold" href="/">Inpo Tani</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link className="kartu text-light fw-bold" href="/">Beranda</Nav.Link>
            <Nav.Link className="kartu text-light" href="MitigasiHama">Mitigasi Hama</Nav.Link>
            <Nav.Link className="kartu text-light" href="HasilProduk">Hasil Produk</Nav.Link>
            <Nav.Link className="kartu text-light" href="KelompokTani">Berita Tani</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbak;