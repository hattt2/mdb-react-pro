import React from 'react';
import { MDBSticky, MDBStickyContent, MDBContainer } from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';

const StickyPage = () => {
  const wrapper = { height: '3500px', backgroundColor: 'rgba(0,0,0,.15)' };

  const background = {
    width: '100%',
    backgroundColor: '#fff',
    height: '3000px',
    lineHeight: '1.5'
  };
  const headerStyle = {
    width: '100%',
    background: '#2f93ce',
    color: '#fff',
    padding: '10px 20px',
    margin: '0'
  };
  const mainWrapper = { width: 960, margin: '0 auto' };
  const sidebar = { float: 'left', width: '230px', padding: '10px 15px' };
  const article = {
    width: '458px',
    padding: '0 20px',
    borderLeft: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    float: 'left'
  };

  window.addEventListener('scroll', function(e) {
    const nav = document.querySelector('nav');
    if (document.querySelector('.stickyContentDemo')) {
      
      nav.style.transition = 'background 0.5s ease-in-out, padding 0.5s ease-in-out,top 1s';
      if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
      ) {
        nav.style.top = '-65px';
      } else {
        nav.style.top = '0';
      }
    } else {
      nav.style.top = '0';
    }
  });

  return (
    <MDBContainer>
      <DocsLink
        title='Sticky Content'
        href='https://mdbootstrap.com/docs/react/advanced/sticky/'
      />
      <SectionContainer header='Demo' className='stickyContentDemo'>
        <div style={wrapper} className='mt-4'>
          <div style={background}>
            <div style={mainWrapper}>
              <MDBStickyContent style={{ background: '#fff', height: '465px' }}>
                <MDBSticky>
                  {({ style }) => {
                    return (
                      <div
                        style={{
                          ...style
                        }}
                      >
                        <div style={headerStyle}>
                          <h1>MDBSticky Content demo</h1>
                          <h4>Scroll down to see the effect</h4>
                        </div>
                      </div>
                    );
                  }}
                </MDBSticky>
                <div style={sidebar}>
                  <h2>Static Widget</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum luctus eros sed pretium. Proin turpis odio,
                    viverra et tincidunt nec, tincidunt sed nisl.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum luctus eros sed pretium.
                  </p>
                </div>
                <div style={article}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vestibulum lacus sed velit luctus tempus. Ut bibendum
                    gravida rutrum. Phasellus et ipsum id ante interdum laoreet.
                    Vivamus pharetra tortor sed libero interdum at volutpat arcu
                    cursus. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia Curae; Maecenas porta tempor
                    ullamcorper. Curabitur quis elit nisl. In tincidunt, purus
                    eget commodo pretium, libero mauris egestas sem, in
                    vestibulum sem lacus ac odio. Donec pharetra tristique
                    nulla, non scelerisque mauris auctor in. Sed elit mauris,
                    pellentesque sed iaculis id, condimentum eget sem. Maecenas
                    at enim mi. Duis non nunc justo, vitae tristique purus.
                    Quisque sagittis convallis elementum.
                  </p>
                </div>
                <div style={sidebar}>
                  <h2>Static Widget</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum luctus eros sed pretium. Proin turpis odio,
                    viverra et tincidunt nec, tincidunt sed nisl.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum luctus eros sed pretium.
                  </p>
                </div>
              </MDBStickyContent>
              <div style={sidebar}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  interdum luctus eros sed pretium. Proin turpis odio, viverra
                  et tincidunt nec, tincidunt sed nisl.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  interdum luctus eros sed pretium. Proin turpis odio, viverra
                  et tincidunt nec, tincidunt sed nisl.
                </p>
                <MDBStickyContent style={{ height: '2200px' }}>
                  <MDBSticky>
                    {({
                      isSticky,
                      wasSticky,
                      style,
                      distanceFromTop,
                      distanceFromBottom,
                      calculatedHeight
                    }) => {
                      return (
                        <div
                          style={{
                            ...style
                          }}
                        >
                          <div style={headerStyle}>
                            <h2>MDBSticky Widget</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Etiam interdum luctus eros sed pretium.
                              Proin turpis odio, viverra et tincidunt nec,
                              tincidunt sed nisl.
                            </p>
                          </div>
                        </div>
                      );
                    }}
                  </MDBSticky>
                  <h2 className='mt-3'>Static Widget</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum luctus eros sed pretium. Proin turpis odio,
                    viverra et tincidunt nec, tincidunt sed nisl.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum luctus eros sed pretium. Proin turpis odio,
                    viverra et tincidunt nec, tincidunt sed nisl.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum luctus eros sed pretium. Proin turpis odio,
                    viverra et tincidunt nec, tincidunt sed nisl.
                  </p>
                </MDBStickyContent>
              </div>
              <div style={article}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vestibulum lacus sed velit luctus tempus. Ut bibendum gravida
                  rutrum. Phasellus et ipsum id ante interdum laoreet. Vivamus
                  pharetra tortor sed libero interdum at volutpat arcu cursus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Maecenas porta tempor
                  ullamcorper. Curabitur quis elit nisl. In tincidunt, purus
                  eget commodo pretium, libero mauris egestas sem, in vestibulum
                  sem lacus ac odio. Donec pharetra tristique nulla, non
                  scelerisque mauris auctor in. Sed elit mauris, pellentesque
                  sed iaculis id, condimentum eget sem. Maecenas at enim mi.
                  Duis non nunc justo, vitae tristique purus. Quisque sagittis
                  convallis elementum.
                </p>

                <p>
                  Donec sed lectus tellus. Cras felis leo, imperdiet a interdum
                  in, vestibulum eu quam. Donec elit est, interdum eget mattis
                  quis, semper ac est. Nam dignissim ultrices risus, a ornare
                  justo pretium vitae. Quisque vitae pellentesque mauris. Cras
                  consectetur laoreet adipiscing. Morbi placerat, elit et
                  dapibus vestibulum, ipsum diam pellentesque metus, eu
                  tincidunt tellus elit in quam. Mauris quis accumsan urna.
                  Proin commodo sapien volutpat lectus ultricies varius. Duis
                  elit enim, dapibus nec convallis id, egestas non neque. Sed a
                  libero eu dolor ultrices ultricies a sit amet nulla.
                </p>

                <p>
                  In hac habitasse platea dictumst. Nulla a velit dolor.
                  Vestibulum in purus libero. Donec et orci libero. Proin eget
                  lacinia nisi. Proin eget pretium nisi. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Suspendisse purus diam,
                  adipiscing quis ultrices in, fringilla non neque. Integer et
                  lectus lectus, vel congue massa. Duis tincidunt ipsum non quam
                  bibendum et lacinia purus viverra. Etiam tortor est, volutpat
                  vel ultricies a, aliquet et augue. Vivamus sed nulla enim, vel
                  egestas tortor.
                </p>

                <p>
                  Cras eu ipsum ac erat convallis gravida. Donec porta consequat
                  odio, id pharetra augue volutpat vitae. Etiam ut volutpat dui.
                  Vestibulum eu risus leo. Ut quis nisl in magna gravida feugiat
                  in vel libero. Donec felis nunc, fermentum quis luctus
                  elementum, vulputate quis turpis. Vestibulum erat arcu,
                  feugiat eu eleifend et, pretium et enim. Integer dignissim
                  nunc ac velit pharetra quis laoreet ipsum varius. Praesent
                  dictum, elit tempus aliquam vulputate, lorem est euismod
                  neque, sit amet vulputate nisl turpis at magna. Maecenas felis
                  ipsum, adipiscing ut mollis ut, feugiat vel nunc. Morbi
                  blandit, enim a faucibus cursus, mi nunc rutrum turpis, a
                  dictum diam justo eget ipsum. Vestibulum facilisis dolor sed
                  elit faucibus nec ornare eros bibendum. Etiam enim odio,
                  ultricies vitae imperdiet vel, aliquam id ante. In hac
                  habitasse platea dictumst. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Phasellus vitae fringilla sapien.
                </p>

                <p>
                  Sed consectetur ornare nisi eu lobortis. Curabitur nunc purus,
                  vulputate vel blandit nec, dignissim pharetra tortor. Nulla
                  sagittis condimentum semper. Maecenas auctor hendrerit enim,
                  quis ultrices justo venenatis sagittis. Aliquam erat volutpat.
                  In hac habitasse platea dictumst. Sed sed ipsum lorem, eu
                  tincidunt lacus. Suspendisse porttitor, elit sit amet placerat
                  vestibulum, urna urna convallis odio, nec accumsan urna nulla
                  sit amet orci.
                </p>

                <p>
                  Sed in massa diam, et luctus neque. Morbi viverra turpis ut
                  quam faucibus mattis quis sit amet lorem. Vestibulum porta
                  tellus at sem rhoncus pharetra. Aenean quis erat eu sem
                  convallis scelerisque cursus at lectus. Morbi ipsum turpis,
                  consectetur et scelerisque quis, molestie sit amet sem. Etiam
                  mollis, quam pellentesque sagittis egestas, justo nibh gravida
                  lacus, ac rhoncus leo neque sed leo. Nunc consequat lacinia
                  lorem, et blandit justo tempus non. Morbi quam turpis, sodales
                  non porttitor nec, fermentum vel risus. Praesent quam lacus,
                  hendrerit a consectetur a, viverra vitae enim. Morbi varius
                  pulvinar mi, ut sodales eros mattis viverra. Nam condimentum,
                  ante nec varius posuere, turpis orci gravida nulla, eget
                  cursus tellus libero sed risus.
                </p>

                <p>
                  Suspendisse pulvinar urna non libero viverra viverra.
                  Pellentesque commodo sagittis mattis. Pellentesque habitant
                  morbi tristique senectus et netus et malesuada fames ac turpis
                  egestas. Nulla consequat nunc semper enim sodales accumsan
                  aliquam justo luctus. Pellentesque quis leo at mauris
                  malesuada malesuada. Integer vel metus lectus. Duis lobortis,
                  massa ac viverra dignissim, ipsum magna auctor ante, et
                  venenatis massa justo eget velit. Pellentesque vel leo ipsum,
                  rhoncus adipiscing lacus. Donec neque lacus, tempus id
                  pulvinar et, fermentum vitae lectus. Pellentesque aliquam
                  velit sit amet libero ornare eu facilisis sem tristique. Nunc
                  faucibus congue lorem, non ultricies ligula faucibus non. Duis
                  vehicula, est sit amet congue convallis, leo lorem posuere
                  eros, a feugiat felis nisl non turpis.
                </p>

                <p>
                  Donec arcu lectus, ullamcorper ut blandit sit amet, consequat
                  eu quam. Fusce augue augue, blandit non ornare nec, auctor in
                  purus. Quisque nec turpis arcu. Phasellus hendrerit massa quis
                  erat pulvinar dapibus. Maecenas at elit et nulla tempor
                  varius. Aenean consectetur elit ac ligula dignissim aliquam.
                  Praesent adipiscing metus bibendum libero malesuada porta.
                  Suspendisse potenti. Cras molestie mauris id orci lobortis
                  congue. Phasellus accumsan placerat euismod. Vivamus non
                  viverra dolor. Ut tempus gravida elit, sed vehicula velit
                  porttitor sit amet.
                </p>
              </div>

              <div style={sidebar}>
                <MDBStickyContent style={{ height: '2520px' }}>
                  <MDBSticky>
                    {({ style }) => {
                      return (
                        <div
                          style={{
                            ...style
                          }}
                        >
                          <div style={headerStyle}>
                            <h2>MDBSticky Widget</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Etiam interdum luctus eros sed pretium.
                              Proin turpis odio, viverra et tincidunt nec,
                              tincidunt sed nisl.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Etiam interdum luctus eros sed pretium.
                              Proin turpis odio, viverra et tincidunt nec,
                              tincidunt sed nisl.
                            </p>
                          </div>
                        </div>
                      );
                    }}
                  </MDBSticky>
                  <h2 className='mt-5'>Static Widget</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum luctus eros sed pretium. Proin turpis odio,
                    viverra et tincidunt nec, tincidunt sed nisl.
                  </p>
                </MDBStickyContent>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </MDBContainer>
  );
};

export default StickyPage;
