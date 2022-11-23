import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SIZES} from '../constants';

const ProductScreen = ({route, navigation}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Image
        source={item.img}
        style={{width: SIZES.width, height: '100%'}}
        resizeMode="contain"
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
