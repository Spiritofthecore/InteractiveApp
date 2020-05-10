/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var ControlBar = require("./CustomView/ControlBar")

var commandList = []

function redClicked() {
  commandList.push("red")

}

function greenClicked() {

}

function blueClicked() {

}

function undo() {

}

function redo() {

}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{
        flex: 1
      }}>
        <ControlBar/>
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View style={{
            borderColor: "black",
            borderWidth: 1,
            width: 120,
            height: 120,
          }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
