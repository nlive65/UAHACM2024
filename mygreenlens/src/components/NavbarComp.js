import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './navbarcolour.css'

import LoginSignup from './LoginSignup/LoginSignup';
import Home from './Home';

import Profile from './Profile/Profile';
import VideoDetector from './imageIF';
import Flower from './Flower'; 

export default class NavBarComp extends Component {
    render(){
        return (
          <Router>
            <div>
                <Navbar className="custom-navbar" expand="lg">
                    <Navbar.Brand href="/" style={{fontWeight: 'bold', paddingLeft: '20px'}}>Green Lens</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"> Separated link </NavDropdown.Item>
                        </NavDropdown>
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
                <Route path="/login" element={<LoginSignup/>}/>
                <Route path="/profile" element={<Profile/>}/>
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