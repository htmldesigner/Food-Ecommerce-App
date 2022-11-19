import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
const HomeIcon = props => {
  return (
    <Svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.5 17.5s1-3 4-3 4 3 4 3"
        stroke={props.color}
        strokeWidth={2}
      />
      <Path
        d="M12 22.5h8.5c2 0 1.5 0 2.5-6s-1.068-9.051-5-12c-4-3-4.077-2.604-6-3.5"
        stroke={props.color}
        strokeWidth={2}
      />
      <Path
        d="M12.25 22.5h-8.5c-2 0-1.5 0-2.5-6s1.068-9.051 5-12c4-3 4.077-2.604 6-3.5"
        stroke={props.color}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default HomeIcon;

const styles = StyleSheet.create({});
