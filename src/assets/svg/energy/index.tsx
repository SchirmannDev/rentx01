import * as React from 'react';

import Svg, { SvgProps, Path, Defs, ClipPath } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.526 8H22L10.421 25v-9H2L12.526-1v9Zm-2.105 2V6.22L5.718 14h6.808v4.394L18.066 10h-7.645Z"
      fill="#41414D"
    />

    <Defs>
      <ClipPath id="a">
        <Path fill="#41414D" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
