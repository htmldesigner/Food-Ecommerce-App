import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS} from '../constants';

const FavoritesScreen = ({navigation}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{...FONTS.h1}}>FavoritesScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
