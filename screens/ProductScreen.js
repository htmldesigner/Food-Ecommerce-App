import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import imeges from '../assets/images';
import {useStore} from '../store';

const ProductScreen = ({route, navigation}) => {
  const {item} = route.params;

  const {cart} = useStore();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
      <View
        style={{
          backgroundColor: 'orange',
          height: 400,
          width: '86%',
          marginLeft: 40,
          marginRight: 40,
          alignItems: 'center',
          justifyContent: 'flex-end',
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
        }}>
        <Image
          source={item.img}
          style={{
            width: '90%',
            height: '100%',
            position: 'absolute',
            top: -205,
          }}
          resizeMode="contain"
        />
        <View>
          <Text style={{...FONTS.h3}}>Description</Text>
          <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={async () => {
            await cart.addCart(item);
            navigation.goBack();
          }}
          style={{
            backgroundColor: COLORS.primary,
            width: '90%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 9,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: SIZES.width,
    height: SIZES.height,
    backgroundColor: 'rgba(76,168,21,0.9)',
  },
});
