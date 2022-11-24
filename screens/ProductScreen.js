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
import images from '../assets/images';
import {HeartIcon, StarIcon} from '../assets/icons';
import HeaderContainer from '../components/HeaderContainer';
import GoBackArrow from '../components/GoBackArrow';

const ProductScreen = ({route, navigation}) => {
  const {item} = route.params;

  const {cart} = useStore();

  return (
    <Bg image={images.bg} overlay="rgba(76,168,22, 0.90)">
      <HeaderContainer
        left={<GoBackArrow />}
        right={<HeartIcon color="#fff" width="19" height="19" />}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: 120,
              width: 326,
            }}>
            <StarIcon />
            <Text>(4/7)</Text>
          </View>
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
              marginTop: SIZES.padding,
              marginBottom: SIZES.padding,
            }}>
            <Text style={{color: COLORS.secondary, ...FONTS.h1}}>
              {item.name}
            </Text>
            <Text style={{color: COLORS.primary, ...FONTS.h1}}>
              {item.price}
            </Text>
          </View>
          <View style={{width: 326, marginBottom: SIZES.padding}}>
            <Text style={{color: COLORS.secondary, ...FONTS.h3}}>
              Description
            </Text>
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
              marginTop: SIZES.padding,
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
      </HeaderContainer>
    </Bg>
  );
};

export default ProductScreen;

const styles = StyleSheet.create();
