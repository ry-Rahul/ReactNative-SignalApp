import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../AuthContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const ChatScreen = () => {
  const [options, setOptions] = useState(['Chats']);
  const [chats, setChats] = useState([]);
  const [requests, setRequests] = useState([]);
  const {token, setToken, userId, setUserId} = useContext(AuthContext);


  const chooseOptins = (option) => {
    if(options.includes(option)){
      setOptions(options.filter(item=>item!==option))
    }
    else{
      setOptions([...options,option])
    }
  }

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'space-between',
        }}>
        <Pressable>
          <Image
            source={{
              uri: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            }}
            style={{width: 50, height: 50, borderRadius: 5}}
          />
        </Pressable>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: 'black',
          }}>
          Chat
        </Text>

        <View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <AntDesign name="camerao" size={26} color="black" />
            <MaterialIcons name="person-outline" size={26} color="black" />
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 10,
        }}>
        <Pressable
          onPress={() => chooseOptins('Chats')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: 'lightgrey',
          }}>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: 'black',
              }}>
              Chats
            </Text>
          </View>
          {
            options.includes('Chats') ? <Entypo name="chevron-small-up" size={30} color="black" /> : <Entypo name="chevron-small-down" size={30} color="black" />
          }
        </Pressable>
      </View>

      <View>
        {options?.includes('Chats') &&
          (chats.length > 0 ? (
            <View></View>
          ) : (
            <View
              style={{
                height: 300,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{alignItems: 'center', color: 'gray'}}>
                No Chats
              </Text>
              <Text>Start a chat by messaging a friend</Text>
            </View>
          ))}
      </View>

      <Pressable

       onPress={()=>chooseOptins('Requests')}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: 'lightgrey',
        }}>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: 'black',
            }}>
            Requests
          </Text>
        </View>
        <Entypo name="chevron-small-down" size={30} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
