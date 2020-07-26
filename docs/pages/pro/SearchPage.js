import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBContainer,
  MDBFormInline,
  MDBBtn,
  MDBNavbar,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBSelect,
  MDBInputGroup,
  MDBIcon
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class SearchPagePro extends Component {
  state = {
    collapsed: false,
    value: 'Choose your option',
    value2: 'Choose your option',
    options: [
      {
        text: 'Option 1',
        value: '1'
      },
      {
        text: 'Option 2',
        value: '2'
      },
      {
        text: 'Option 3',
        value: '3'
      },
      {
        text: 'Option 4',
        value: '4'
      },
      {
        text: 'Option 5',
        value: '5'
      }
    ]
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  handleNavbarClick = () => {
    this.setState({
      collapsed: false
    });
  };

  getValueOfSelectOne = value => {
    this.setState({ value });
    console.log(value);
  };

  getValueOfSelectTwo = value => {
    this.setState({ value2: value });
    console.log(value);
  };

  render() {
    const { collapsed, options } = this.state;
    return (
      <Router>
        <MDBContainer>
          <DocsLink
            title='Search'
            href='https://mdbootstrap.com/docs/react/forms/search/'
          />

          <SectionContainer header='Basic' flexCenter flexColumn>
            <MDBInputGroup
              hint='Search'
              containerClassName='mb-3'
              append={
                <MDBBtn
                  color='unique'
                  style={{ borderRadius: '10em' }}
                  rounded
                  size='sm'
                  type='submit'
                  className='m-0 mx-1 z-depth-0'
                >
                  Search
                </MDBBtn>
              }
            />

            <MDBInputGroup
              hint='Search'
              containerClassName='mb-3'
              append={
                <MDBBtn
                  color='success'
                  outline
                  style={{ borderRadius: '10em' }}
                  rounded
                  size='sm'
                  type='submit'
                  className='m-0 mx-1 z-depth-0'
                >
                  Search
                </MDBBtn>
              }
            />

            <MDBInputGroup
              hint='Search'
              append={
                <MDBBtn
                  gradient='peach'
                  style={{ borderRadius: '10em' }}
                  rounded
                  size='sm'
                  type='submit'
                  className='m-0 mx-1 z-depth-0'
                >
                  Search
                </MDBBtn>
              }
            />
          </SectionContainer>

          <SectionContainer header='Customization' flexCenter flexColumn>
            <MDBInputGroup
              hint='Search'
              containerClassName='mb-3'
              append={
                <MDBBtn
                  color='unique'
                  rounded
                  size='sm'
                  type='submit'
                  className='m-0 z-depth-0'
                >
                  Search
                </MDBBtn>
              }
            />

            <MDBInputGroup
              hint='Search'
              containerClassName='mb-3'
              append={
                <MDBBtn
                  color='success'
                  outline
                  rounded
                  size='sm'
                  type='submit'
                  className='m-0 z-depth-0'
                >
                  Search
                </MDBBtn>
              }
            />

            <MDBInputGroup
              hint='Search'
              append={
                <MDBBtn
                  gradient='peach'
                  rounded
                  size='sm'
                  type='submit'
                  className='m-0 z-depth-0'
                >
                  Search
                </MDBBtn>
              }
            />
          </SectionContainer>

          <SectionContainer
            header='Material'
            flexCenter
            flexColumn
            className='mr-4'
          >
            <MDBInputGroup
              material
              hint='Search'
              containerClassName='mt-0'
              append={
                <MDBBtn
                  color='unique'
                  style={{ borderRadius: '10em' }}
                  rounded
                  size='sm'
                  type='submit'
                >
                  Search
                </MDBBtn>
              }
            />

            <MDBInputGroup
              material
              hint='Search'
              containerClassName='mt-0'
              append={
                <MDBBtn
                  color='success'
                  outline
                  style={{ borderRadius: '10em' }}
                  rounded
                  size='sm'
                  type='submit'
                >
                  Search
                </MDBBtn>
              }
            />

            <MDBInputGroup
              material
              hint='Search'
              containerClassName='mt-0'
              append={
                <MDBBtn
                  gradient='blue'
                  style={{ borderRadius: '10em' }}
                  rounded
                  size='sm'
                  type='submit'
                >
                  Search
                </MDBBtn>
              }
            />
          </SectionContainer>

          <SectionContainer header='Within select'>
            <MDBSelect
              multiple
              search
              options={options}
              label='Choose your option'
              color='secondary'
            />
          </SectionContainer>

          <SectionContainer header='With navbar'>
            <MDBNavbar
              color='deep-purple'
              className='text-white darken-3 mb-4'
              dark
              expand='md'
            >
              <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav right onClick={this.handleNavbarClick}>
                  <MDBFormInline className='md-form mr-auto m-0'>
                    <input
                      className='form-control mr-sm-2'
                      type='text'
                      placeholder='Search'
                      aria-label='Search'
                    />
                    <MDBBtn
                      outline
                      color='white'
                      size='sm'
                      type='submit'
                      className='mr-auto'
                    >
                      Search
                    </MDBBtn>
                  </MDBFormInline>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>

            <MDBNavbar
              color='blue-grey'
              light
              className='lighten-5'
              expand='md'
            >
              <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav left onClick={this.handleNavbarClick}>
                  <MDBNavItem active>
                    <MDBNavLink to='#!'>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#!'>Pricing</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right onClick={this.handleNavbarClick}>
                  <MDBFormInline className='mr-auto m-0'>
                    <input
                      className='form-control mr-sm-2'
                      type='text'
                      placeholder='Search'
                      aria-label='Search'
                    />
                  </MDBFormInline>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            <MDBNavbar
              color='pink lighten-3'
              dark
              className='lighten-5 mt-4'
              expand='md'
            >
              <MDBNavbarNav left onClick={this.handleNavbarClick}>
                <MDBFormInline className='md-form m-0'>
                  <input
                    className='form-control form-control-sm ml-3 w-75'
                    type='text'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <MDBIcon icon='search' />
                </MDBFormInline>
              </MDBNavbarNav>
              <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
            </MDBNavbar>
            <MDBNavbar
              color='blue lighten-2'
              dark
              className='lighten-5 mt-4'
              expand='md'
            >
              <MDBNavbarNav left onClick={this.handleNavbarClick}>
                <MDBFormInline className='mr-auto'>
                  <input
                    className='form-control mr-sm-2'
                    type='text'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <MDBBtn
                    color='mdb-color'
                    rounded
                    size='sm'
                    type='submit'
                    className='mr-auto'
                  >
                    Search
                  </MDBBtn>
                </MDBFormInline>
              </MDBNavbarNav>
              <MDBNavbarBrand>MDBNavbar</MDBNavbarBrand>
            </MDBNavbar>
          </SectionContainer>
        </MDBContainer>
      </Router>
    );
  }
}

export default SearchPagePro;
