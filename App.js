/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Toolbar,ThemeProvider } from 'react-native-material-ui';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Toolbar
          leftElement="menu"
          centerElement="Searchable"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
          rightElement={{
            menu: {
              icon: "more-vert",
              labels: ["item 1", "item 2"]
            }
          }}
          onRightElementPress={(label) => { console.log(label) }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
