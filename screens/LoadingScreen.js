// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View
 } from 'react-native';

export default function LoadingScreen() {
  return (
    <>
    <View style={styles.loading}> 
    <ActivityIndicator size="large" color="blue"/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    loading: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });