import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import Room from './src/components/Room';

const channelNo = "1580471";
const apiWriteKey = "E1IEL3E8446RN0I8";

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home automation app</Text>
        <View style={styles.roomContainer}>
          <Room name="kitchen" lampNo="1" windowNo="1" color="red" />
          <Room name="Living Room" lampNo="2" color="#007bff" />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title :{
    fontSize: 16,
    fontWeight:'bold',
    color: '#000',
    margin: 10
  },
  roomContainer:{
    flexDirection: 'row',
  }
});


