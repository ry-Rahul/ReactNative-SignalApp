/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import StackNavigator from './navigation/StackNavigator';
import { AuthProvider } from './AuthContext';

function App() {


  return  <AuthProvider>
              <StackNavigator />
          </AuthProvider>
}

export default App;
