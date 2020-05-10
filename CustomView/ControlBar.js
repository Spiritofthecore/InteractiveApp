import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';

const ControlBar = () => {
  return (
    <View style={{
      flexDirection: "row",
      height: 40
      }}
      >
        <View style={{
          backgroundColor: "red",
          width: 40,
          height: "100%",
          marginLeft: 10
        }}
        >
          <TouchableWithoutFeedback/>
        </View>
        <View style={{
          backgroundColor: "green",
          width: 40,
          height: "100%",
          marginLeft: 10
        }}
        />
        <View style={{
          backgroundColor: "blue",
          width: 40,
          height: "100%",
          marginLeft: 10
        }}
        />
        <View style={{
          borderColor: "black",
          borderWidth: 1,
          width: 40,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10
        }}
        >
          <Text>{"Undo"}</Text>
        </View>
        <View style={{
          borderColor: "black",
          borderWidth: 1,
          width: 40,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10
        }}
        >
          <Text>{"Redo"}</Text>
        </View>
      </View>
  )
}

module.exports = ControlBar;