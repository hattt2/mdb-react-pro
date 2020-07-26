import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBAnimation,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBEdgeHeader
} from 'mdbreact';
import MenuLink from '../components/menuLink';

const ComponentsNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <MDBJumbotron>
                <h1 className='text-center'>
                  <MDBIcon icon='cubes' className='indigo-text mr-2' />
                  Components
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'><strong>FREE</strong> </h6>
                  <MenuLink to='/components/badge' title='Badge' />
                  <MenuLink to='/components/buttons' title='Buttons' />
                  <MenuLink to='/components/cards' title='Cards' />
                  <MenuLink to='/components/dropdown' title='Dropdown' />
                  <MenuLink to='/components/list-group' title='List group' />
                  <MenuLink to='/components/media' title='Media' />
                  <MenuLink to='/components/panels' title='Panels' />
                  <MenuLink to='/components/pagination' title='Pagination' />
                  <MenuLink to='/components/progress' title='Progress' />
                  <MenuLink to='/components/search' title='Search' />
                  <MenuLink to='/components/spinner' title='Loader/Spinner' />
                  <MenuLink to='/components/tabs' title='Tabs' />
                  <MenuLink to='/components/pills' title='Pills' />
                  {/* PRO-START */}
                  <h6 className='mt-4 grey-text'><strong className='indigo-text'>PRO</strong></h6>
                  <MenuLink to='/components/pro/buttons' title='Buttons' />
                  <MenuLink to='/components/pro/cards' title='Cards' />
                  <MenuLink to='/components/pro/chips' title='Chips' />
                  <MenuLink to='/components/pro/dropdown' title='Material Dropdown' />
                  <MenuLink to='/components/pro/spinner' title='Loader/Spinner' />
                  <MenuLink to='/components/pro/search' title='Search' />
                  <MenuLink to='/components/pro/socialbuttons' title='Social Buttons' />
                  <MenuLink to='/components/pro/stepper' title='Stepper' />
                  <MenuLink to='/components/pro/tabs' title='Tabs' />
                  <MenuLink to='/components/pro/pills' title='Pills' />
                  {/* PRO-END */}
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default ComponentsNavPage;
