import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path, Circle} from 'react-native-svg';
const UserIcon = props => {
  return (
    <Svg width={21} height={23} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Circle cx={11} cy={6} r={5} stroke={props.color} strokeWidth={2} />
      <Path
        d="M20 18.5c0 .283-.13.637-.537 1.05-.411.416-1.056.837-1.932 1.213C15.782 21.513 13.297 22 10.5 22c-2.797 0-5.282-.488-7.03-1.237-.877-.376-1.522-.797-1.933-1.214C1.13 19.137 1 18.783 1 18.5c0-.283.13-.637.537-1.05.411-.416 1.056-.837 1.932-1.213C5.218 15.487 7.703 15 10.5 15c2.797 0 5.282.488 7.03 1.237.877.376 1.522.797 1.933 1.214.407.412.537.766.537 1.049Z"
        stroke={props.color}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default UserIcon;

const styles = StyleSheet.create({});
