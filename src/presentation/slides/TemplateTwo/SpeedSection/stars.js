import React from 'react';

const SvgComponent = props => (
  <svg width={231} height={156} viewBox="0 0 231 156" {...props}>
    <g fill="#FFF" fillRule="evenodd">
      <g opacity={1} transform="translate(80 13)" className="stars-reverse">
        <ellipse cx={4} cy={4} rx={2} ry={4} />
        <ellipse cx={4} cy={4} rx={4} ry={2} />
      </g>
      <g opacity={0.3} className="stars">
        <ellipse cx={4.5} cy={4.5} rx={2.25} ry={4.5} />
        <ellipse cx={4.5} cy={4.5} rx={4.5} ry={2.25} />
      </g>
      <g opacity={0.5} transform="translate(221 21)" className="stars">
        <ellipse cx={5} cy={5} rx={2.5} ry={5} />
        <ellipse cx={5} cy={5} rx={5} ry={2.5} />
      </g>
      <g opacity={1} transform="translate(130 148)" className="stars-reverse">
        <ellipse cx={4} cy={4} rx={2} ry={4} />
        <ellipse cx={4} cy={4} rx={4} ry={2} />
      </g>
      <g opacity={0.2} transform="translate(179 114)" className="stars">
        <ellipse cx={4.5} cy={4.5} rx={2.25} ry={4.5} />
        <ellipse cx={4.5} cy={4.5} rx={4.5} ry={2.25} />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
