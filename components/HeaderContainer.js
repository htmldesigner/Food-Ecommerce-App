import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {flow} from 'mobx';
import {ArrowIcon} from '../assets/icons';
import {SIZES} from '../constants';
import GoBackArrow from './GoBackArrow';

const HeaderContainer = ({left, right, children}, props) => {
  return (
    <View style={{justifyContent: 'space-between', flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View
        style={{
          marginTop: 36,
          marginHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {left}
        {right}
      </View>

      <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
        {children}
      </View>
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({});
