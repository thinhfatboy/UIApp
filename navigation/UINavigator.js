import React from 'react';
import {Platform,Text, StyleSheet} from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainScreen from '../screens/MainScreen';
import LinnearScreen from '../screens/LinnearScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
// import MealDetailScreen from '../screens/MealDetailScreen';
// import CategoryMealScreen from '../screens/CategoryMealScreen';
// import CategoriesScreen from '../screens/CategoriesScreen';
// import Color from '../constants/Colors';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import FiltersScreen from '../screens/FiltersScreen';

const UiStackNavigator = createStackNavigator({
Linnear:LinnearScreen,
Main:MainScreen
})

const LoginNavigator = createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
    Cofirm: ConfirmScreen
})
export default createAppContainer(LoginNavigator);