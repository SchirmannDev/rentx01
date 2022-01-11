import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={22} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M18 20H4a1 1 0 01-1-1v-9H0L10.327.612a1 1 0 011.346 0L22 10h-3v9a1 1 0 01-1 1zM5 18h12V8.157l-6-5.454-6 5.454V18z" />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
