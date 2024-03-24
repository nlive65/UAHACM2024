import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from './Login';
import Home from './Home';
import VideoDetector from './imageIF';
import Flower from './Flower';

export default class NavBarComp extends Component {
    render(){
        return (
          <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Green Lens</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/Flower">Flower</Nav.Link>
                        <Nav.Link as={Link} to="/videoDetector">Recyclable</Nav.Link>
                    </Nav>
                    <Form inline>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>   
                <Route path="/flower" element={<Flower/>}/>     
                <Route path='/VideoDetector' element={<VideoDetector/>}/>
              </Routes>
            </div>
        </Router>
        )
    }
}

function App() {
  return (
    <div className="App">
      <NavBarComp/>
    </div>
  );
}