import React from 'react';
import { MDBContainer, MDBScrollbar } from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';
import './ScrollbarPage.css';

const ScrollBarPage = () => {
  const outerContainerStyle = { width: '800px', height: '400px' };
  return (
    <MDBContainer>
      <DocsLink title='ScrollBar' href='https://mdbootstrap.com/docs/react/' />

      <SectionContainer header='With primary color' className='p-5'>
        <div style={outerContainerStyle} className='mx-auto'>
          <MDBScrollbar className='scrollbar-primary'>
            <img
              alt=''
              src='https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg'
            />
          </MDBScrollbar>
        </div>
      </SectionContainer>

      <SectionContainer header='With default color' className='p-5'>
        <div style={outerContainerStyle} className='mx-auto'>
          <MDBScrollbar>
            <img
              alt=''
              src='https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg'
            />
          </MDBScrollbar>
        </div>
      </SectionContainer>
    </MDBContainer>
  );
};

export default ScrollBarPage;
