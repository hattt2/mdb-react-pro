import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBSimpleChart
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

const ChartsPagePro = () => {
  return (
    <MDBContainer>
      <DocsLink
        title='Minimalist charts'
        href='https://mdbootstrap.com/docs/react/advanced/charts/#usage-minimalist'
      />
      <SectionContainer header='Basic examples' className='p-5'>
        <MDBRow className='text-center'>
          <MDBCol sm='4'>
            <MDBSimpleChart
              width={100}
              height={100}
              strokeWidth={3}
              percent={56}
              strokeColor='#4FB64E'
            />
            <h6 className='mt-2'>
              <span className='label green p-1 white-text'>
                Sales <MDBIcon icon='arrow-circle-up' />
              </span>
            </h6>
          </MDBCol>
          <MDBCol sm='4'>
            <MDBSimpleChart
              width={100}
              height={100}
              strokeWidth={3}
              percent={76}
              strokeColor='#EA3C3B'
            />
            <h6 className='mt-2'>
              <span className='label red p-1 white-text'>
                ROI <MDBIcon icon='arrow-circle-down' />
              </span>
            </h6>
          </MDBCol>
          <MDBCol sm='4'>
            <MDBSimpleChart
              width={100}
              height={100}
              strokeWidth={3}
              percent={100}
              strokeColor='#9D9D9D'
            />
            <h6 className='mt-2'>
              <span className='label grey p-1 white-text'>
                Conversion <MDBIcon icon='minus-square' />
              </span>
            </h6>
          </MDBCol>
        </MDBRow>
      </SectionContainer>
    </MDBContainer>
  );
};

export default ChartsPagePro;
