import react from "react";
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";

function BasicExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
        <Navbar.Brand href="/">KabarKabari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Kategori" id="basic-nav-dropdown">
              <NavDropdown.Item href="Sport">Sport</NavDropdown.Item>
              <NavDropdown.Item href="Food">Food</NavDropdown.Item>
              <NavDropdown.Item href="Health">Health</NavDropdown.Item>
              <NavDropdown.Item href="Entertainment">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="Livestyle">Livestyle</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default BasicExample ;