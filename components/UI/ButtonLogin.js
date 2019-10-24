import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import LinnearBackground from './LinnearBackground';
import Linnear from '../../constants/Linnear';
import LinearGradient from 'react-native-linear-gradient';
const ButtonLogin = props => {
  return (
    <TouchableOpacity {...props} style={styles.btn1} onPress={props.onPress}>
      <LinnearBackground style={styles.btn}>
        <Text style={styles.textSubmit}>Sign In</Text>
      </LinnearBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: '90%',

    borderRadius: 40,

    color: 'red',
  },
  btn1: {
    borderRadius: 50,
    height: 50,
    width: '90%',

    borderRadius: 40,

    color: 'red',
    justifyContent: 'flex-end',
    marginTop: 35,
  },
  textSubmit: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: '#fff',
  },
});
export default ButtonLogin;
