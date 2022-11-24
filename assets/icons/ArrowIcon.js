import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowIcon = ({color = '#fff'}, props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    {...props}>
    <Path
      d="M9.14 2.108 4.082 7.26 2.675 5.838 7.712.708l1.427 1.4ZM7.742 15.221l-5.058-5.11 1.4-1.427 5.079 5.13-1.421 1.407ZM2.128 6.707l1.254 1.267-1.248 1.27-1.29-1.266 1.284-1.27Z"
      fill={color}
      stroke={color}
    />
  </Svg>
);

export default ArrowIcon;
