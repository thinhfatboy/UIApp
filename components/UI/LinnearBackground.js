import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const LinnearBackground = props => {
  return (
    <LinearGradient
      {...props}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[Colors.linnearColor2, Colors.linnearColor1]}></LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius:3,
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  
  },
});
export default LinnearBackground;
