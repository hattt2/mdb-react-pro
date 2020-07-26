import React from 'react';
import PropTypes from 'prop-types';

const SimpleChart = props => {
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    if (!x || !y) {console.error('x or y missing to describeArc');}

    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      arcSweep,
      0,
      end.x,
      end.y
    ].join(' ');
  };

  const {
    percent,
    width,
    strokeWidth,
    padding,
    type,
    border,
    style,
    height,
    fillColor,
    railColor,
    strokeColor,
    labelColor,
    labelFontWeight,
    labelFontSize
  } = props;
  const chartsPercent = Math.min(percent || 0, 100);
  const chartsRadius = width / 2 - strokeWidth / 2 - padding;
  const chartsCenter = chartsRadius + strokeWidth / 2 + padding;
  const chartsStartAngle = 0;
  const chartsEndAngle = 3.6 * chartsPercent;
  const chartsLabel = `${chartsPercent}%`;
  const chartsLabelLeftOffset =
    chartsLabel.length === 3 || chartsLabel.length === 4 ? -0.95 : -0.6;
  const arc = describeArc(
    chartsCenter,
    chartsCenter,
    chartsRadius,
    chartsStartAngle,
    chartsEndAngle - 0.001
  );

  return (
    <svg
      className={`react-chart ${type}`}
      width={width}
      style={{ overflow: 'visible', border: border, ...style }}
      height={height}
    >
      <circle
        cx={chartsCenter}
        cy={chartsCenter}
        r={chartsRadius}
        fill={fillColor}
        stroke={railColor}
        strokeWidth={strokeWidth}
      />
      <path
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        d={arc}
      />
      <text
        x={chartsCenter}
        y={chartsCenter}
        dx={`${chartsLabelLeftOffset}em`}
        dy='.35em'
        fill={labelColor}
        fontWeight={labelFontWeight}
        fontSize={labelFontSize}
      >
        {chartsLabel}
      </text>
    </svg>
  );
};

SimpleChart.propTypes = {
  chartsEndAngle: PropTypes.number,
  chartsStartAngle: PropTypes.number,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  labelFontSize: PropTypes.string,
  labelFontWeight: PropTypes.string,
  radius: PropTypes.number,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  style: PropTypes.object,
  width: PropTypes.number
};

SimpleChart.defaultProps = {
  border: 'none',
  fillColor: 'none',
  height: 150,
  labelColor: '#408AE5',
  labelFontSize: '1.2em',
  labelFontWeight: 'bold',
  padding: 0,
  percent: 70,
  railColor: '#f5f5f5',
  strokeColor: '#408AE5',
  strokeWidth: 10,
  style: {},
  width: 150
};

export default SimpleChart;
export { SimpleChart as MDBSimpleChart };
