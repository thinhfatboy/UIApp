import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
                width: 100,
                 height: 100}}
          source={require('../../assets/images/logoLogin.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
  },
  logoText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
