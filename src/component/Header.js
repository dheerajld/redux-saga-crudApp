import React, { Component } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavbarItem, MDBIcon } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBasic: false,
        };
        
        this.onClick = this.onClick.bind(this);
    }
  
    onClick() {
        this.setState({
            showBasic: !this.state.showBasic,
        });
    }

    render() {
        return (
            <header>
                <MDBNavbar bgColor="primary"  dark expand="md" scrolling >
                    <MDBContainer>
                        <Link to="/" className="navbar-brand">
                            <strong>Navbar</strong>
                        </Link>
                    
                        <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => this.onClick()}
                            >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>

                        <MDBCollapse navbar show={this.state.showBasic}>
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                                <MDBNavbarItem>
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <Link to="/adduser" className="nav-link">
                                        Add User
                                    </Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
          </header>
        )
    }
}

export default Header