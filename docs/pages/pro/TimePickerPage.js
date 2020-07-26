import React, { Component } from 'react';
import {
  MDBTimePicker,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class TimePickerPage extends Component {
  state = {
    hours: 24,
    minutes: 0,
    dayTime: 'am'
  };

  getPickerValue = value => {
    console.log(value);
  };

  timeOne = () => {
    this.setState({
      hours: 7,
      minutes: 1,
      dayTime: 'am'
    });
  };

  timeTwo = () => {
    this.setState({
      hours: 21,
      minutes: 45
    });
  };

  timeThree = () => {
    this.setState({
      hours: 12,
      minutes: 34,
      dayTime: 'pm'
    });
  };

  render() {
    const { dayTime, hours, minutes } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Time Picker'
          href='https://mdbootstrap.com/docs/react/forms/time-picker/'
        />
        <SectionContainer header='Basic examples'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='3'>
              <MDBTimePicker
                id='timePicker'
                label='24hrs format'
                closeOnCancel
                cancelable
                clearable
                hours={hours}
                minutes={minutes}
                hoursFormat={24}
                getValue={this.getPickerValue}
              />
            </MDBCol>
            <MDBCol md='3'>
              <MDBTimePicker
                id='timePicker'
                label='12 hrs format'
                color='default'
                hours={hours}
                minutes={minutes}
                dayTime={dayTime}
                hoursFormat={12}
                getValue={this.getPickerValue}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='3' className='d-flex justify-content-center'>
              <MDBBtn onClick={() => this.timeOne()} rounded color='primary'>
                <MDBIcon icon='edit' className='mr-2' />
                7:01AM
              </MDBBtn>
            </MDBCol>
            <MDBCol md='3' className='d-flex justify-content-center'>
              <MDBBtn onClick={() => this.timeTwo()} rounded color='primary'>
                <MDBIcon icon='edit' className='mr-2' />
                21:45
              </MDBBtn>
            </MDBCol>
            <MDBCol md='3' className='d-flex justify-content-center'>
              <MDBBtn onClick={() => this.timeThree()} rounded color='primary'>
                <MDBIcon icon='edit' className='mr-2' />
                12:34PM
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default TimePickerPage;
