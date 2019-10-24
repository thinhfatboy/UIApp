// import React, {Component} from 'react';
// import {Text, View, TouchableOpacity,Image} from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import ImagePicker from 'react-native-image-picker';

// const options = {
//   title: 'my app pic',
//   takePhotoButtonTitle: 'Take photo with your camera',
//   chooseFromLibraryButtonTitle: 'choose photo from lib',
// };
// export default class LoginScreen extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             avatarSource:null
//         }
//     }
//     myfun = () =>{
//         ImagePicker.showImagePicker(options, (response) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//               console.log('User cancelled image picker');
//             } else if (response.error) {
//               console.log('ImagePicker Error: ', response.error);
//             } else {
//               const source = { uri: response.uri };

//               // You can also display the image using data:
//               // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//               this.setState({
//                 avatarSource: source,
//               });
//             }
//           });
//     }
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <TouchableOpacity onPress = {this.myfun} >
//           <Image source = {this.state.avatarSource
//           }
//           />
//             <Text>Select Image</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
import React, {useState, useReducer, useCallback, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as actionAuths from '../store/actions/auth';
import Input from '../components/UI/Input';
import Logo from '../components/UI/Logo';
import ButtonLogin from '../components/UI/ButtonLogin';
import Linnear from '../constants/Linnear';
import Submit from '../components/UI/Button';
import Colors from '../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const LoginScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  const signupHander = async () => {
    let action;
    dispatch(
      (action = actionAuths.login(
        formState.inputValues.email,
        formState.inputValues.password,
      )),
    );

    setError(null);
    setIsLoading(true);

    try {
      await dispatch(action);
      props.navigation.navigate('Signup');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }

    // action = authAction.login(
    //   formState.inputValues.email,
    //   formState.inputValues.password,
    // );
    // dispatch(action);
  };
  //
  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Logo />

        <Input
          secureTextEntry={true}
          autoCapitalize="none"
          errorText="Please enter a valid email address."
          onInputChange={inputChangeHandler}
          initialValue=""
          lable="Email Address"
          id="email"
          secureTextEntry={true}
          keyboardType="email-address"
        />
        <Input
          secureTextEntry={true}
          autoCapitalize="none"
          errorText="Please enter a valid password."
          onInputChange={inputChangeHandler}
          initialValue=""
          lable="Password"
          id="password"
          minLength={5}
          secureTextEntry={true}
        />

        <View
          style={{
            width: '90%',
            height: 20,
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            marginVertical:15
          }}>
          <TouchableOpacity
            style={styles.forgotpasswordText}
            onPress={() => alert('sfdfsdf')}>
            <View
              style={{
                width: '90%',
              }}>
              <Text
                style={{
                  marginVertical: 0,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 10,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',

                  color: '#515C6F',
                }}>
                Forgot password
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.textColorAndIcon} />
        ) : (
          <ButtonLogin style={styles.btnLogin} onPress={signupHander} />
        )}

        <View
          style={{height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Medium',
              fontSize: 10,
            }}>
            OR
          </Text>
        </View>
        <View style={{marginBottom: 18}}>
          <Submit
            color={Colors.facebookColor}
            name="facebook"
            onPress={() => alert('aaaaaa')}>
            Login with facebook
          </Submit>
        </View>
        <View>
          <Submit
            color={Colors.googleColor}
            name="google"
            onPress={() => alert('adsdsd')}>
            Login with google
          </Submit>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>New user?</Text>
          <TouchableOpacity>
            <Text style={styles.signupButton}> Signup </Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>here</Text>
        </View>

        <View style={styles.signupTextCon}>
          <Text style={styles.signup}>
            By creating an account, you agree to our{' '}
          </Text>
          <TouchableOpacity>
            <Text style={styles.signupColor}>
              {' '}
              Terms of Service <Text>and</Text> Privacy Policy{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
LoginScreen.navigationOptions = () => {
  return {
    header: null,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotpasswordText: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    flex: 1,
  },
  btnLogin: {
    marginVertical: 20,
  },
  signupTextCont: {
    marginVertical:20,
    alignItems: 'flex-end',
    justifyContent: 'center',

    flexDirection: 'row',
    
  },
  signupText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
  },
  signupButton: {
    color: Colors.textColorAndIcon,
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
  },
  signup: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  signupColor: {
    color: Colors.textColorAndIcon,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  signupTextCon: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollviewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoginScreen;
