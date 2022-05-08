import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={80}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.373 14.943L.841.409 0 0v10.558l19.648 9.669 10.725-5.284zM80 49.929V39.37l-19.578-9.628-10.717 5.284L80 49.929zM79.168.409L80 .01v10.558L50.756 24.98 40.04 30.264 0 50V39.43L29.314 24.99l10.717-5.295h.008L79.17.41z"
        fill="#DC1637"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
