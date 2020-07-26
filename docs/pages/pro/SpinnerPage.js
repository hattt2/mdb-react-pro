import React from 'react';
import { MDBSpinner, MDBContainer } from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

const SpinnerPage = props => {
  return (
    <MDBContainer>
      <DocsLink title='Loader/Spinner' href='https://mdbootstrap.com/docs/react/components/spinners/' />

      <SectionContainer header='Colorful'>
        <div className='my-5 d-flex justify-content-around'>
          <MDBSpinner red />
          <MDBSpinner />
          <MDBSpinner yellow />
          <MDBSpinner green />
          <MDBSpinner multicolor />
        </div>
      </SectionContainer>

      <SectionContainer header='Sizes'>
        <div className='my-5 d-flex justify-content-around'>
          <MDBSpinner small />
          <MDBSpinner />
          <MDBSpinner big />
        </div>
      </SectionContainer>

      <SectionContainer header='Crazy speed'>
        <div className='my-5 d-flex justify-content-around'>
          <MDBSpinner crazy big />
        </div>
      </SectionContainer>
    </MDBContainer>
  );
};

export default SpinnerPage;
