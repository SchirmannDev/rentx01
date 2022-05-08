import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={80}
      height={80}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M70 9.973v60.054a3.334 3.334 0 01-3.31 3.306H13.31A3.31 3.31 0 0110 70.027V9.973a3.334 3.334 0 013.31-3.306h53.38c1.827 0 3.31 1.48 3.31 3.306zm-6.667 3.36H16.667v53.334h46.666V13.333zm-25.69 30.404l14.144-14.14L56.5 34.31 37.643 53.167 24.677 40.2l4.716-4.713 8.25 8.25z"
        fill="#29292E"
      />
      <Path
        d="M37.643 43.737l14.144-14.14L56.5 34.31 37.643 53.167 24.677 40.2l4.716-4.713 8.25 8.25z"
        fill="#03B352"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
