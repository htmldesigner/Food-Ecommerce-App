import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS} from '../constants';

const UserScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('Profiler')}>
        <Text style={{...FONTS.h1}}>UserScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
