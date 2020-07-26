import React, { Component } from 'react';
import {
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBCol
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class NavsPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title='Tabs'
          href='https://mdbootstrap.com/docs/react/navigation/navs/'
        />

        <SectionContainer header='Basic examples with Tabs & Pills' noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer className='pb-5'>
                <MDBNav tabs color='indigo'>
                  <MDBNavItem>
                    <MDBLink active to='#!'>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 1</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 2</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 3</MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6'>
              <SectionContainer className='pb-4'>
                <MDBNav pills color='unique' className='mb-2'>
                  <MDBNavItem>
                    <MDBLink active to='#!'>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 1</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 2</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 3</MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Justified with Tabs & Pills' noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer className='pb-5'>
                <MDBNav tabs color='purple' className='nav-justified'>
                  <MDBNavItem>
                    <MDBLink active to='#!'>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 1</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 2</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 3</MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6'>
              <SectionContainer className='pb-4'>
                <MDBNav pills className='nav-justified mb-2'>
                  <MDBNavItem>
                    <MDBLink active to='#!'>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 1</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 2</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 3</MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='With Tabs & Pills with dropdown' noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer className='pb-5'>
                <MDBNav tabs color='secondary'>
                  <MDBNavItem>
                    <MDBLink active to='#!'>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color='secondary'>
                        Dropdown
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color='secondary'>
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink disabled to='#!'>
                      Disabled
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6'>
              <SectionContainer className='pb-4'>
                <MDBNav pills color='dark' className='mb-2'>
                  <MDBNavItem>
                    <MDBLink active to='#!'>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color='dark'>
                        Dropdown
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color='dark'>
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink disabled to='#!'>
                      Disabled
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default NavsPage;
