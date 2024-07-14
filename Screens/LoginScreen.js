import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {setToken ,token} = useContext(AuthContext);


  useEffect(()=>{
    if(token){
      navigation.replace("MainStack",{screen:"Main"})
    }
  },[token,navigation])

  const handleLogin = () => {
    if (!email || !password) {
      return alert('Please fill all the fields');
    }

    axios.post('http://10.0.2.2:4000/login', {email, password})
    .then(res => {
      const token = res.data.token;
      AsyncStorage.setItem("authToken", token);
      setToken(token);
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <KeyboardAvoidingView>
          <View
            style={{
              marginTop: 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: 'black',
              }}>
              Login Screen
            </Text>
          </View>

          <View style={{marginTop: 50}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Email
            </Text>
            <View>
              <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{
                  height: 40,
                  // marginTop: 10,
                  borderBottomColor: '#BEBEBE',
                  borderBottomWidth: 1,
                  width: 320,
                  paddingBottom: 10,
                  fontFamily: 'GeezaPro-Bold',
                  fontSize: email ? 15 : 15,
                }}
              />
            </View>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Password
            </Text>
            <View>
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                value={password}
                onChangeText={pass => setPassword(pass)}
                style={{
                  height: 40,
                  // marginTop: 10,
                  borderBottomColor: '#BEBEBE',
                  borderBottomWidth: 1,
                  width: 320,
                  paddingBottom: 10,
                  fontFamily: 'GeezaPro-Bold',
                  fontSize: email ? 15 : 15,
                }}
              />
            </View>
          </View>

          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: '#03312e',
              padding: 15,
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
              }}>
              Login
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 18,
                marginTop: 20,
              }}>
              Don't have an account? Register
            </Text>
          </Pressable>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <Image
              source={{
                uri: 'https://signal.org/assets/images/features/Stickers.png',
              }}
              style={{
                width: 250,
                height: 300,
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
