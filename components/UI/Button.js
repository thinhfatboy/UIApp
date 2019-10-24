import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Platform,Dimensions} from 'react-native';

import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Submit = props => {
  const [buttonWidth,setButtonWidth] = useState(Dimensions.get('window').width/4);
  const updateLayout = () =>{
    setButtonWidth(Dimensions.get('window').width/4)
  }
  
  Dimensions.addEventListener('change',updateLayout)
  return (
    <Icon.Button
      style={styles.buttonInternet}
      name={props.name}
      backgroundColor={props.color}
      onPress={props.onPress}>
      <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>
        {props.children}
      </Text>
    </Icon.Button>
    // <TouchableOpacity style={styles.buttonInternet} onPress={props.btnInternet}>
    //   <Icon name="facebook-f" size={23} color={Colors.facebookColor} />

    //   <Text
    //     style={{
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       textAlign: 'center',
    //       color: 'red',

    //       fontSize: 12,
    //     }}>
    //     sdasdsad
    //   </Text>
    // </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonInternet: {
    width: Dimensions.get('window').width/1.1,
    // height: Dimensions.get('window').height >90 ? 50 : 100,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
 
  },
});
export default Submit;
