import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';

const Bg = ({children, overlay, image}) => {
  return (
    <ImageBackground
      source={image}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={{backgroundColor: overlay, ...styles.innerContainer}}>
        {children}
      </View>
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
  },
});
