import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const navigation = useNavigation();

  const handleRegister = () => {
    if (!email || !password || !name) {
      return alert('Please fill all the fields');
    }

    console.log(email, password, name, image)

    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };

    axios.post('http://10.0.2.2:4000/register', user)
    .then(res => {
      console.log(res.data);
      alert('User registered successfully');
      navigation.navigate('Login');
      setName('');
      setEmail('');
      setPassword('');
      setImage('');
    })
    .catch(err => {
      console.log(err);
      alert('Error in registering user');
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
              marginTop: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: 'black',
              }}>
              Register Screen
            </Text>

            {/* <Text
              style={{
                // backgroundColor: '#f0f0f0',
                marginTop: 10,
                textAlign: 'center',
                marginHorizontal: 12,
              }}>
              Profiles are visible to your friends and connections and groups
            </Text> */}

            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                marginTop: 20,
              }}
              source={{
                uri: image
                  ? image
                  : 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
              }}
            />

            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'black',
                marginTop: 4,
              }}>
              Add
            </Text>
          </View>

          <View style={{marginTop: 40}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Name
            </Text>
            <View>
              <TextInput
                placeholder="Enter your Name"
                value={name}
                onChangeText={name => setName(name)}
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

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
              Image
            </Text>
            <View>
              <TextInput
                placeholder="Enter your Image Url"
                value={image}
                onChangeText={img => setImage(img)}
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
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: '#118ab2',
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
              Register
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 18,
                marginTop: 20,
              }}>
              Already have an account? Login
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
