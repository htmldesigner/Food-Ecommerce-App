import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CartScreen, FavoritesScreen, UserScreen, HomeScreen} from '../screens';

import {
  HeartIcon,
  UserIcon,
  IconWithBadge,
  HomeIcon,
  CartIcon,
} from '../assets/icons';
import {COLORS} from '../constants';
import {useStore} from '../store';
import {observer} from 'mobx-react-lite';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#89c80a',
        tabBarInactiveTintColor: COLORS.lightGray,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconWithBadge
              icon={CartIcon}
              color={color}
              size={size}
              target="cart" // state
              computed="cartCount" // getter
            />
          ),
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <HeartIcon color={color} size={size} />
          ),
          tabBarLabel: 'Favorites',
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
          tabBarLabel: 'User',
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
