import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={1000}
      height={300}
      viewBox="0 0 375 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.04}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.94 1.921l138.434 68.31-50.276 24.836L0 49.623V0L3.94 1.92zm371.057 183.123v49.623l-142.005-70.039 50.235-24.836 91.77 45.252zM375 49.669V.046l-3.899 1.874-183.416 90.647h-.041l-50.236 24.884L0 185.328V235l187.685-92.762 50.235-24.835L375 49.669z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
