import React, { Component } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBFormInline,
  MDBSwitch,
  MDBFileInput,
  MDBRangeInput,
  MDBCol,
  MDBRow
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class InputPage extends Component {
  state = {
    radioSet1: false,
    radioSet2: false,
    radioSet3: false,
    checkbox: true,
    switchInput: true
  };

  fileInputHandler = files => {
    console.log(files);
  };

  radioInputHandler = (setNr, radioNr) => () => {
    const radioSetNr = `radioSet${setNr}`;
    this.setState({
      [radioSetNr]: radioNr
    });
  };

  handleCheckboxChange = e => {
    const { checkbox } = this.state;
    const { checked, value } = e.target;
    this.setState({ checkbox: !checkbox });
    console.log(`${value} checked? ${checked}`);
  };

  handleSwitchChange = value => {
    console.log(value);
    this.setState({ switchInput: value });
  };

  handleChange = e => {
    const { checked, value } = e.target;
    console.log(`${value} checked? ${checked}`);
  };

  handleRangeChange = value => {
    console.log(`range value: ${value}`);
  };

  render() {
    const {
      radioSet1,
      radioSet2,
      radioSet3,
      checkbox,
      switchInput
    } = this.state;
    return (
      <MDBContainer className='mt-5'>
        <DocsLink
          title='Inputs'
          href='https://mdbootstrap.com/docs/react/forms/inputs/'
        />
        <MDBContainer className='my-5'>
          <SectionContainer title='Character counter' noBorder>
            <MDBRow>
              <MDBCol md='6' tag='section'>
                <h4 className='mb-3'>Basic examples</h4>
                <MDBContainer className='border p-3'>
                  <MDBInput counter />
                </MDBContainer>
              </MDBCol>

              <MDBCol md='6' tag='section'>
                <h4 className='mb-3'>With max length</h4>
                <MDBContainer className='border p-3'>
                  <MDBInput counter={15} />
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </SectionContainer>

          <SectionContainer title='Checkboxes' noBorder>
            <MDBRow>
              <MDBCol md='6' tag='section'>
                <h4 className='mb-3'>Basic examples</h4>
                <MDBContainer className='border p-3'>
                  <MDBInput
                    value='Classic checkbox'
                    label='Classic checkbox'
                    checked={checkbox}
                    onChange={this.handleCheckboxChange}
                    type='checkbox'
                    id='checkbox'
                    containerClass='my-3'
                  />
                  <MDBInput
                    label='Filled-in checkbox'
                    filled
                    type='checkbox'
                    id='checkbox2'
                    containerClass='my-3'
                  />
                </MDBContainer>
              </MDBCol>

              <MDBCol md='6' tag='section'>
                <h4 className='mb-3'>Disabled checkboxes</h4>
                <MDBContainer className='border p-3'>
                  <MDBInput
                    label='Classic checkbox'
                    disabled
                    type='checkbox'
                    id='checkbox3'
                    containerClass='my-3'
                  />
                  <MDBInput
                    label='Filled-in checkbox'
                    filled
                    disabled
                    type='checkbox'
                    id='checkbox4'
                    containerClass='my-3'
                  />
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </SectionContainer>

          <SectionContainer header='Inline checkboxes'>
            <MDBFormInline>
              <MDBInput
                label='Classic checkbox'
                labelClass='mr-5'
                type='checkbox'
                value='example'
                id='checkbox5'
                onChange={this.handleChange}
                containerClass='my-3'
              />
              <MDBInput
                label='Filled-in checkbox'
                filled
                labelClass='mr-5'
                value='example2'
                type='checkbox'
                id='checkbox6'
                onChange={this.handleChange}
                containerClass='my-3'
              />
              <MDBInput
                label='Classic checkbox'
                labelClass='mr-5'
                type='checkbox'
                value='example3'
                id='checkbox7'
                onChange={this.handleChange}
                containerClass='my-3'
              />
            </MDBFormInline>
          </SectionContainer>

          <hr className='my-5' />

          <SectionContainer title='Radio buttons' noBorder>
            <MDBRow>
              <MDBCol md='6' tag='section'>
                <h4 className='mb-3'>Basic examples</h4>
                <MDBContainer className='border p-3'>
                  <MDBInput
                    value='Option 1'
                    onChange={this.radioInputHandler(1, 1)}
                    checked={radioSet1 === 1}
                    label='Option 1'
                    type='radio'
                    id='radio1'
                    containerClass='my-3'
                  />
                  <MDBInput
                    value='Option 2'
                    onChange={this.radioInputHandler(1, 2)}
                    checked={radioSet1 === 2}
                    label='Option 2'
                    type='radio'
                    id='radio2'
                    containerClass='my-3'
                  />
                  <MDBInput
                    value='Option 3'
                    onChange={this.radioInputHandler(1, 3)}
                    checked={radioSet1 === 3}
                    label='Option 3'
                    type='radio'
                    id='radio3'
                    containerClass='my-3'
                  />
                </MDBContainer>
              </MDBCol>

              <MDBCol md='6' tag='section'>
                <h4 className='mb-3'>Radio buttons with gap</h4>
                <MDBContainer className='border p-3'>
                  <MDBInput
                    gap
                    onChange={this.radioInputHandler(2, 4)}
                    checked={radioSet2 === 4}
                    label='Option 1'
                    type='radio'
                    id='radio4'
                    containerClass='my-3'
                  />
                  <MDBInput
                    gap
                    onChange={this.radioInputHandler(2, 5)}
                    checked={radioSet2 === 5}
                    label='Option 2'
                    type='radio'
                    id='radio5'
                    containerClass='my-3'
                  />
                  <MDBInput
                    gap
                    onChange={this.radioInputHandler(2, 6)}
                    checked={radioSet2 === 6}
                    label='Option 3'
                    type='radio'
                    id='radio6'
                    containerClass='my-3'
                  />
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </SectionContainer>

          <SectionContainer header='Inline radio buttons'>
            <MDBFormInline>
              <MDBInput
                onChange={this.radioInputHandler(3, 7)}
                checked={radioSet3 === 7}
                label='Option 1'
                labelClass='mr-5'
                type='radio'
                id='radio7'
              />
              <MDBInput
                onChange={this.radioInputHandler(3, 8)}
                checked={radioSet3 === 8}
                label='Option 2'
                labelClass='mr-5'
                type='radio'
                id='radio8'
              />
              <MDBInput
                onChange={this.radioInputHandler(3, 9)}
                checked={radioSet3 === 9}
                label='Option 3'
                labelClass='mr-5'
                type='radio'
                id='radio9'
              />
            </MDBFormInline>
          </SectionContainer>

          <hr className='my-5' />

          <SectionContainer header='Switch'>
            <h4 className='mb-3'>Basic example</h4>
            <MDBSwitch
              checked={switchInput}
              getValue={this.handleSwitchChange}
              labelLeft='No'
              labelRight='Yes'
            />
            <h4 className='mt-5 mb-3'>Disabled</h4>
            <MDBSwitch disabled />
          </SectionContainer>

          <hr className='my-5' />

          <SectionContainer title='File input'>
            <h4 className='mb-3'>Basic example</h4>
            <MDBFileInput getValue={this.fileInputHandler} />

            <h4 className='mt-5 mb-3'>Basic example with reset button</h4>
            <MDBFileInput reset getValue={this.fileInputHandler} />

            <h4 className='mt-5 mb-3'>Multiple files</h4>
            <MDBFileInput
              getValue={this.fileInputHandler}
              multiple
              btnColor='info'
              btn-size='sm'
            />
          </SectionContainer>

          <hr className='my-5' />

          <SectionContainer title='Range input'>
            <MDBRangeInput
              tag='form'
              getValue={this.handleRangeChange}
              min={0}
              max={100}
              value={20}
            />
          </SectionContainer>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default InputPage;
