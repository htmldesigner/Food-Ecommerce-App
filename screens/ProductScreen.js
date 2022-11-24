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
import {useStore} from '../store';
import Bg from '../components/Bg';

const ProductScreen = ({route, navigation}) => {
  const {item} = route.params;

  const {cart} = useStore();

  return (
    <Bg>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <View
          style={{
            backgroundColor: COLORS.white,
            height: 470,
            width: 360,
            marginLeft: 40,
            marginRight: 40,
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderTopLeftRadius: SIZES.radius * 2,
            borderTopRightRadius: SIZES.radius * 2,
          }}>
          <Image
            source={item.img}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: -260,
            }}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 326,
              marginTop: 140,
              marginBottom: 50,
            }}>
            <Text style={{...FONTS.h1}}>{item.name}</Text>
            <Text style={{color: COLORS.primary, ...FONTS.h1}}>
              {item.price}
            </Text>
          </View>
          <View style={{width: 326, marginBottom: 50}}>
            <Text style={{...FONTS.h3}}>Description</Text>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
              {item.description}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={async () => {
              await cart.addCart(item);
              navigation.goBack();
            }}
            style={{
              backgroundColor: COLORS.primary,
              width: 326,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 9,
              borderWidth: 3,
              borderColor: '#5cc918',
            }}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Bg>
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
