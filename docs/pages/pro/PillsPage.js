import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBLink,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class PillsPage extends Component {
  state = {
    modal1: false,

    items: {
      default: '1',
      justified: '1',
      dropdown: '1',
      vertical: '1',
      gradient: '1',
      rounded: '1',
      rounded2: '1',
      roundedGradient: '1',
      roundedGradient2: '1',
      roundedOutline: '1',
      roundedOutline2: '1',
      icons: '1',
      iconsRight: '1',
      content: '1',
      contentCard: '1',
      animation: '1',
      animationRO: '1',
      animationR: '1',
      modal: '1',
      outer: '1',
      inner: '1'
    }
  };

  togglePills = (type, tab) => e => {
    const { items } = this.state;
    e.preventDefault();
    if (items[type] !== tab) {
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  componentDidMount() {
    this.Styles();
  }

  Styles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Remove outline (border if you click button) */
      a,
      li,
      a::-moz-focus-inner,
      li::-moz-focus-inner,
      a:focus,
      li:focus,
      select:-moz-focusring,
      button::-moz-focus-inner {
        outline: none !important;
      }

      /* Gradient buttons */
      .pills-peach-gradient .nav-item .nav-link.active {
        background: linear-gradient(40deg, #ffd86f, #fc6262);
      }
      .pills-blue-gradient .nav-item .nav-link.active {
        background: linear-gradient(40deg, #45cafc, #303f9f);
      }
      .pills-purple-gradient .nav-item .nav-link.active {
        background: linear-gradient(40deg, #ff6ec4, #7873f5);
      }
      .pills-aqua-gradient .nav-item .nav-link.active {
        background: linear-gradient(40deg, #2096ff, #05ffa3);
      }

      /* Rounded buttons and outline*/
      .pills-rounded .nav-item .nav-link {
        border-radius: 10em;
      }
      .pills-light-purple .nav-item .nav-link.active {
        background-color: #ba68c8;
      }

      .pills-outline-red .nav-item .nav-link {
        border: 2px solid transparent;
        color: #666;
        background-color: transparent;
      }
      .pills-outline-red .nav-item .nav-link:hover {
        border: 2px solid #fff;
      }
      .pills-outline-red .nav-item .nav-link.active {
        border: 2px solid #f44336;
        color: #f44336;
      }
      .pills-outline-red .nav-item .nav-link.active:hover {
        border: 2px solid #f44336;
        color: #f44336;
      }

      .pills-outline-green .nav-item .nav-link {
        border: 2px solid transparent;
        color: #666;
        background-color: transparent;
      }
      .pills-outline-green .nav-item .nav-link:hover {
        border: 2px solid #fff;
      }
      .pills-outline-green .nav-item .nav-link.active {
        border: 2px solid #4caf50;
        color: #4caf50;
      }
      .pills-outline-green .nav-item .nav-link.active:hover {
        border: 2px solid #4caf50;
        color: #4caf50;
      }


      /* Colors animations */

      .pills-blue-teal .nav-item .nav-link.active {
        background-color: #4fc3f7;
        -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
        animation-name: example;
        animation-duration: 4s;
        }
        /* Safari 4.0 - 8.0 */
        @-webkit-keyframes example {
        from {background-color: #4fc3f7;}
        to {background-color: #009688;}
        }

        /* Standard syntax */
        @keyframes example {
        from {background-color: #4fc3f7;}
        to {background-color: #009688;}
        }

        .pills-outline-purple-anm .nav-item .nav-link.active {
        border: 2px solid #9c27b0;
        color: #9c27b0;
        background-color: transparent;
        -webkit-animation-name: outline; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
        animation-name: outline;
        animation-duration: 4s;
        }
        /* Safari 4.0 - 8.0 */
        @-webkit-keyframes outline {
        from {border: 2px solid #9c27b0; color: #9c27b0;}
        to {border: 2px solid #f48fb1; color: #f48fb1;}
        }

        /* Standard syntax */
        @keyframes outline {
        from {border: 2px solid #9c27b0; color: #9c27b0;}
        to {border: 2px solid #f48fb1; color: #f48fb1;}
        }

        .pills-orange-anm .nav-item .nav-link.active {
        background-color: #ffa000 ;
        -webkit-animation-name: orange; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
        animation-name: orange;
        animation-duration: 4s;
        }
        /* Safari 4.0 - 8.0 */
        @-webkit-keyframes orange {
        from {background-color: #ffa000 ;}
        to {background-color: #f44336;}
        }

        /* Standard syntax */
        @keyframes orange {
        from {background-color: #ffa000 ;}
        to {background-color: #f44336;}
        }
      `;
    const firstScriptTag = document.querySelector('script');
    firstScriptTag.parentNode.insertBefore(style, firstScriptTag);
  };

  render() {
    const { items, modal1 } = this.state;

    return (
      <MDBContainer>
        <DocsLink title='Pills' href='https://mdbootstrap.com/docs/react/components/pills/' />

        <MDBContainer className='mt-4'>
          <MDBRow>
            <MDBCol md='12'>
              <SectionContainer header='Basic example'>
                <MDBNav pills color='secondary'>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['default'] === '1'} link onClick={this.togglePills('default', '1')}>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['default'] === '2'} link onClick={this.togglePills('default', '2')}>
                      Link
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['default'] === '3'} link onClick={this.togglePills('default', '3')}>
                      Link
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['default'] === '4'} link onClick={this.togglePills('default', '4')}>
                      Help
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={items.default}>
                  <MDBTabPane tabId='1'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                      molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                      minima.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId='2'>
                    <p>
                      Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam,
                      pariatur. Tempora, placeat ratione porro voluptate odit minima.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                    <p>
                      Tempora, placeat ratione porro voluptate odit minima. Nihil odit magnam minima, soluta doloribus reiciendis molestiae
                      placeat unde eos molestias.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId='4'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                      molestiae placeat unde eos molestias. Quisquam aperiam, pariatur.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </SectionContainer>

              <SectionContainer header='Justified'>
                <MDBNav pills color='pink' className='nav-justified'>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['justified'] === '1'} link onClick={this.togglePills('justified', '1')}>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['justified'] === '2'} link onClick={this.togglePills('justified', '2')}>
                      Link
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['justified'] === '3'} link onClick={this.togglePills('justified', '3')}>
                      Link
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['justified'] === '4'} link onClick={this.togglePills('justified', '4')}>
                      Help
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>

              <SectionContainer header='With dropdown'>
                <MDBNav pills color='success' className='nav-justified '>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['dropdown'] === '1'} link onClick={this.togglePills('dropdown', '1')}>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color='success'>
                        Dropdown
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color='success'>
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['dropdown'] === '2'} link onClick={this.togglePills('dropdown', '2')}>
                      Link 1
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['dropdown'] === '3'} link onClick={this.togglePills('dropdown', '3')}>
                      Link 2
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>

              <SectionContainer header='Vertical'>
                <MDBRow className='d-flex justify-content-center'>
                  <MDBCol md='6'>
                    <MDBNav pills color='primary' className='flex-column'>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['vertical'] === '1'} link onClick={this.togglePills('vertical', '1')}>
                          Downloads <MDBIcon icon='download' className='ml-2' />
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['vertical'] === '2'} link onClick={this.togglePills('vertical', '2')}>
                          Orders & invoices
                          <MDBIcon icon='file-alt' className='ml-2' />
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['vertical'] === '3'} link onClick={this.togglePills('vertical', '3')}>
                          Billing Details
                          <MDBIcon icon='address-card' className='ml-2' />
                        </MDBLink>
                      </MDBNavItem>
                    </MDBNav>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBTabContent activeItem={items.vertical}>
                      <MDBTabPane tabId='1'>
                        <MDBCardBody className='d-flex flex-column align-items-center'>
                          <MDBCardTitle>Downloads</MDBCardTitle>
                          <MDBCardText>Completely legal</MDBCardText>
                        </MDBCardBody>
                      </MDBTabPane>
                      <MDBTabPane tabId='2'>
                        <MDBCardBody className='d-flex flex-column align-items-center'>
                          <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                          <MDBCardText>"Hello? Is it me you're looking for?"</MDBCardText>
                        </MDBCardBody>
                      </MDBTabPane>
                      <MDBTabPane tabId='3'>
                        <MDBCardBody className='d-flex flex-column align-items-center'>
                          <MDBCardTitle>Billing Details</MDBCardTitle>
                          <MDBCardText>
                            Time to pay{' '}
                            <MDBBtn className='ml-3' color='primary'>
                              pay
                            </MDBBtn>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBCol>
                </MDBRow>
              </SectionContainer>

              <SectionContainer header='With gradient'>
                <MDBNav pills className='nav-justified pills-peach-gradient'>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['gradient'] === '1'} link onClick={this.togglePills('gradient', '1')}>
                      Blogger
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['gradient'] === '2'} link onClick={this.togglePills('gradient', '2')}>
                      Designer
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['gradient'] === '3'} link onClick={this.togglePills('gradient', '3')}>
                      Photographer
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['gradient'] === '4'} link onClick={this.togglePills('gradient', '4')}>
                      Model
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>

              <SectionContainer header='Rounded'>
                <MDBRow>
                  <MDBNav pills color='deep-purple' className='nav-justified col-md-6 pills-rounded'>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['rounded'] === '1'} link onClick={this.togglePills('rounded', '1')}>
                        Active
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['rounded'] === '2'} link onClick={this.togglePills('rounded', '2')}>
                        Link 1
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['rounded'] === '3'} link onClick={this.togglePills('rounded', '3')}>
                        Link 2
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['rounded'] === '4'} link onClick={this.togglePills('rounded', '4')}>
                        Link 3
                      </MDBLink>
                    </MDBNavItem>
                  </MDBNav>

                  <MDBNav pills color='light-purple' className='nav-justified col-md-6 pills-rounded'>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['rounded2'] === '1'} link onClick={this.togglePills('rounded2', '1')}>
                        Active
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['rounded2'] === '2'} link onClick={this.togglePills('rounded2', '2')}>
                        Link 1
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['rounded2'] === '3'} link onClick={this.togglePills('rounded2', '3')}>
                        Link 2
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['rounded2'] === '4'} link onClick={this.togglePills('rounded2', '4')}>
                        Link 3
                      </MDBLink>
                    </MDBNavItem>
                  </MDBNav>

                  <MDBNav pills className='nav-justified col-md-6 pills-peach-gradient pills-rounded'>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedGradient'] === '1'} link onClick={this.togglePills('roundedGradient', '1')}>
                        Active
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedGradient'] === '2'} link onClick={this.togglePills('roundedGradient', '2')}>
                        Link 1
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedGradient'] === '3'} link onClick={this.togglePills('roundedGradient', '3')}>
                        Link 2
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedGradient'] === '4'} link onClick={this.togglePills('roundedGradient', '4')}>
                        Link 3
                      </MDBLink>
                    </MDBNavItem>
                  </MDBNav>

                  <MDBNav pills className='nav-justified col-md-6 pills-rounded pills-green-gradient'>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedGradient2'] === '1'} link onClick={this.togglePills('roundedGradient2', '1')}>
                        Active
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedGradient2'] === '2'} link onClick={this.togglePills('roundedGradient2', '2')}>
                        Link 1
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedGradient2'] === '3'} link onClick={this.togglePills('roundedGradient2', '3')}>
                        Link 2
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedGradient2'] === '4'} link onClick={this.togglePills('roundedGradient2', '4')}>
                        Link 3
                      </MDBLink>
                    </MDBNavItem>
                  </MDBNav>

                  <MDBNav pills className='nav-justified col-md-6 pills-rounded pills-outline-red'>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedOutline'] === '1'} link onClick={this.togglePills('roundedOutline', '1')}>
                        Active
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedOutline'] === '2'} link onClick={this.togglePills('roundedOutline', '2')}>
                        Link 1
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedOutline'] === '3'} link onClick={this.togglePills('roundedOutline', '3')}>
                        Link 2
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedOutline'] === '4'} link onClick={this.togglePills('roundedOutline', '4')}>
                        Link 3
                      </MDBLink>
                    </MDBNavItem>
                  </MDBNav>

                  <MDBNav pills className='nav-justified col-md-6 pills-rounded pills-outline-green'>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedOutline2'] === '1'} link onClick={this.togglePills('roundedOutline2', '1')}>
                        Active
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedOutline2'] === '2'} link onClick={this.togglePills('roundedOutline2', '2')}>
                        Link 1
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedOutline2'] === '3'} link onClick={this.togglePills('roundedOutline2', '3')}>
                        Link 2
                      </MDBLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBLink to='#' active={items['roundedOutline2'] === '4'} link onClick={this.togglePills('roundedOutline2', '4')}>
                        Link 3
                      </MDBLink>
                    </MDBNavItem>
                  </MDBNav>
                </MDBRow>
              </SectionContainer>

              <SectionContainer header='With icons'>
                <MDBNav pills color='info' className='nav-justified '>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['icons'] === '1'} link onClick={this.togglePills('icons', '1')}>
                      <MDBIcon fab icon='android' /> USA
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['icons'] === '2'} link onClick={this.togglePills('icons', '2')}>
                      <MDBIcon icon='leaf' /> Mexico
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['icons'] === '3'} link onClick={this.togglePills('icons', '3')}>
                      <MDBIcon icon='heart' /> Poland
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['icons'] === '4'} link onClick={this.togglePills('icons', '4')}>
                      <MDBIcon icon='futbol' /> Brazil
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBNav pills className='nav-justified pills-rounded pills-outline-red'>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['iconsRight'] === '1'} link onClick={this.togglePills('iconsRight', '1')}>
                      San Francisco <MDBIcon far icon='grin' />
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['iconsRight'] === '2'} link onClick={this.togglePills('iconsRight', '2')}>
                      Tijuana <MDBIcon icon='users' />
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['iconsRight'] === '3'} link onClick={this.togglePills('iconsRight', '3')}>
                      Cracow <MDBIcon icon='thumbs-up' />
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={items['iconsRight'] === '4'} link onClick={this.togglePills('iconsRight', '4')}>
                      Rio de Janeiro <MDBIcon icon='coffee' />
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>

              <SectionContainer header='With content'>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBNav pills className='nav-justified pills-rounded pills-purple-gradient'>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['content'] === '1'} link onClick={this.togglePills('content', '1')}>
                          Fashion
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['content'] === '2'} link onClick={this.togglePills('content', '2')}>
                          Lifestyle
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['content'] === '3'} link onClick={this.togglePills('content', '3')}>
                          Beauty
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['content'] === '4'} link onClick={this.togglePills('content', '4')}>
                          Shop
                        </MDBLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={items.content}>
                      <MDBTabPane tabId='1'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId='2'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId='3'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId='4'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBNav pills color='warning' className='nav-justified mb-4'>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['contentCard'] === '1'} link onClick={this.togglePills('contentCard', '1')}>
                          Fashion
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['contentCard'] === '2'} link onClick={this.togglePills('contentCard', '2')}>
                          Lifestyle
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['contentCard'] === '3'} link onClick={this.togglePills('contentCard', '3')}>
                          Beauty
                        </MDBLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent className='card' activeItem={items.contentCard}>
                      <MDBTabPane tabId='1'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId='2'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId='3'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBCol>
                </MDBRow>
              </SectionContainer>

              <SectionContainer header='Color animations'>
                <MDBRow className='d-flex justify-content-center'>
                  <MDBCol xl='8' md='10'>
                    <MDBNav pills color='blue-teal' className='nav-justified'>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animation'] === '1'} link onClick={this.togglePills('animation', '1')}>
                          Fashion
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animation'] === '2'} link onClick={this.togglePills('animation', '2')}>
                          Lifestyle
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animation'] === '3'} link onClick={this.togglePills('animation', '3')}>
                          Beauty
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animation'] === '4'} link onClick={this.togglePills('animation', '4')}>
                          Shop
                        </MDBLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBNav pills className='nav-justified pills-rounded pills-outline-purple-anm'>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animationRO'] === '1'} link onClick={this.togglePills('animationRO', '1')}>
                          Madrid
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animationRO'] === '2'} link onClick={this.togglePills('animationRO', '2')}>
                          Bari
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animationRO'] === '3'} link onClick={this.togglePills('animationRO', '3')}>
                          Warsaw
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animationRO'] === '4'} link onClick={this.togglePills('animationRO', '4')}>
                          Paris
                        </MDBLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBNav pills className='nav-justified pills-rounded pills-orange-anm'>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animationR'] === '1'} link onClick={this.togglePills('animationR', '1')}>
                          Features
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animationR'] === '2'} link onClick={this.togglePills('animationR', '2')}>
                          Pricing
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animationR'] === '3'} link onClick={this.togglePills('animationR', '3')}>
                          Gadgets
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['animationR'] === '4'} link onClick={this.togglePills('animationR', '4')}>
                          Technology
                        </MDBLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={items.animationR}>
                      <MDBTabPane tabId='1'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId='2'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId='3'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId='4'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBCol>
                </MDBRow>
              </SectionContainer>

              <SectionContainer header='With modal' flexCenter>
                <MDBBtn rounded onClick={this.toggle(1)}>
                  Launch Modal LogIn/Register
                  <MDBIcon icon='eye' className='ml-1' />
                </MDBBtn>
                <MDBModal isOpen={modal1} toggle={this.toggle(1)} centered>
                  <MDBModalBody>
                    <MDBNav pills color='primary' className='nav-justified pt-2'>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['modal'] === '1'} link onClick={this.togglePills('modal', '1')}>
                          <MDBIcon icon='user' className='mr-1' /> Login
                        </MDBLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBLink to='#' active={items['modal'] === '2'} link onClick={this.togglePills('modal', '2')}>
                          <MDBIcon icon='user-plus' className='mr-1' /> Register
                        </MDBLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={items.modal}>
                      <MDBTabPane tabId='1'>
                        <form className=' mx-3 grey-text'>
                          <MDBInput label='Your email' icon='envelope' group type='email' validate error='wrong' success='right' />
                          <MDBInput label='Your password' icon='lock' group type='password' validate />
                          <MDBCol size='12' className='text-center'>
                            <MDBBtn color='primary'>
                              LOG IN
                              <MDBIcon icon='sign-in-alt' className='ml-1' />
                            </MDBBtn>
                          </MDBCol>
                        </form>
                      </MDBTabPane>
                      <MDBTabPane tabId='2'>
                        <form className='mx-3 grey-text'>
                          <MDBInput label='Your name' icon='user' group type='text' validate error='wrong' success='right' />
                          <MDBInput label='Your email' icon='envelope' group type='email' validate error='wrong' success='right' />
                          <MDBInput label='Your password' icon='lock' group type='password' validate />
                          <MDBCol size='12' className='text-center'>
                            <MDBBtn color='primary'>
                              SIGN IN
                              <MDBIcon icon='sign-in-alt' className='ml-1' />
                            </MDBBtn>
                          </MDBCol>
                        </form>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBModalBody>
                  <MDBModalFooter className='justify-content-center'>
                    <MDBRow className='w-100 justify-content-start'>
                      <MDBCol size='8'>
                        <div id='options' className='text-right float-left'>
                          <MDBTabContent className='pt-1 px-0 pb-0' activeItem={items.modal}>
                            <MDBTabPane tabId='1'>
                              <p className='font-small'>
                                Not a member?
                                <a href='https://mdbootstrap.com' className='blue-text ml-1' link onClick={this.togglePills('modal', '2')}>
                                  Sign Up
                                </a>
                              </p>
                              <p className='font-small'>
                                Forgot{' '}
                                <a href='https://mdbootstrap.com' className='blue-text ml-1'>
                                  password?
                                </a>
                              </p>
                            </MDBTabPane>
                            <MDBTabPane tabId='2'>
                              <p className='font-small'>
                                Already have an account?
                                <a href='https://mdbootstrap.com' className='blue-text ml-1' link onClick={this.togglePills('modal', '2')}>
                                  LogIn
                                </a>
                              </p>
                              <p className='font-small'>
                                Forgot{' '}
                                <a href='https://mdbootstrap.com' className='blue-text ml-1'>
                                  password?
                                </a>
                              </p>
                            </MDBTabPane>
                          </MDBTabContent>
                        </div>
                      </MDBCol>
                      <MDBCol size='4' className='float-right'>
                        <MDBBtn outline color='primary' onClick={this.toggle(1)}>
                          CLOSE
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBModalFooter>
                </MDBModal>
              </SectionContainer>

              <SectionContainer header='Within tabs'>
                <MDBNav tabs className='nav-justified' color='indigo'>
                  <MDBNavItem>
                    <MDBLink to='#' role='tab' active={items['outer'] === '1'} link onClick={this.togglePills('outer', '1')}>
                      <MDBIcon icon='user' /> Profile
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' role='tab' active={items['outer'] === '2'} link onClick={this.togglePills('outer', '2')}>
                      <MDBIcon icon='heart' /> Follow
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent className='card mb-5' activeItem={items.outer}>
                  <MDBTabPane tabId='1' role='tabpanel'>
                    <MDBRow>
                      <MDBCol md='3'>
                        <MDBNav pills color='primary' className='flex-column'>
                          <MDBNavItem>
                            <MDBLink to='#' active={items['inner'] === '1'} link onClick={this.togglePills('inner', '1')}>
                              Downloads <MDBIcon icon='download' className='ml-2' />
                            </MDBLink>
                          </MDBNavItem>
                          <MDBNavItem>
                            <MDBLink to='#' active={items['inner'] === '2'} link onClick={this.togglePills('inner', '2')}>
                              Orders & invoices
                              <MDBIcon icon='file-alt' className='ml-2' />
                            </MDBLink>
                          </MDBNavItem>
                          <MDBNavItem>
                            <MDBLink to='#' active={items['inner'] === '3'} link onClick={this.togglePills('inner', '3')}>
                              Billing Details
                              <MDBIcon icon='address-card' className='ml-2' />
                            </MDBLink>
                          </MDBNavItem>
                        </MDBNav>
                      </MDBCol>
                      <MDBCol md='9'>
                        <MDBTabContent activeItem={items.inner}>
                          <MDBTabPane tabId='1'>
                            <MDBCardBody>
                              <MDBCardTitle>Downloads</MDBCardTitle>
                              <MDBCardText>Completely legal</MDBCardText>
                            </MDBCardBody>
                          </MDBTabPane>
                          <MDBTabPane tabId='2'>
                            <MDBCardBody>
                              <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                              <MDBCardText>"Hello? Is it me you're looking for?"</MDBCardText>
                            </MDBCardBody>
                          </MDBTabPane>
                          <MDBTabPane tabId='3'>
                            <MDBCardBody>
                              <MDBCardTitle>Billing Details</MDBCardTitle>
                              <MDBCardText>
                                Time to pay{' '}
                                <MDBBtn className='ml-3' color='secondary'>
                                  pay
                                </MDBBtn>
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBTabPane>
                        </MDBTabContent>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId='2' role='tabpanel'>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBCardBody>
                          <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                          <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                          <MDBBtn>Go somewhere</MDBBtn>
                        </MDBCardBody>
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBCardBody>
                          <MDBCardTitle>Special Title Treatment</MDBCardTitle>
                          <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                          <MDBBtn>Go somewhere</MDBBtn>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                </MDBTabContent>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default PillsPage;
