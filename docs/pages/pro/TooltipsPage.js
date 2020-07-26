import React from 'react';
import { MDBTooltip, MDBContainer, MDBBtn } from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

const TooltipsPage = () => {
  const style = { display: 'inline-block', maxWidth: '50vh' };
  return (
    <MDBContainer>
      <DocsLink
        title='Tooltips'
        href='https://mdbootstrap.com/docs/react/advanced/tooltips/'
      />

      <SectionContainer header='Material tooltips'>
        Tight pants next level keffiyeh{' '}
        <MDBTooltip
          material
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> you probably </span>
          <span>Default tooltip</span>
        </MDBTooltip>
        haven't heard of them. Photo booth beard raw denim letterpress vegan
        messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie
        sustainable quinoa 8-bit american apparel{' '}
        <MDBTooltip
          material
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> have a </span>
          <span>Another tooltip</span>
        </MDBTooltip>{' '}
        terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
        thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
        cleanse vegan chambray. A really ironic artisan
        <MDBTooltip
          material
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> whatever keytar </span>
          <span>Another one here too</span>
        </MDBTooltip>
        , scenester farm-to-table banksy Austin{' '}
        <MDBTooltip
          material
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> twitter handle </span>
          <span>The last tip!</span>
        </MDBTooltip>{' '}
        freegan cred raw denim single-origin coffee viral.
      </SectionContainer>

      <SectionContainer header='Four tooltips' className='text-center p-5'>
        <MDBTooltip material placement='top'>
          <MDBBtn color='secondary'>Top tooltip</MDBBtn>
          <div>MDBTooltip on top</div>
        </MDBTooltip>

        <div>
          <div style={style} className='text-right'>
            <MDBTooltip material placement='left'>
              <MDBBtn color='secondary'>Left tooltip</MDBBtn>
              <div>MDBTooltip on left</div>
            </MDBTooltip>
          </div>

          <div style={style} className='text-left'>
            <MDBTooltip material placement='right'>
              <MDBBtn color='secondary'>Right tooltip</MDBBtn>
              <div>MDBTooltip on right</div>
            </MDBTooltip>
          </div>
        </div>

        <MDBTooltip material placement='bottom'>
          <MDBBtn color='secondary'>Bottom tooltip</MDBBtn>
          <div>MDBTooltip on bottom</div>
        </MDBTooltip>
      </SectionContainer>

      <SectionContainer header='Custom HTML' className='text-center p-5'>
        <MDBTooltip material placement='bottom' clickable>
          <MDBBtn outline rounded>Tooltip with HTML</MDBBtn>
          <span><em>Tooltip</em> <u>with</u> <b>HTML</b></span>
        </MDBTooltip>
      </SectionContainer>


      <SectionContainer header='Email tooltips' className='text-center p-5'>
        <MDBTooltip email placement='top'>
          <MDBBtn color='info'>Top tooltip</MDBBtn>
          <div>MDBTooltip on top</div>
        </MDBTooltip>

        <div>
          <div style={style} className='text-right'>
            <MDBTooltip email placement='left'>
              <MDBBtn color='info'>Left tooltip</MDBBtn>
              <div>MDBTooltip on left</div>
            </MDBTooltip>
          </div>

          <div style={style} className='text-left'>
            <MDBTooltip email placement='right'>
              <MDBBtn color='info'>Right tooltip</MDBBtn>
              <div>MDBTooltip on right</div>
            </MDBTooltip>
          </div>
        </div>

        <MDBTooltip email placement='bottom'>
          <MDBBtn color='info'>Bottom tooltip</MDBBtn>
          <div>MDBTooltip on bottom</div>
        </MDBTooltip>
      </SectionContainer>

      <SectionContainer header='Smaller tooltips' className='text-center p-5'>
        <MDBTooltip material sm placement='top'>
          <MDBBtn color='secondary' size='sm'>Top tooltip</MDBBtn>
          <div>MDBTooltip on top</div>
        </MDBTooltip>

        <div>
          <div style={style} className='text-right'>
            <MDBTooltip material sm placement='left'>
              <MDBBtn color='secondary' size='sm'>Left tooltip</MDBBtn>
              <div>MDBTooltip on left</div>
            </MDBTooltip>
          </div>

          <div style={style} className='text-left'>
            <MDBTooltip material sm placement='right'>
              <MDBBtn color='secondary' size='sm'>Right tooltip</MDBBtn>
              <div>MDBTooltip on right</div>
            </MDBTooltip>
          </div>
        </div>

        <MDBTooltip material sm placement='bottom'>
          <MDBBtn color='secondary' size='sm'>Bottom tooltip</MDBBtn>
          <div>MDBTooltip on bottom</div>
        </MDBTooltip>
      </SectionContainer>
    </MDBContainer>
  );
};

export default TooltipsPage;
