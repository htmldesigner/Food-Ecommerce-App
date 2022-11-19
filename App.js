import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Tabs from './navigation/Tabs';
import {CartScreen, FavoritesScreen, UserScreen} from './screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#fff"
      />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
});

export default App;
