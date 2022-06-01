import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import '../CSS/navbar.css'
import Githubicon from '../CSS/icons/github-icon.png'
import Linkedinicon from '../CSS/icons/linkedin-icon.png'
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import Resume from '../CSS/files/Kai-Jenkins-Resume.pdf'

function NavbarComp() {
  return (
    <div>
      <BrowserRouter>
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
              <Offcanvas.Body >
                  
                  <Link to='#aboutme'>
                    <h1 className='navLinkText'>About Me </h1>
                  </Link>
                  <Link to='#experience'>
                  <h1 className='navLinkText'>Experience </h1>
                  </Link>
                  <Link to='#projects'>
                  <h1 className='navLinkText'>Projects </h1>
                  </Link>
                  <Link to='#skills'>
                  <h1 className='navLinkText'>Skills </h1>
                  </Link>
                  <Link to='#contactme'>
                  <h1 className='navLinkText'>Contact Me </h1>
                  </Link>
                  <a href={Resume} download="Kai-Jenkins-Resume.pdf">
                    <Button variant="info" className="downloadResumeButton">Download Resume</Button>{' '}
                  </a>
                <div className="quickLinksContainer">
                  <a class="navbar-brand" href="https://github.com/KMJENK17" target="_blank" rel="noopener noreferrer">
                    Github
                    <img src={Githubicon} alt="" />            
                  </a>
                  <a class="navbar-brand" href="https://www.linkedin.com/in/kai-jenkins/" target="_blank" rel="noopener noreferrer">                Linkedin
                  <img src={Linkedinicon} alt="" />
                  </a>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </BrowserRouter>
    </div>
  );
}

export default NavbarComp;

