import React, { Component } from 'react';
import { MDBContainer, MDBLightbox } from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class LightboxPage extends Component {
  state = {
    images: [
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
        alt: 'My Image 1'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
        alt: 'My Image 2'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
        alt: 'My Image 3'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
        alt: 'My Image 4'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
        alt: 'My Image 5'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
        alt: 'My Image 6'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
        alt: 'My Image 7'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
        alt: 'My Image 8'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
        alt: 'My Image 9'
      }
    ],
    noMargins: [
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg'
      }
    ],
    heading: [
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(63).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(66).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(65).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(67).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(68).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg'
      },
      {
        src:
          'https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg'
      }
    ],
    presentation: [
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(135).jpg',
        description: '| Lorem Ipsum Dolor Sit Amet'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg',
        description: '| Lorem Ipsum Dolor Sit Amet'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg',
        description: '| Lorem Ipsum Dolor Sit Amet'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg',
        description: '| Lorem Ipsum Dolor Sit Amet'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg',
        description: '| Lorem Ipsum Dolor Sit Amet'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg',
        description: '| Lorem Ipsum Dolor Sit Amet'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg',
        description: '| Lorem Ipsum Dolor Sit Amet'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg',
        description: '| Lorem Ipsum Dolor Sit Amet'
      }
    ],
    mixed: [
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(58).jpg',
        md: '3'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(61).jpg',
        md: '3'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(62).jpg',
        md: '3'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg',
        md: '3'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(66).jpg',
        md: '4'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(70).jpg',
        md: '4'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(74).jpg',
        md: '4'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(64).jpg',
        md: '3'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(77).jpg',
        md: '3'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(78).jpg',
        md: '3'
      },
      {
        src:
          'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(76).jpg',
        md: '3'
      }
    ]
  };

  render() {
    const { heading, images, mixed, noMargins, presentation } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Lightbox'
          href='https://mdbootstrap.com/docs/react/advanced/lightbox/'
        />
        <SectionContainer header='Basic example' className='p-4'>
          <MDBLightbox md='4' images={images} />
        </SectionContainer>
        <SectionContainer header='Gallery with margins' className='p-4'>
          <MDBLightbox md='4' images={noMargins} noMargins />
        </SectionContainer>
        <SectionContainer header='Gallery with heading' className='p-4'>
          <h2 className='font-weight-bold my-5 text-center'>My Projects</h2>
          <MDBLightbox md='4' images={heading} noMargins />
        </SectionContainer>
        <SectionContainer header='Projects presentation' className='p-4'>
          <h2 className='h1 text-center text-uppercase font-weight-bold mt-5 mb-3 mt-5'>
            My projects
          </h2>
          <p className='text-center text-uppercase font-weight-bold'>
            All about my work
          </p>
          <p className='section-description mt-5 pt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur accusamus
            veniam. At ab ea a molestiae corrupti numquam quo beatae minima
            ratione magni accusantium repellat eveniet quia vitae.
          </p>
          <MDBLightbox md='3' images={presentation} noMargins />
        </SectionContainer>

        <SectionContainer header='Gallery with mixed content' className='p-4'>
          <MDBLightbox images={mixed} noMargins />
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default LightboxPage;
