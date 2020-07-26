import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBRangeInput,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBIcon,
  MDBBadge,
  MDBBtn,
  MDBBox
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class SliderPage extends Component {
  state = {
    value: 0,
    changeValue: 50
  };

  handlePricingChange = value => {
    this.setState({ value });
  };

  handleChangeLog = changeValue => {
    console.log(changeValue);
  };

  handleChangeValue = () => {
    this.setState({
      changeValue: 20
    });
  };
  handleChangeValue1 = () => {
    this.setState({
      changeValue: 80
    });
  };

  render() {
    const { value, changeValue } = this.state;
    return (
      <MDBContainer className='my-5'>
        <DocsLink
          title='Slider'
          href='https://mdbootstrap.com/docs/react/forms/slider/'
        />

        <SectionContainer header='Basic examples'>
          <div className='my-3'>
            <input type='range' className='custom-range' id='customRange1' />
          </div>
          <MDBRangeInput
            min={0}
            max={100}
            value={changeValue}
            getValue={this.handleChangeLog}
          />
          <MDBBox display='flex' justifyContent='around' className='flex-wrap'>
            <MDBBtn onClick={this.handleChangeValue}>Change value to 20</MDBBtn>
            <MDBBtn onClick={this.handleChangeValue1}>
              Change value to 80
            </MDBBtn>
          </MDBBox>
        </SectionContainer>

        <SectionContainer
          header='With different width'
          className='d-flex flex-column'
        >
          <MDBRangeInput
            getValue={this.handleChange}
            min={0}
            max={100}
            value={50}
            formClassName='w-25'
          />
          <MDBRangeInput
            getValue={this.handleChange}
            min={0}
            max={100}
            value={50}
            formClassName='w-50'
          />
          <MDBRangeInput
            getValue={this.handleChange}
            min={0}
            max={100}
            value={50}
            formClassName='w-75'
          />
          <MDBRangeInput
            getValue={this.handleChange}
            min={0}
            max={100}
            value={50}
            formClassName='w-100'
          />
        </SectionContainer>

        <SectionContainer header='With span'>
          <MDBRow center>
            <span className='font-weight-bold indigo-text mr-2'>0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName='w-25'
            />
            <span className='font-weight-bold indigo-text ml-2'>100</span>
          </MDBRow>
          <MDBRow center>
            <span className='font-weight-bold blue-text mr-2'>0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName='w-50'
            />
            <span className='font-weight-bold blue-text ml-2'>100</span>
          </MDBRow>
          <MDBRow center>
            <span className='font-weight-bold purple-text mr-2'>0</span>
            <MDBRangeInput
              getValue={this.handleChange}
              min={0}
              max={100}
              value={50}
              formClassName='w-75'
            />
            <span className='font-weight-bold purple-text ml-2'>100</span>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Additional examples'>
          <MDBRow className='my-5' center>
            <MDBCol md='6'>
              <MDBCard>
                <MDBCardBody>
                  <h3 className='text-center font-weight-bold blue-text mt-3 mb-4 pb-4'>
                    <strong>Slide to see the pricing change</strong>
                  </h3>
                  <hr />
                  <MDBRow className='my-4' center>
                    <MDBRangeInput
                      min={0}
                      max={96}
                      value={0}
                      formClassName='w-75'
                      getValue={this.handlePricingChange}
                    />
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className='text-center pb-5' size='6'>
                      <h2>
                        <MDBBadge color='blue lighten-2' className='mb-4'>
                          You earn
                        </MDBBadge>
                      </h2>
                      <h2 className='display-4' style={{ color: '#0d47a1' }}>
                        <strong>${value}</strong>
                      </h2>
                    </MDBCol>
                    <MDBCol className='text-center pb-5' size='6'>
                      <h2>
                        <MDBBadge color='blue lighten-2' className='mb-4'>
                          Client pays
                        </MDBBadge>
                      </h2>
                      <h2 className='display-4' style={{ color: '#0d47a1' }}>
                        <strong>${223 + +value}</strong>
                      </h2>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md='6'>
              <MDBCard>
                <MDBCardImage
                  top
                  src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg'
                  overlay='white-slight'
                  hover
                  waves
                  alt='Card image cap'
                />
                <MDBCardBody>
                  <MDBCardTitle>Choose your slider option</MDBCardTitle>
                  <hr />
                  <MDBRow className='my-4' center>
                    <MDBIcon
                      className='font-weight-bold blue-text mr-2 mt-1'
                      icon='thumbs-down'
                    />
                    <MDBRangeInput
                      min={0}
                      max={100}
                      value={50}
                      formClassName='w-75'
                    />
                    <MDBIcon
                      className='font-weight-bold blue-text ml-2 mt-1'
                      icon='thumbs-up'
                    />
                  </MDBRow>
                  <MDBRow className='my-4' center>
                    <MDBIcon
                      className='font-weight-bold indigo-text mr-2 mt-1'
                      icon='dollar-sign'
                    />
                    <MDBRangeInput
                      min={0}
                      max={100}
                      value={50}
                      formClassName='w-75'
                    />
                    <MDBIcon
                      className='font-weight-bold indigo-text ml-2 mt-1'
                      icon='euro-sign'
                    />
                  </MDBRow>
                  <MDBRow className='my-4' center>
                    <MDBIcon
                      className='font-weight-bold indigo-text mr-2 mt-1'
                      icon='minus'
                    />
                    <MDBRangeInput
                      min={0}
                      max={100}
                      value={50}
                      formClassName='w-75'
                    />
                    <MDBIcon
                      className='font-weight-bold indigo-text ml-2 mt-1'
                      icon='plus'
                    />
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default SliderPage;
