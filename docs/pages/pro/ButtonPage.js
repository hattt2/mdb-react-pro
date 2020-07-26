import React from 'react';
import {
  MDBBtn,
  MDBIcon,
  MDBBtnFixed,
  MDBBtnFixedItem,
  MDBContainer
} from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

class ButtonPage extends React.Component {
  state = {
    buttonStyle: {
      transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)',
      opacity: '0'
    }
  };

  onHover = () => {
    this.setState({
      buttonStyle: {
        transform: 'scaleY(1) scaleX(1) translateY(0) translateX(0)',
        opacity: '1'
      }
    });
  };

  handleClick = () => {
    console.log('Clicked');
  };

  onMouseLeave = () => {
    this.setState({
      buttonStyle: {
        transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)',
        opacity: '0'
      }
    });
  };

  render() {
    const { buttonStyle } = this.state;

    return (
      <MDBContainer>
        <DocsLink
          title='Buttons'
          href='https://mdbootstrap.com/docs/react/components/buttons/'
        />

        <div className='container-fluid mt-5'>
          <SectionContainer
            header='Rounded default'
            className='d-flex justify-content-center flex-wrap'
          >
            <MDBBtn rounded>Rounded Default</MDBBtn>
            <MDBBtn color='primary' rounded>
              Rounded Primary
            </MDBBtn>
            <MDBBtn color='secondary' rounded>
              Rounded Secondary
            </MDBBtn>
            <MDBBtn color='success' rounded>
              Rounded Success
            </MDBBtn>
            <MDBBtn color='info' rounded>
              Rounded Info
            </MDBBtn>
            <MDBBtn color='warning' rounded>
              Rounded Warning
            </MDBBtn>
          </SectionContainer>

          <SectionContainer
            header='Rounded outline'
            className='d-flex justify-content-center flex-wrap'
          >
            <MDBBtn rounded outline>
              Rounded outline default
            </MDBBtn>
            <MDBBtn color='primary' rounded outline>
              Rounded outline Primary
            </MDBBtn>
            <MDBBtn color='secondary' rounded outline>
              Rounded outline Secondary
            </MDBBtn>
            <MDBBtn color='success' rounded outline>
              Rounded outline Success
            </MDBBtn>
            <MDBBtn color='info' rounded outline>
              Rounded outline Info
            </MDBBtn>
            <MDBBtn color='warning' rounded outline>
              Rounded outline Warning
            </MDBBtn>
          </SectionContainer>

          <SectionContainer
            header='Gradient'
            className='d-flex justify-content-center flex-wrap'
          >
            <MDBBtn rounded gradient='peach'>
              Gradient Peach
            </MDBBtn>
            <MDBBtn rounded gradient='purple'>
              Gradient Purple
            </MDBBtn>
            <MDBBtn rounded gradient='blue'>
              Gradient Blue
            </MDBBtn>
            <MDBBtn rounded gradient='aqua'>
              Gradient Aqua
            </MDBBtn>
          </SectionContainer>

          <SectionContainer
            header='Flat'
            className='d-flex justify-content-center'
          >
            <MDBBtn flat>Flat MDBBtn</MDBBtn>
          </SectionContainer>

          <SectionContainer
            header='Floating'
            className='d-flex justify-content-center align-items-center'
          >
            <MDBBtn tag='a' floating gradient='purple' size='lg'>
              <MDBIcon icon='bolt' />
            </MDBBtn>
            <MDBBtn tag='a' floating gradient='peach'>
              <MDBIcon icon='leaf' />
            </MDBBtn>
            <MDBBtn tag='a' floating gradient='blue' size='sm'>
              <MDBIcon icon='star' />
            </MDBBtn>
          </SectionContainer>

          <section style={{ height: '1000px' }}>
            <MDBBtnFixed
              onMouseEnter={this.onHover}
              onMouseLeave={this.onMouseLeave}
              floating
              size='lg'
              color='red'
              icon='pencil-alt'
              style={{ bottom: '45px', right: '24px' }}
            >
              <MDBBtnFixedItem
                buttonStyle={buttonStyle}
                color='red'
                icon='star'
              />
              <MDBBtnFixedItem
                buttonStyle={buttonStyle}
                color='yellow'
                icon='user'
              />
              <MDBBtnFixedItem
                buttonStyle={buttonStyle}
                color='green'
                icon='envelope'
              />
              <MDBBtnFixedItem
                buttonStyle={buttonStyle}
                color='blue'
                icon='shopping-cart'
                onClick={this.handleClick}
              />
            </MDBBtnFixed>
          </section>
        </div>
      </MDBContainer>
    );
  }
}

export default ButtonPage;
