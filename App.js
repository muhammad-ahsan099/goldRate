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
  StatusBar,
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar  backgroundColor={'#000'} barStyle="light-content" />
        <WebView
          source={{ uri: 'http://103.18.20.107:8018/Print/Demo' }}
          />
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
