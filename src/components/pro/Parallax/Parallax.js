import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Parallax = React.forwardRef((props, jarallax) => {
  const {
    alt,
    children,
    className,
    element,
    image,
    keepImg,
    speed,
    tag: Tag,
    threshold,
    type,
    video,
    height,
    width
  } = props;

  const parentClasses = classNames(
    keepImg ? 'jarallax-keep-img' : 'jarallax',
    className
  );
  const elementClasses = classNames(Tag === 'span' ? 'd-inline-block' : null);

  return (
    <>
      {image && (
        <Tag
          ref={jarallax}
          className={parentClasses}
          style={{
            height,
            width
          }}
          data-jarallax
          data-type={type}
          data-speed={speed}
        >
          <img className='jarallax-img ' src={image} alt={alt} />
          {children}
        </Tag>
      )}
      {video && (
        <Tag
          ref={jarallax}
          className={parentClasses}
          style={{
            height,
            width
          }}
          data-jarallax
          data-type={type}
          data-speed={speed}
          data-video-src={video}
        >
          {children}
        </Tag>
      )}
      {element && (
        <Tag
          className={elementClasses}
          ref={jarallax}
          data-jarallax-element={speed}
          data-threshold={threshold}
        >
          {children}
        </Tag>
      )}
    </>
  );
});

Parallax.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
  speed: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  threshold: PropTypes.node,
  type: PropTypes.string,
  video: PropTypes.string,
  width: PropTypes.string
};

Parallax.defaultProps = {
  alt: 'MDBParallax image',
  height: '600px',
  speed: 0.5,
  tag: 'div',
  threshold: 'null null',
  type: 'scroll',
  width: '100%'
};

export default Parallax;
export { Parallax as MDBParallax };
