import React, { Component } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
  MDBIcon,
  MDBCardImage,
  MDBView,
  MDBRow,
  MDBCol,
  MDBNavLink,
  MDBNav
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class AccordionPage extends Component {
  state = {
    collapseID: 'collapse3'
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    const { collapseID } = this.state;
    const resetPadding = {
      padding: '0'
    };
    return (
      <MDBContainer>
        <DocsLink title='Accordion' href='https://mdbootstrap.com/docs/react/advanced/accordion/' />

        <SectionContainer header='Basic example' className='md-accordion p-5'>
          <MDBCard className='mt-3'>
            <MDBCollapseHeader onClick={this.toggleCollapse('collapse1')}>
              Collapsible Group Item #1
              <i className={collapseID === 'collapse1' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'} />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse1' isOpen={collapseID}>
              <MDBCardBody>
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader onClick={this.toggleCollapse('collapse2')}>
              Collapsible Group Item #2
              <i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'} />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse2' isOpen={collapseID}>
              <MDBCardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader onClick={this.toggleCollapse('collapse3')}>
              Collapsible Group Item #3
              <i className={collapseID === 'collapse3' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'} />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse3' isOpen={collapseID}>
              <MDBCardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </SectionContainer>

        <hr className='my-5' />

        <SectionContainer header='With gradient background' className='accordion-gradient-bcg p-5'>
          <MDBCard style={{ backgroundColor: 'rgba(0,0,0,.03)' }} className='my-1'>
            <MDBCollapseHeader onClick={this.toggleCollapse('collapse4')}>
              <span className='white-text'>#1</span>
              <MDBIcon
                icon={collapseID === 'collapse4' ? 'angle-up' : 'angle-down'}
                className='white-text'
                style={{ float: 'right' }}
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse4' isOpen={collapseID}>
              <MDBCardBody className='rgba-grey-light white-text'>
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
            <MDBCollapseHeader onClick={this.toggleCollapse('collapse5')}>
              <span className='white-text'>#2</span>
              <MDBIcon
                icon={collapseID === 'collapse5' ? 'angle-up' : 'angle-down'}
                className='white-text'
                style={{ float: 'right' }}
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse5' isOpen={collapseID}>
              <MDBCardBody className='rgba-grey-light white-text'>
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
            <MDBCollapseHeader onClick={this.toggleCollapse('collapse6')}>
              <span className='white-text'>#3</span>
              <MDBIcon
                icon={collapseID === 'collapse6' ? 'angle-up' : 'angle-down'}
                className='white-text'
                style={{ float: 'right' }}
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse6' isOpen={collapseID}>
              <MDBCardBody className='rgba-grey-light white-text'>
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </SectionContainer>

        <hr className='my-5' />

        <SectionContainer header='With a picture' className='accordion md-accordion accordion-1 p-5'>
          <MDBCard className='transparent'>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse7')}
              className='text-uppercase blue lighten-3 z-depth-1'
            >
              <span className='white-text font-weight-bold'>I am the first title of accordion</span>
            </MDBCollapseHeader>
            <MDBCollapse id='collapse7' isOpen={collapseID}>
              <MDBCardBody>
                <MDBRow className='my-4'>
                  <MDBCol md='8'>
                    <h2 className='font-weight-bold mb-3 black-text'>Hi! I am the first one.</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris
                    </p>
                    <p className='mb-0 '>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </MDBCol>
                  <MDBCol md='4' className='mt-3 pt-2'>
                    <MDBView className='z-depth-1'>
                      <MDBCardImage
                        className='img-fluid z-depth-1'
                        src='https://mdbootstrap.com/img/Photos/Others/nature.jpeg'
                        alt=''
                      />
                    </MDBView>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='transparent'>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse8')}
              className='text-uppercase blue lighten-3 z-depth-1'
            >
              <span className='white-text font-weight-bold'>I am the second title of accordion</span>
            </MDBCollapseHeader>
            <MDBCollapse id='collapse8' isOpen={collapseID}>
              <MDBCardBody>
                <MDBRow className='my-4'>
                  <MDBCol md='8'>
                    <h2 className='font-weight-bold mb-3 black-text'>Hi! I am the second one.</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris
                    </p>
                    <p className='mb-0 '>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </MDBCol>
                  <MDBCol md='4' className='mt-3 pt-2'>
                    <MDBView className='z-depth-1'>
                      <MDBCardImage
                        className='img-fluid'
                        src='https://mdbootstrap.com/img/Photos/Others/nature.jpeg'
                        alt=''
                      />
                    </MDBView>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='transparent'>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse9')}
              className='text-uppercase blue lighten-3 z-depth-1'
            >
              <span className='white-text font-weight-bold'>I am the third title of accordion</span>
            </MDBCollapseHeader>
            <MDBCollapse id='collapse9' isOpen={collapseID}>
              <MDBCardBody>
                <MDBRow className='my-4'>
                  <MDBCol md='8'>
                    <h2 className='font-weight-bold mb-3 black-text'>Hi! I am the third one.</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris
                    </p>
                    <p className='mb-0 '>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </MDBCol>
                  <MDBCol md='4' className='mt-3 pt-2'>
                    <MDBView className='z-depth-1'>
                      <MDBCardImage
                        className='img-fluid'
                        src='https://mdbootstrap.com/img/Photos/Others/nature.jpeg'
                        alt=''
                      />
                    </MDBView>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </SectionContainer>

        <hr className='my-5' />

        <SectionContainer header='With icons' className='accordion md-accordion accordion-3 z-depth-1-half'>
          <MDBNav className='justify-content-center pt-5'>
            <MDBNavLink to='#!'>
              <MDBIcon icon='anchor' className='red-text' size='2x' />
            </MDBNavLink>
            <MDBNavLink to='#!'>
              <MDBIcon far icon='life-ring' className='red-text' size='2x' />
            </MDBNavLink>
            <MDBNavLink to='#!'>
              <MDBIcon far icon='star' className='red-text' size='2x' />
            </MDBNavLink>
          </MDBNav>
          <h2 className='text-center text-uppercase red-text py-4 px-3'>
            Hello my friends, I am the nicest accordion!
          </h2>

          <hr className='mb-0' />

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse10')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              How awesome accordion I am?
              <MDBIcon
                icon={collapseID === 'collapse10' ? 'angle-up' : 'angle-down'}
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse10' isOpen={collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                  labore sustainable VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse11')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              You're the greatest accordion!
              <MDBIcon
                icon={collapseID === 'collapse11' ? 'angle-up' : 'angle-down'}
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse11' isOpen={collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                  labore sustainable VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse12')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Thank you my dear!
              <MDBIcon
                icon={collapseID === 'collapse12' ? 'angle-up' : 'angle-down'}
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse12' isOpen={collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                  labore sustainable VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </SectionContainer>

        <hr className='my-5' />

        <SectionContainer header='With teal cards' className='accordion md-accordion accordion-4 p-5'>
          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse13')}
              className='z-depth-1 teal lighten-4'
              tagClassName='white-text text-center font-weight-bold text-uppercase'
              tag='h4'
            >
              First title
            </MDBCollapseHeader>
            <MDBCollapse id='collapse13' isOpen={collapseID}>
              <MDBCardBody className='rgba-teal-strong white-text'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et.
                </p>

                <p>
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse14')}
              className='z-depth-1 teal lighten-3'
              tagClassName='white-text text-center font-weight-bold text-uppercase'
              tag='h4'
            >
              Second title
            </MDBCollapseHeader>
            <MDBCollapse id='collapse14' isOpen={collapseID}>
              <MDBCardBody className='rgba-teal-strong white-text'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et.
                </p>

                <p>
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse15')}
              className='z-depth-1 teal lighten-2'
              tagClassName='white-text text-center font-weight-bold text-uppercase'
              tag='h4'
            >
              Third title
            </MDBCollapseHeader>
            <MDBCollapse id='collapse15' isOpen={collapseID}>
              <MDBCardBody className='rgba-teal-strong white-text'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et.
                </p>

                <p>
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse16')}
              className='z-depth-1 teal lighten-1'
              tagClassName='white-text text-center font-weight-bold text-uppercase'
              tag='h4'
            >
              Fourth title
            </MDBCollapseHeader>
            <MDBCollapse id='collapse16' isOpen={collapseID}>
              <MDBCardBody className='rgba-teal-strong white-text'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et.
                </p>

                <p>
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse17')}
              className='z-depth-1 teal'
              tagClassName='white-text text-center font-weight-bold text-uppercase'
              tag='h4'
            >
              Fifth title
            </MDBCollapseHeader>
            <MDBCollapse id='collapse17' isOpen={collapseID}>
              <MDBCardBody className='rgba-teal-strong white-text'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et.
                </p>

                <p>
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </SectionContainer>

        <hr className='my-5' />

        <SectionContainer header='With a photo in background'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'
            }}
          >
            <div className='rgba-black-strong py-5 px-4'>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol md='10' xl='8'>
                  <MDBContainer className='accordion md-accordion accordion-5' style={{ resetPadding }}>
                    <MDBCard className='mb-4'>
                      <MDBCollapseHeader
                        onClick={this.toggleCollapse('collapse1')}
                        className='p-0 z-depth-1'
                        tag='h4'
                        tagClassName='text-uppercase white-text mb-0 d-flex justify-content-start align-items-center'
                      >
                        <div
                          className='d-flex justify-content-center align-items-center mr-4'
                          style={{ backgroundColor: '#fff', minWidth: '100px' }}
                        >
                          <MDBIcon icon='cloud' size='2x' className='m-3 black-text' />
                        </div>
                        Item #1
                      </MDBCollapseHeader>

                      <MDBCollapse id='collapse1' isOpen={collapseID}>
                        <MDBCardBody className='rgba-black-light white-text z-depth-1'>
                          <p className='p-md-4 mb-0'>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                            ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
                            it squid single-origin coffee nulla assumenda shoreditch et.
                          </p>
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>

                    <MDBCard className='mb-4'>
                      <MDBCollapseHeader
                        onClick={this.toggleCollapse('collapse18')}
                        className='p-0 z-depth-1'
                        tag='h4'
                        tagClassName='text-uppercase white-text mb-0 d-flex justify-content-start align-items-center'
                      >
                        <div
                          className='d-flex justify-content-center align-items-center mr-4'
                          style={{ backgroundColor: '#fff', minWidth: '100px' }}
                        >
                          <MDBIcon icon='comment-alt' size='2x' className='m-3 black-text' />
                        </div>
                        Item #2
                      </MDBCollapseHeader>

                      <MDBCollapse id='collapse18' isOpen={collapseID}>
                        <MDBCardBody className='rgba-black-light white-text z-depth-1'>
                          <p className='p-md-4 mb-0'>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                            ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
                            it squid single-origin coffee nulla assumenda shoreditch et.
                          </p>
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>

                    <MDBCard className='mb-4'>
                      <MDBCollapseHeader
                        onClick={this.toggleCollapse('collapse19')}
                        className='p-0 z-depth-1'
                        tag='h4'
                        tagClassName='text-uppercase white-text mb-0 d-flex justify-content-start align-items-center'
                      >
                        <div
                          className='d-flex justify-content-center align-items-center mr-4'
                          style={{ backgroundColor: '#fff', minWidth: '100px' }}
                        >
                          <MDBIcon icon='cogs' size='2x' className='m-3 black-text' />
                        </div>
                        Item #3
                      </MDBCollapseHeader>

                      <MDBCollapse id='collapse19' isOpen={collapseID}>
                        <MDBCardBody className='rgba-black-light white-text z-depth-1'>
                          <p className='p-md-4 mb-0'>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                            ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
                            it squid single-origin coffee nulla assumenda shoreditch et.
                          </p>
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>
                  </MDBContainer>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCard>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default AccordionPage;
