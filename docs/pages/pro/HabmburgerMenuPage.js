import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBHamburgerToggler
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class HabmburgerMenuPage extends Component {
  state = {
    collapse0: false,
    collapse1: false,
    collapse2: true,
    collapse3: false,
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  toggleSingleCollapse = collapseId => () => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };

  render() {
    const { collapse1, collapse2, collapse3, collapseID } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Hamburger Menu'
          href='https://mdbootstrap.com/docs/react/navigation/navbar/'
        />
        <Router>
          <SectionContainer header='Basic example'>
            <MDBNavbar
              color='light-blue lighten-4'
              style={{ marginTop: '20px' }}
              light
            >
              <MDBContainer>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse('navbarCollapse0')}
                />
                <MDBCollapse id='navbarCollapse0' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </SectionContainer>

          <SectionContainer header='Icon animations'>
            <MDBNavbar
              color='amber lighten-4'
              style={{ marginTop: '20px' }}
              light
            >
              <MDBContainer>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBHamburgerToggler
                  color='#d3531a'
                  id='hamburger1'
                  onClick={this.toggleSingleCollapse('collapse1')}
                />
                <MDBCollapse isOpen={collapse1} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar color='bg-danger' style={{ marginTop: '20px' }} dark>
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBHamburgerToggler
                  onClick={this.toggleSingleCollapse('collapse2')}
                  isOpen
                  id='hamburger2'
                />
                <MDBCollapse isOpen={collapse2} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar
              color='indigo darken-2'
              style={{ marginTop: '20px' }}
              dark
            >
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBHamburgerToggler
                  onClick={this.toggleSingleCollapse('collapse3')}
                  id='hamburger3'
                />
                <MDBCollapse isOpen={collapse3} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </SectionContainer>

          <SectionContainer header='Menu icons'>
            <MDBNavbar style={{ marginTop: '20px' }} light>
              <MDBContainer>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger6.svg?color=000'
                  onClick={this.toggleCollapse('navbarCollapse1')}
                />
                <MDBCollapse id='navbarCollapse1' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar color='bg-primary' style={{ marginTop: '20px' }} dark>
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse('navbarCollapse2')}
                />
                <MDBCollapse id='navbarCollapse2' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar
              color='light-blue lighten-4'
              style={{ marginTop: '20px' }}
            >
              <MDBContainer>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger2.svg?color=fff'
                  onClick={this.toggleCollapse('navbarCollapse3')}
                />
                <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar
              color='pink lighten-4'
              style={{ marginTop: '20px' }}
              dark
            >
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger1.svg?color=6a1b9a'
                  onClick={this.toggleCollapse('navbarCollapse5')}
                />
                <MDBCollapse id='navbarCollapse5' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar
              color='pink lighten-2'
              style={{ marginTop: '20px' }}
              dark
            >
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger7.svg?color=BFE100'
                  onClick={this.toggleCollapse('navbarCollapse6')}
                />
                <MDBCollapse id='navbarCollapse6' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar
              color='bg-secondary mb-4'
              style={{ marginTop: '20px' }}
              dark
            >
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger5.svg?color=f3e5f5'
                  onClick={this.toggleCollapse('navbarCollapse7')}
                />
                <MDBCollapse id='navbarCollapse7' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar color='bg-success' style={{ marginTop: '20px' }} dark>
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger8.svg?color=E3005C'
                  onClick={this.toggleCollapse('navbarCollapse8')}
                />
                <MDBCollapse id='navbarCollapse8' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar color='bg-info' style={{ marginTop: '20px' }} dark>
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger9.svg?color=FF2C00'
                  onClick={this.toggleCollapse('navbarCollapse9')}
                />
                <MDBCollapse id='navbarCollapse9' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar color='bg-warning ' style={{ marginTop: '20px' }} dark>
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger4.svg?color=1729B0'
                  onClick={this.toggleCollapse('navbarCollapse10')}
                />
                <MDBCollapse id='navbarCollapse10' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar color='bg-danger' style={{ marginTop: '20px' }} dark>
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  image='https://mdbootstrap.com/img/svg/hamburger3.svg?color=00FBD8'
                  onClick={this.toggleCollapse('navbarCollapse11')}
                />
                <MDBCollapse id='navbarCollapse11' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </SectionContainer>

          <SectionContainer header='Icon with background'>
            <MDBNavbar
              color='orange lighten-4'
              style={{ marginTop: '20px' }}
              light
            >
              <MDBContainer>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  tag='button'
                  className='peach-gradient'
                  onClick={this.toggleCollapse('navbarCollapse12')}
                >
                  <span className='white-text'>
                    <MDBIcon icon='bars' />
                  </span>
                </MDBNavbarToggler>
                <MDBCollapse id='navbarCollapse12' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar
              color='green lighten-4'
              style={{ marginTop: '20px' }}
              light
            >
              <MDBContainer>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  tag='button'
                  className='aqua-gradient'
                  onClick={this.toggleCollapse('navbarCollapse13')}
                >
                  <span className='white-text'>
                    <MDBIcon icon='bars' />
                  </span>
                </MDBNavbarToggler>
                <MDBCollapse id='navbarCollapse13' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar
              color='purple lighten-4'
              style={{ marginTop: '20px' }}
              light
            >
              <MDBContainer>
                <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  tag='button'
                  className='purple-gradient'
                  onClick={this.toggleCollapse('navbarCollapse14')}
                >
                  <span className='white-text'>
                    <MDBIcon icon='bars' />
                  </span>
                </MDBNavbarToggler>
                <MDBCollapse id='navbarCollapse14' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBNavbar color='bg-primary' style={{ marginTop: '20px' }} dark>
              <MDBContainer>
                <MDBNavbarBrand className='white-text'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                  tag='button'
                  className='blue-gradient'
                  onClick={this.toggleCollapse('navbarCollapse15')}
                >
                  <span className='white-text'>
                    <MDBIcon icon='bars' />
                  </span>
                </MDBNavbarToggler>
                <MDBCollapse id='navbarCollapse15' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBLink to='#!'>Home</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Link</MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#!'>Profile</MDBLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </SectionContainer>
        </Router>
      </MDBContainer>
    );
  }
}

export default HabmburgerMenuPage;
