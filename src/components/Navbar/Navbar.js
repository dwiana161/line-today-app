import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button }from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toPath } from "../../utils/helper";
// import { changeTheme } from '../actions/news';

const TopNav = () => {
  const news = useSelector((state) => state.news);
  const routerState = useSelector((state) => state.router);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
        <Navbar.Brand href="#">Line Today</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
              <div className="mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden">
             <ul className={"tab-items"}>
               {news.categoryTab.map((category, i) => {
                 return (
                   <li
                     className={
                       toPath(category.name) === routerState.location.pathname
                       ? "menu-item current"
                       : "menu-item"
                     }
                     key={i}
                     >
                     <Nav.Link 
                        activeClassName="nav-selected" 
                        exact as={NavLink} 
                        to={toPath(category.name)}
                        className={
                          category.highlight === true ? "nav-links hightlight" : "nav-links"
                        }
                        onClick={closeMenu}  
                      >{category.name}</Nav.Link>
                    {/* <Nav.Link activeClassName="active" as={NavLink} to="/bookmark">Bookmarks</Nav.Link> */}
                    </li>
                 )
               })}
             </ul>
           </div>
           
            </Nav>
           
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default TopNav;
