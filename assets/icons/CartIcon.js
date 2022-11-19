import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {COLORS, SIZES} from '../../constants';
const CartIcon = ({color = COLORS.lightGray}, props) => {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 3.72V1.156c0-.513 3.503.254 4.102 2.051.6 1.797 1.539 11.282 3.077 13.334 1.539 2.05 8.205 1.538 11.282 1.538s3.59-10.256 3.59-10.256 0-1.539-1.539-2.564c-1.538-1.026-5.128-1.026-8.205-.513-3.076.513-4.102 1.025-4.102 1.025"
        stroke={color}
        strokeWidth={2}
      />
      <Path
        fill={color}
        d="m18.23 20.13 2.198.608-.967 3.495-2.197-.608zM9.146 19.105l2.197.608-.966 3.495-2.198-.608z"
      />
    </Svg>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});
