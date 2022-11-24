import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const StarIcon = ({color = 'gold'}, props) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m9.5 1.695 1.655 5.362.109.353h5.794l-4.41 3.373-.277.212.102.333 1.672 5.414-4.341-3.32-.304-.232-.304.232-4.34 3.32 1.67-5.414.103-.333-.276-.212L1.942 7.41h5.795l.108-.353L9.5 1.695Z"
      fill={color}
      stroke={color}
    />
  </Svg>
);

export default StarIcon;
