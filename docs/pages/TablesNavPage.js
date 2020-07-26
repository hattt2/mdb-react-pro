import React from 'react';
import { MDBEdgeHeader, MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon, MDBAnimation } from 'mdbreact';
import MenuLink from '../components/menuLink';

const TablesNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <MDBJumbotron>
                <h1 className='text-center'>
                  <MDBIcon icon='table' className='indigo-text mr-2' />
                  Tables
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'><strong>FREE</strong> </h6>
                  <MenuLink to='/tables/datatable' title='Datatable' />
                  <MenuLink to='/tables/datatable-api' title='Datatable - data from API' />
                  <MenuLink to='/tables/table' title='Table' />
                  <MenuLink to='/tables/table-responsive' title='Table Responsive' />
                  <MenuLink to='/tables/table-scroll' title='Table Scroll' />
                  <MenuLink to='/tables/table-styles' title='Table Styles' />
                  {/* PRO-START */}
                  <h6 className='mt-4 grey-text'><strong className='indigo-text'>PRO</strong> </h6>
                  <MenuLink to='/tables/pro/datatable-csv' title='Datatable - export to CSV' />
                  <MenuLink to='/tables/pro/datatable-filter' title='Datatable Filter' />
                  <MenuLink to='/tables/pro/tableeditable' title='Table Editable' />
                  <MenuLink to='/tables/pro/table-styles' title='Table Styles' />
                  {/* PRO-END */}
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
}

export default TablesNavPage;
