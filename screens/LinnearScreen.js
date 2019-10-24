import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image,Button} from 'react-native';
import LinnearBackground from '../components/UI/LinnearBackground';
import AppIntroSlider from 'react-native-app-intro-slider';

// khai bao data cua intro slider
const slides = [
  {
    key: 'somethun',
    title: 'Discover Courses',
    text:
      'Through our advanced search algorithms, you ' +

       'can find suitable courses easily.',
      image: require('../assets/images/imageLinnear.png'),
    
  },
  {
    key: 'somethun-dos',
    title: 'Mario Speedwagon',
    text: 'Your account is ready! Tap on Get Started to proceed.',
    image: require('../assets/images/imgLinear2.png'),
    Button: <Button title = 'sfsdf'/>
    
    
  },
];
export default class LinnearScreen extends React.Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
           <Image source={item.image} style = {styles.imageLinnear}/>
        <Text style={styles.title}>{item.title}</Text>
       
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
this.props.navigation.navigate('Main')
    this.setState({showRealApp: true});
  };
  render() {
    if (this.state.showRealApp) {
      return <LinnearScreen />;
    } else {
      return (
   
              <LinnearBackground style = {styles.container}>
        <AppIntroSlider
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
         
        />
         </LinnearBackground>
    
      );
    }
  }
}
const styles = StyleSheet.create({
    ContainerLinnear:{
justifyContent:'center'
    },
    container:{
justifyContent:'center'
    },
  slide: {
  
    justifyContent:'center',
    padding:20,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    textAlign:'center',
    color:'#fff',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    textAlign:'center',
    color:'#fff',
  },
  imageLinnear:{
      marginVertical:67,
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
  }
});
LinnearScreen.navigationOptions = () => {
  return {
    header: null,
  };
};


// import React, { useRef } from 'react'
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
// import { View, Dimensions, StyleSheet,TouchableOpacity,Text } from 'react-native';

// const { width: screenWidth } = Dimensions.get('window')

// const LinnearScreen = (props) => {
//     const carouselRef = useRef(null)

//     const goForward = () => {
//         carouselRef.current.snapToNext()
//     }

//     const _renderItem = ({item, index}, parallaxProps) => {
//         return (
//             <View style={styles.item}>
//                 <ParallaxImage
//                     source={{ uri: item.thumbnail }}
//                     containerStyle={styles.imageContainer}
//                     style={styles.image}
//                     parallaxFactor={0.4}
//                     {...parallaxProps}
//                 />
//                 <Text style={styles.title} numberOfLines={2}>
//                     { item.title }
//                 </Text>
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={goForward}>
//                 <Text>go to next slide</Text>
//             </TouchableOpacity>
//             <Carousel
//                 ref={carouselRef}
//                 sliderWidth={screenWidth}
//                 sliderHeight={screenWidth}
//                 itemWidth={screenWidth - 60}
//                 data={this.state.entries}
//                 renderItem={this._renderItem}
//                 hasParallaxImages={true}
//             />
//         </View>
//     );
// }

// export default LinnearScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     width: screenWidth - 60,
//     height: screenWidth - 60,
//   },
//   imageContainer: {
//     flex: 1,
//     marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
//     backgroundColor: 'white',
//     borderRadius: 8,
//   },
//   image: {
//     ...StyleSheet.absoluteFillObject,
//     resizeMode: 'cover',
//   },
// })