import * as React from 'react';

import Svg, { SvgProps, G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={36}
      height={38}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M18 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S4 23.732 4 16 10.268 2 18 2zm-5.6 15.4l-5.513.001a11.205 11.205 0 009.713 9.712V21.6a4.2 4.2 0 01-4.2-4.2zm16.713.001L23.6 17.4a4.2 4.2 0 01-4.2 4.2l.001 5.513a11.205 11.205 0 009.712-9.712zM20.8 16h-5.6v1.4a1.4 1.4 0 001.4 1.4h2.8a1.4 1.4 0 001.4-1.4V16zM18 4.8a11.201 11.201 0 00-11.113 9.8H12.4a1.4 1.4 0 011.4-1.4h8.4a1.4 1.4 0 011.4 1.4h5.513A11.201 11.201 0 0018 4.8z"
          fill="#47474D"
        />
      </G>
      <Defs />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
