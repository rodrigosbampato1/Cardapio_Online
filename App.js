import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/components/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}
yarn
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
