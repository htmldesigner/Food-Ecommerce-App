import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS, COLORS} from '../constants';
import {useStore} from '../store';
import {observer} from 'mobx-react-lite';

const CartScreen = observer(({navigation}) => {
  const {cart} = useStore();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View>
        <Text>{cart.cartCount}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{...FONTS.h1}}>CartScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => cart.addCart({1: 'test'})}>
        <Text style={{...FONTS.h1}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
});

export default CartScreen;
