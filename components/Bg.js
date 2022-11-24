import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';
import images from '../assets/images';
const Bg = ({children}) => {
  return (
    <ImageBackground
      source={images.bg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={styles.innerContainer}>{children}</View>
    </ImageBackground>
  );
};

export default Bg;

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(76,168,22, 0.90)',
  },
});
