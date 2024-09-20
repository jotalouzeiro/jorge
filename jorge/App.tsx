import React from "react";
import {View, Text, StyleSheet} from 'react-native';


export default function app (){
  return(
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet. create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  box1: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2.5,
    borderColor: 'black',
    borderRadius:20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
  },
  box2: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2.5,
    borderColor: 'black',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
  },
})