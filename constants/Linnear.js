

import LinearGradient from 'react-native-linear-gradient';

// Within your render function
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Linnear extends Component {
 
    render() {
        return (
            <LinearGradient
            colors={['#FF5B7F', '#FC9272']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            >
            
          </LinearGradient>
        )
    }
}






