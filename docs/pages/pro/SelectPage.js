import React, { Component } from 'react';
import {
  MDBBtn,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class SelectPage extends Component {
  state = {
    basicOptions: [],
    basicOutlineOptions: [],
    searchOptions: [],
    multipleOptions: [],
    colorfulOptions: [],
    selectAllOptions: [],
    withoutLabelOptions: [],
    requiredOptions: [],
    dynamicOptions: [],
    submitBtnColor: 'primary',
    disabled: true
  };

  componentDidMount() {
    this.setState({
      basicOptions: this.createOptions(),
      basicOutlineOptions: this.createOptions(),
      searchOptions: this.createOptions(),
      multipleOptions: this.createOptions(),
      colorfulOptions: this.createOptions(),
      selectAllOptions: this.createOptions(),
      withoutLabelOptions: this.createOptions(),
      requiredOptions: this.createOptions()
    });
  }

  createOptions = () => [
    {
      checked: false,
      disabled: false,
      text: 'Option One',
      value: '1'
    },
    {
      checked: false,
      disabled: false,
      text: 'Option Two',
      value: '2'
    },
    {
      checked: false,
      disabled: false,
      text: 'Option Three',
      value: '3'
    },
    {
      checked: false,
      disabled: false,
      text: 'Option Four',
      value: '4'
    }
  ];

  // build function for your selects, and pass it as getValue property to reed the select's value
  getValueOfSelect = value => {
    console.log(value);
  };

  removeOption = () => {
    const { dynamicOptions } = this.state;
    this.setState({
      dynamicOptions: dynamicOptions.slice(0, -1)
    });
  };

  addOption = () => {
    const { dynamicOptions } = this.state;
    const dynamicOptionsArr = [...dynamicOptions];
    const newOption = {
      checked: true,
      text: `Option ${dynamicOptionsArr.length + 1}`,
      value: `${dynamicOptionsArr.length + 1}`
    };

    this.setState({
      dynamicOptions: [...dynamicOptions, newOption]
    });
  };

  handleSubmitBtnColor = value => {
    this.setState({ submitBtnColor: value.length ? 'success' : 'primary' });
  };

  handleDisabled = () => {
    const { dynamicOptions } = this.state;
    this.setState({
      disabled: !dynamicOptions.length
    });
  };

  render() {
    const {
      basicOptions,
      basicOutlineOptions,
      searchOptions,
      multipleOptions,
      colorfulOptions,
      selectAllOptions,
      withoutLabelOptions,
      requiredOptions,
      submitBtnColor,
      dynamicOptions,
      disabled
    } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Select'
          href='https://mdbootstrap.com/docs/react/forms/select/'
        />

        <SectionContainer title='Controlled Select' header='Basic example'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                color='primary'
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={basicOptions}
                label='Basic example'
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Basic outline example' flexCenter>
          <MDBCol md='6'>
            <MDBSelect
              outline
              color='primary'
              getValue={this.getValueOfSelect}
              getTextContent={this.getValueOfSelect}
              options={basicOutlineOptions}
              label='Basic outline example'
            />
          </MDBCol>
        </SectionContainer>

        <SectionContainer header='Search enabled'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                search
                color='primary'
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={searchOptions}
                label='Search enabled'
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Multiple select'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                search
                multiple
                color='primary'
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={multipleOptions}
                label='Multiple select'
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Colorful select'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                search
                multiple
                color='secondary'
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={colorfulOptions}
                label='Colorful select'
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Select All option'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                selectAll
                search
                multiple
                color='secondary'
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={selectAllOptions}
                label='Select All option'
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Without label'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                outline
                search
                multiple
                color='secondary'
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={withoutLabelOptions}
                selected='Choose your option'
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Without color'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                selectAll
                multiple
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                options={withoutLabelOptions}
                label='Without color'
                selected='Choose your option'
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='With required property'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <form onSubmit={e => e.preventDefault()}>
                <MDBSelect
                  selectAll
                  search
                  multiple
                  color='primary'
                  getValue={this.handleSubmitBtnColor}
                  getTextContent={this.getValueOfSelect}
                  options={requiredOptions}
                  label='With required property'
                  required
                />
                <MDBCol className='d-flex justify-content-center'>
                  <MDBBtn type='submit' color={submitBtnColor}>
                    Submit
                  </MDBBtn>
                </MDBCol>
              </form>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Dynamically change state'>
          <MDBRow className='d-flex justify-content-center flex-column align-items-center'>
            <MDBCol md='6'>
              <MDBSelect
                selectAll
                outline
                search
                multiple
                color='secondary'
                getValue={this.handleDisabled}
                getTextContent={this.getValueOfSelect}
                options={dynamicOptions}
                selected='Choose your option'
                label='Dynamically change state'
              />
            </MDBCol>
            <MDBCol md='6' className='d-flex justify-content-center'>
              <MDBBtn onClick={this.addOption} color='success'>
                Add option
              </MDBBtn>
              <MDBBtn
                onClick={this.removeOption}
                color='danger'
                disabled={disabled}
              >
                Remove option
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <hr className='my-5 mdb-color lighten-3' />

        <SectionContainer title='Uncontrolled Select' header='Basic example'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                label='Example label'
              >
                <MDBSelectInput selected='Choose your option' />
                <MDBSelectOptions>
                  <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                  <MDBSelectOption>Option nr 1</MDBSelectOption>
                  <MDBSelectOption>Option nr 2</MDBSelectOption>
                  <MDBSelectOption>Option nr 3</MDBSelectOption>
                  <MDBSelectOption>Option nr 4</MDBSelectOption>
                  <MDBSelectOption selected>Option nr 5</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Basic outline example'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='6'>
              <MDBSelect
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                label='Example label'
                outline
              >
                <MDBSelectInput />
                <MDBSelectOptions>
                  <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                  <MDBSelectOption>Option nr 1</MDBSelectOption>
                  <MDBSelectOption>Option nr 2</MDBSelectOption>
                  <MDBSelectOption>Option nr 3</MDBSelectOption>
                  <MDBSelectOption>Option nr 4</MDBSelectOption>
                  <MDBSelectOption>Option nr 5</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Multiple select'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect
                getValue={this.getValueOfSelect}
                getTextContent={this.getValueOfSelect}
                label='Example label'
                multiple
              >
                <MDBSelectInput selected='Choose your option' />
                <MDBSelectOptions search>
                  <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                  <MDBSelectOption value='value nr 1'>
                    Option nr 1
                  </MDBSelectOption>
                  <MDBSelectOption selected value='value nr 2'>
                    Option nr 2
                  </MDBSelectOption>
                  <MDBSelectOption value='value nr 3'>
                    Option nr 3
                  </MDBSelectOption>
                  <MDBSelectOption value='value nr 4'>
                    Option nr 4
                  </MDBSelectOption>
                  <MDBSelectOption value='value nr 5'>
                    Option nr 5
                  </MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Colorful select'>
          <MDBRow className='d-flex justify-content-center '>
            <MDBCol md='6'>
              <MDBSelect
                getValue={this.getValueOfSelect}
                color='primary'
                label='Blue select'
              >
                <MDBSelectInput selected='Choose your option' />
                <MDBSelectOptions>
                  <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                  <MDBSelectOption value='value nr 1'>
                    Option nr 1
                  </MDBSelectOption>
                  <MDBSelectOption value='value nr 2'>
                    Option nr 2
                  </MDBSelectOption>
                  <MDBSelectOption value='value nr 3'>
                    Option nr 3
                  </MDBSelectOption>
                  <MDBSelectOption value='value nr 4'>
                    Option nr 4
                  </MDBSelectOption>
                  <MDBSelectOption value='value nr 5'>
                    Option nr 5
                  </MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='MDBSelect with icons'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect getValue={this.getValueOfSelect} label='Example label'>
                <MDBSelectInput selected='Choose your option' />
                <MDBSelectOptions search>
                  <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                  <MDBSelectOption
                    value='User nr 1'
                    icon='https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg'
                  >
                    Option nr 1
                  </MDBSelectOption>
                  <MDBSelectOption
                    value='User nr 2'
                    icon='https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
                  >
                    Option nr 2
                  </MDBSelectOption>
                  <MDBSelectOption
                    value='User nr 3'
                    icon='https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg'
                  >
                    Option nr 3
                  </MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Options groups'>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol md='6'>
              <MDBSelect getValue={this.getValueOfSelect} label='Example label'>
                <MDBSelectInput selected='Choose your option' />
                <MDBSelectOptions>
                  <MDBSelectOption disabled>team 1</MDBSelectOption>
                  <MDBSelectOption>Option nr 1</MDBSelectOption>
                  <MDBSelectOption>Option nr 2</MDBSelectOption>
                  <MDBSelectOption separator>team 2</MDBSelectOption>
                  <MDBSelectOption>Option nr 3</MDBSelectOption>
                  <MDBSelectOption>Option nr 4</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <div style={{ marginTop: '175px' }} />
      </MDBContainer>
    );
  }
}

export default SelectPage;
