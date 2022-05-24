import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import '../CSS/navbar.css'

function NavbarComp() {
  return (
    <div>
      {['xl'].map((expand) => (
    <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
      <Container fluid>
      <Navbar.Brand href="/home" className="navbarBrandName">KJ</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="offCanvasTitle">
              KJ
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3">
            <Nav.Link href="/About-Me">About Me</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/Experience">Experience</Nav.Link>
            <Nav.Link href="/Contact-Me">Contact Me</Nav.Link>
            <a href='../src/Kai-Jenkins-Resume.docx.pdf' download="Kai-Jenkins-Resume.pdf">
            <Button variant="info" className="downloadResumeButton">Download Resume</Button>{' '}
            </a>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
    </div>
  );
}

export default NavbarComp;

