import React from 'react';
import {
  MDBContainer,
  MDBInputGroup,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBIcon,
  MDBCol,
  MDBInput,
  MDBRow
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class InputGroupPage extends React.Component {
  render() {
    return (
      <MDBContainer className='mb-5'>
        <DocsLink
          title='Inputs Group'
          href='https://mdbootstrap.com/docs/react/forms/input-group/'
        />
        <SectionContainer title='Examples & customizations'>
          <MDBRow>
            <MDBCol md='6'>
              <MDBInputGroup
                material
                hint='Search for...'
                prepend={
                  <MDBBtn gradient='peach' className='m-0'>
                    GO!
                  </MDBBtn>
                }
              />
            </MDBCol>
            <MDBCol md='6'>
              <MDBInputGroup
                material
                hint='Search for...'
                append={
                  <MDBBtn gradient='aqua' className='m-0'>
                    GO!
                  </MDBBtn>
                }
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='6'>
              <MDBInputGroup
                material
                hint='Search for...'
                prepend={
                  <MDBBtn outline color='warning' className='m-0'>
                    GO!
                  </MDBBtn>
                }
              />
            </MDBCol>
            <MDBCol md='6'>
              <MDBInputGroup
                material
                hint='Search for...'
                append={
                  <MDBBtn outline color='success' className='m-0'>
                    GO!
                  </MDBBtn>
                }
              />
            </MDBCol>
          </MDBRow>

          <MDBInputGroup
            material
            containerClassName='mb-3 mt-0'
            hint='Product name'
            ariaLabel='Product name'
            prepend={
              <MDBBtn
                rounded
                color='danger'
                size='md'
                className='m-0 z-depth-0'
              >
                HATE IT
              </MDBBtn>
            }
            append={
              <MDBBtn
                rounded
                color='success'
                size='md'
                className='m-0 z-depth-0'
              >
                LOVE IT
              </MDBBtn>
            }
          />
          <MDBInputGroup
            material
            containerClassName='mb-3 mt-0'
            hint='Product name'
            prepend={
              <span>
                <MDBBtn rounded color='indigo' size='md' className='m-0'>
                  HATE IT
                </MDBBtn>
              </span>
            }
            append={
              <span>
                <MDBBtn rounded color='pink' size='md' className='m-0'>
                  LOVE IT
                </MDBBtn>
              </span>
            }
          />
          <MDBInputGroup
            material
            containerClassName='mb-3 mt-0'
            hint='Product name'
            prepend={
              <span>
                <MDBBtn
                  rounded
                  outline
                  color='default'
                  size='md'
                  className='m-0'
                >
                  HATE IT
                </MDBBtn>
              </span>
            }
            append={
              <span>
                <MDBBtn rounded outline color='pink' size='md' className='m-0'>
                  LOVE IT
                </MDBBtn>
              </span>
            }
          />
        </SectionContainer>

        <SectionContainer title='Checkboxes and radios' noBorder>
          <MDBRow>
            <MDBCol md='6' tag='section'>
              <SectionContainer>
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <div className='input-group-text'>
                      <MDBInput label type='checkbox' id='checkbox1' />
                    </div>
                  }
                />
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <div className='input-group-text'>
                      <MDBInput label filled type='checkbox' id='checkbox2' />
                    </div>
                  }
                />
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <div className='input-group-text'>
                      <MDBInput
                        label
                        type='radio'
                        id='exampleRadios1'
                        name='exampleRadios'
                      />
                    </div>
                  }
                />
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6' tag='section'>
              <SectionContainer>
                <MDBInputGroup
                  containerClassName='mb-3 mt-0'
                  material
                  prepend={
                    <div className='input-group-text md-addon'>
                      <MDBInput label type='checkbox' id='checkboxMaterial1' />
                    </div>
                  }
                />
                <MDBInputGroup
                  containerClassName='mb-3 mt-0'
                  material
                  prepend={
                    <div className='input-group-text md-addon'>
                      <MDBInput
                        label
                        filled
                        type='checkbox'
                        id='checkboxMaterial2'
                      />
                    </div>
                  }
                />
                <MDBInputGroup
                  containerClassName='mb-3'
                  material
                  prepend={
                    <div className='input-group-text md-addon'>
                      <MDBInput
                        label
                        type='radio'
                        id='exampleRadios2'
                        name='exampleRadios'
                      />
                    </div>
                  }
                />
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer title='Buttons with dropdowns'>
          <MDBInputGroup
            material
            containerClassName='mb-3 mt-0'
            prepend={
              <MDBDropdown>
                <MDBDropdownToggle
                  outline
                  color='secondary'
                  size='md'
                  className='m-0 px-3 z-depth-0'
                >
                  Dropdown <MDBIcon icon='caret-down' className='ml-1' />
                </MDBDropdownToggle>
                <MDBDropdownMenu color='secondary'>
                  <MDBDropdownItem>Action</MDBDropdownItem>
                  <MDBDropdownItem>Another Action</MDBDropdownItem>
                  <MDBDropdownItem>Something else here</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            }
          />

          <MDBInputGroup
            material
            containerClassName='mb-3 mt-0'
            append={
              <MDBDropdown>
                <MDBDropdownToggle
                  outline
                  color='info'
                  size='md'
                  className='m-0 px-3 z-depth-0'
                >
                  Dropdown <MDBIcon icon='caret-down' className='ml-1' />
                </MDBDropdownToggle>
                <MDBDropdownMenu color='info'>
                  <MDBDropdownItem>Action</MDBDropdownItem>
                  <MDBDropdownItem>Another Action</MDBDropdownItem>
                  <MDBDropdownItem>Something else here</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            }
          />
        </SectionContainer>

        <SectionContainer header='Segmented buttons'>
          <MDBInputGroup
            material
            containerClassName='mb-3 mt-0'
            prepend={
              <>
                <MDBBtn
                  color='elegant'
                  size='md'
                  className='m-0 px-3 py-2 z-depth-0 rounded-0'
                >
                  ACTION
                </MDBBtn>
                <MDBDropdown>
                  <MDBDropdownToggle
                    color='elegant'
                    size='md'
                    className='m-0 px-2 z-depth-1 rounded-0'
                  >
                    <MDBIcon icon='caret-down' />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu color='dark'>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </>
            }
          />

          <MDBInputGroup
            material
            containerClassName='mb-3 mt-0'
            append={
              <>
                <MDBBtn
                  color='ins'
                  size='md'
                  className='m-0 px-3 py-2 z-depth-0 rounded-0'
                >
                  ACTION
                </MDBBtn>
                <MDBDropdown>
                  <MDBDropdownToggle
                    color='ins'
                    size='md'
                    className='m-0 px-2 z-depth-1 rounded-0'
                  >
                    <MDBIcon icon='caret-down' />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu color='ins'>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </>
            }
          />
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default InputGroupPage;
