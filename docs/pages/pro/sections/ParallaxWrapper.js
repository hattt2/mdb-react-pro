// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { jarallax, jarallaxVideo, jarallaxElement } from 'jarallax';
// import { MDBParallax } from 'mdbreact';

// class MDBParallaxWrapper extends Component {
//   jarallax = React.createRef();

//   componentDidMount() {
//     const {
//       image,
//       video,
//       element,
//       elementOptions,
//       disableParallax,
//       disableVideo,
//       disableVideoLazyLoading,
//       disableVideoLoop,
//       disableVideoPlayOnlyVisible,
//       elementInViewport,
//       imgElement,
//       imgPosition,
//       imgRepeat,
//       imgSize,
//       imgSrc,
//       videoEndTime,
//       videoStartTime,
//       videoVolume,
//       zIndex
//     } = this.props;

//     const imageOptions = {
//       disableParallax,
//       elementInViewport,
//       imgElement,
//       imgPosition,
//       imgRepeat,
//       imgSize,
//       imgSrc,
//       zIndex
//     };

//     const videoOptions = {
//       disableVideo,
//       videoEndTime,
//       videoLazyLoading: !disableVideoLazyLoading,
//       videoLoop: !disableVideoLoop,
//       videoPlayOnlyVisible: !disableVideoPlayOnlyVisible,
//       videoStartTime,
//       videoVolume
//     };

//     jarallax(
//       this.jarallax.current,
//       image
//         ? imageOptions
//         : video
//         ? videoOptions
//         : element
//         ? elementOptions
//         : null
//     );

//     jarallaxVideo(this.jarallax.current);
//     jarallaxElement(this.jarallax.current);
//   }

//   componentWillUnmount() {
//     jarallax(this.jarallax.current, 'destroy');
//   }

//   render() {
//     const {
//       alt,
//       children,
//       className,
//       element,
//       image,
//       keepImg,
//       speed,
//       tag: Tag,
//       threshold,
//       type,
//       video,
//       height,
//       width,
//       ...attributes
//     } = this.props;

//     return (
//       <MDBParallax
//         alt={alt}
//         className={className}
//         element={element}
//         height={height}
//         image={image}
//         keepImg={keepImg}
//         ref={this.jarallax}
//         speed={speed}
//         tag={Tag}
//         threshold={threshold}
//         type={type}
//         video={video}
//         width={width}
//         {...attributes}
//       >
//         {children}
//       </MDBParallax>
//     );
//   }
// }

// MDBParallaxWrapper.propTypes = {
//   alt: PropTypes.string.isRequired,
//   className: PropTypes.string,
//   disableParallax: PropTypes.func,
//   disableVideo: PropTypes.func,
//   elementInViewport: PropTypes.node,
//   height: PropTypes.string,
//   image: PropTypes.string,
//   imgElement: PropTypes.string,
//   imgPosition: PropTypes.string,
//   imgRepeat: PropTypes.string,
//   imgSize: PropTypes.string,
//   keepImg: PropTypes.bool,
//   speed: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   threshold: PropTypes.node,
//   type: PropTypes.string,
//   video: PropTypes.string,
//   videoEndTime: PropTypes.number,
//   videoLazyLoading: PropTypes.bool,
//   videoLoop: PropTypes.bool,
//   videoPlayOnlyVisible: PropTypes.bool,
//   videoStartTime: PropTypes.number,
//   videoVolume: PropTypes.number,
//   width: PropTypes.string,
//   zIndex: PropTypes.number
// };

// MDBParallaxWrapper.defaultProps = {
//   alt: 'MDBParallax image',
//   disableParallax: null,
//   disableVideo: null,
//   elementInViewport: null,
//   height: '600px',
//   imgElement: '.jarallax-img',
//   imgPosition: '50% 50%',
//   imgRepeat: 'no-repeat',
//   imgSize: 'cover',
//   keepImg: false,
//   speed: 0.5,
//   tag: 'div',
//   threshold: 'null null',
//   type: 'scroll',
//   videoEndTime: 0,
//   videoLazyLoading: true,
//   videoLoop: true,
//   videoPlayOnlyVisible: true,
//   videoStartTime: 0,
//   videoVolume: 0,
//   width: '100%',
//   zIndex: -100
// };

// export default MDBParallaxWrapper;
