import React from 'react';
import {
  MDBContainer,
  MDBGallery,
  MDBGalleryList,
  MDBBox,
  MDBMask
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

const GalleryWrapper = ({ children }) => {
  return (
    <MDBBox
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: '2px'
      }}
      className='my-3'
    >
      {children}
    </MDBBox>
  );
};

const GalleryPage = () => {
  const dataImg = [
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
      cols: 1,
      title: 'image',
      pattern: 1,
      overlay: 'blue-strong'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
      cols: 2,
      title: 'image',
      pattern: 2,
      overlay: 'blue-light'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg',
      cols: 1,
      title: 'image',
      pattern: 3,
      overlay: 'blue-slight'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg',
      cols: 2,
      title: 'image',
      pattern: 4,
      overlay: 'lime-strong'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg',
      cols: 2,
      title: 'image',
      pattern: 5,
      overlay: 'lime-light'
    },

    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg',
      cols: 1,
      title: 'image',
      pattern: 6,
      overlay: 'lime-slight'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg',
      cols: 2,
      title: 'image',
      pattern: 7,
      overlay: 'teal-strong'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg',
      cols: 1,
      title: 'image',
      pattern: 8,
      overlay: 'teal-light'
    }
  ];

  return (
    <MDBContainer>
      <DocsLink
        title='Gallery'
        href='https://mdbootstrap.com/plugins/react/gallery/'
      />

      <SectionContainer tag='section' header='Basic example' className='p-5'>
        <GalleryWrapper>
          <MDBGallery cols={4}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>

      <SectionContainer
        tag='section'
        header='Rounded with shadows'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery cols={4}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={cols || 1}
                  titleClasses='rounded'
                  styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
                >
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
      <SectionContainer
        tag='section'
        header='With perfect-scrollbar'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery
            className='scrollbar '
            cols={4}
            style={{ width: '500px', height: '400px' }}
          >
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={cols || 1}
                  titleClasses='rounded'
                  styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
                >
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
      <SectionContainer
        tag='section'
        header='Different spacing'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery cols={4} spacing={0}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
        <hr />
        <GalleryWrapper>
          <MDBGallery cols={4} spacing={30}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
      <SectionContainer
        tag='section'
        header='Different size of rows and columns in gallery list'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery cols={3}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
        <hr />
        <GalleryWrapper>
          <MDBGallery cols={3}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1} rows={2}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
      <SectionContainer tag='section' header='With masks' className='p-5'>
        <GalleryWrapper>
          <MDBGallery cols={4}>
            {dataImg.map(({ cols, img, title, pattern }, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={cols || 1}
                  rows={2}
                  titleClasses='view'
                >
                  <img src={img} alt={title} />
                  <MDBMask pattern={pattern} className='flex-center'>
                    <MDBBox
                      tag='p'
                      color='white'
                      style={{
                        position: 'absolute',
                        top: '50%'
                      }}
                    >
                      With masks pattern {i + 1}
                    </MDBBox>
                  </MDBMask>
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>

      <SectionContainer
        tag='section'
        header='With hover effects'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery cols={4}>
            {dataImg.map(({ cols, img, title, overlay }, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={cols || 1}
                  rows={2}
                  titleClasses='view overlay'
                >
                  <img src={img} alt={title} />
                  <MDBMask className='flex-center' overlay={overlay}>
                    <MDBBox
                      tag='p'
                      color='white'
                      style={{
                        position: 'absolute',
                        top: '50%'
                      }}
                    >
                      With {overlay}
                    </MDBBox>
                  </MDBMask>
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
    </MDBContainer>
  );
};

export default GalleryPage;
