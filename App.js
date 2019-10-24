import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import UINavigator from './navigation/UINavigator'
import ReduxThunk from 'redux-thunk'
import authReducers from './store/reducers/auth'
const rootReducer = combineReducers({
auth:authReducers
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <UINavigator/>
     </Provider>
    )
  }
}
