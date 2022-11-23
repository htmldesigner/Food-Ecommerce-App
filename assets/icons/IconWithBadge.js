import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../store';

const IconWithBadge = observer(
  ({color, size, icon, target = '', computed = ''}) => {
    const {[target]: total} = useStore();
    return (
      <View>
        {total[computed] > 0 && (
          <View style={styles.container}>
            <Text style={styles.text}>{total[computed]}</Text>
          </View>
        )}
        {icon((color = {color}), (size = {size}))}
      </View>
    );
  },
);

export default IconWithBadge;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -7,
    right: -9,
    backgroundColor: 'red',
    height: 18,
    width: 18,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  text: {color: '#fff', fontSize: 12, fontWeight: 'bold'},
});
