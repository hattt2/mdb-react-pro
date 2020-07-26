import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

const ThumbnailsCarouselPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title='Thumbnails MDBCarousel'
        href='https://mdbootstrap.com/docs/react/advanced/carousel/#thumbnails'
      />
      <SectionContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls
          showIndicators
          thumbnails
          className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <img
                className='d-block w-100'
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg'
                alt='First slide'
              />
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <img
                className='d-block w-100'
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg'
                alt='Second slide'
              />
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <img
                className='d-block w-100'
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
                alt='Third slide'
              />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>
    </MDBContainer>
  );
};

export default ThumbnailsCarouselPage;
