import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {COLORS} from '../../constants';
const HeartIcon = (
  {color = COLORS.lightGray, fill = 'none', width = 22, height = 22},
  props,
) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      {...props}>
      <Path
        d="M4.612 1.5C9.332.441 11 3.5 11 3.5s1.892-3.336 6.612-2.277c1.536.344 3.118 2.473 3.5 4 .5 2-.763 4.733-2 6.5-3.5 5-8.112 8.777-8.112 8.777S6.612 17 3.112 12c-1.237-1.767-2.5-4.5-2-6.5.382-1.527 1.964-3.655 3.5-4Z"
        fill={fill}
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default HeartIcon;

const styles = StyleSheet.create({});
