import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {COLORS} from '../../constants';
const HeartIcon = (
  {color = COLORS.lightGray, width = 22, height = 22},
  props,
) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.612 3.5s-2.28-3.059-7-2c-1.536.345-3.118 2.473-3.5 4-.5 2 .763 4.733 2 6.5 3.5 5 8.5 8.5 8.5 8.5"
        stroke={color}
        strokeWidth={2}
      />
      <Path
        d="M10.612 3.223s2.28-3.059 7-2c1.536.344 3.118 2.473 3.5 4 .5 2-.763 4.733-2 6.5-3.5 5-8.5 8.5-8.5 8.5"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default HeartIcon;

const styles = StyleSheet.create({});
