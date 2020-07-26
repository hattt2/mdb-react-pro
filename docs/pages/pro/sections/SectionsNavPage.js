import React from 'react';
import { MDBEdgeHeader, MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon, MDBAnimation } from 'mdbreact';
import MenuLink from '../../../components/menuLink';

const SectionsNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />    
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <MDBJumbotron>
                <h1 className='text-center'>
                  <MDBIcon icon='th' className='indigo-text mr-2' />
                  Sections
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h5 className='grey-text'><strong className='indigo-text'>Intros</strong></h5>
                  <MenuLink to='/sections/app' title='App intro' />
                  <MenuLink to='/sections/contactform' title='Contact Form intro' />
                  <MenuLink to='/sections/classicform' title='Classic Register Form intro' />
                  <MenuLink to='/sections/videobackground' title='Video Background intro' />
                  <MenuLink to='/sections/minimalistic-intro' title='Minimalistic Intro' />
                  <MenuLink to='/sections/parallax-intro' title='Parallax Effect Intro' />
                  <MenuLink to='/sections/call-to-action-intro' title='Call to Action Intro' />
                  <MenuLink to='/sections/contact' title='Contact' />
                  <MenuLink to='/sections/blog' title='Blog' />
                  <MenuLink to='/sections/ecommerce' title='E-commerce' />
                  <MenuLink to='/sections/features' title='Features' />
                  <MenuLink to='/sections/magazine' title='Magazine' />
                  <MenuLink to='/sections/projects' title='Projects' />
                  <MenuLink to='/sections/social' title='Social' />
                  <MenuLink to='/sections/team' title='Team' />
                  <MenuLink to='/sections/testimonials' title='Testimonials' />
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
}

export default SectionsNavPage;
