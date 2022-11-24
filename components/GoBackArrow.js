import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowIcon} from '../assets/icons';
import {useNavigation} from '@react-navigation/native';

const GoBackArrow = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowIcon color="#fff" />
    </TouchableOpacity>
  );
};

export default GoBackArrow;

const styles = StyleSheet.create({});
