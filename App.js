import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.headerArea}>
        <Text style={styles.title}>Monitoramento IoT - Unidade São Carlos</Text>
        <Text>{`Status: Conectado a rede industrial
        Última atualização: Agora`}</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerArea: {
    padding: 20,
    backgroundColor: '#ccc9c9',
    maxHeight: 150
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2276e4'
  }
});
