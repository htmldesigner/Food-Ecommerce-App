import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
const PlusIcon = ({color = '#fff', width = 22, height = 22}, props) => {
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path fill={color} d="M10 0h3v23h-3z" />
      <Path fill={color} d="M23 10v3H0v-3z" />
    </Svg>
  );
};

export default PlusIcon;

const styles = StyleSheet.create({});
