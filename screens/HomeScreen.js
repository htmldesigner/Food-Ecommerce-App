import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS} from '../constants';
import products from '../data';
import {HeartIcon, UserIcon, CartIcon, HomeIcon} from '../assets/icons';

const HomeScreen = ({navigation}) => {
  function renderProducts(item, index) {
    return (
      <TouchableOpacity
        onPress={() => console.log(item)}
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          marginHorizontal: SIZES.base,
          marginVertical: SIZES.base,
          borderRadius: SIZES.base,
          height: 265,
          width: '50%',
          ...styles.productItem,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: 16,
            marginRight: 18,
            width: 20,
            height: 20,
          }}>
          <HeartIcon height="16" width="16" />
        </TouchableOpacity>
        <Image
          style={{
            width: '100%',
            height: 120,
            marginTop: 4,
          }}
          source={item.img}
          resizeMode="contain"
        />
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.secondary,
            ...FONTS.h2,
            marginTop: 10,
          }}>
          {item.name}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 18,
          }}>
          <Text style={{color: COLORS.primary, ...FONTS.h2}}>{item.price}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              height: 28,
              width: 28,
              borderRadius: 14,
              alignItems: 'center',
              justifyContent: 'center',
            }}></TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container} onPress={() => Keyboard.dismiss()}>
      <Text
        style={{
          ...FONTS.h2,
          fontWeight: 'bold',
          color: COLORS.secondary,
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.radius,
        }}>
        Find you something {'\n'}what do you want
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}>
        <TextInput style={styles.input} placeholder="Search..." />
        <TouchableOpacity
          onPress={() => Keyboard.dismiss()}
          style={{
            backgroundColor: COLORS.primary,
            width: 50,
            height: 50,
            marginRight: SIZES.radius,
            borderRadius: SIZES.base,
          }}></TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: 5,
        }}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({item, index}) => renderProducts(item, index)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderRadius: SIZES.base,
    marginTop: SIZES.radius,
    marginLeft: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 10,
    width: '80%',
  },
  productItem: {
    shadowColor: 'rgba(0, 0, 0, .5)',
    elevation: 12,
  },
});
