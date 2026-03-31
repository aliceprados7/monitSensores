import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import React, { useState, useEffect} from 'react';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const dadosSimulados = Array.from({ length: 50}, (_,i) => ({
        id: i.toString(),
        nome: `Sensor ${1 + i} - linha de montagem`,
        valor: '25°C'
      }));
      setData(dadosSimulados);
      setLoading(false);
    }, 3000);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.itemTitle}>{item.nome}</Text>
      <Text>{item.valor}</Text>
    </View>
    );
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.headerArea}>
        <Text style={styles.title}>Monitoramento IoT - Unidade São Carlos</Text>
        <Text>{`Status: Conectado a rede industrial
        Última atualização: Agora`}</Text>
      </ScrollView>

      {loading?(
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff"/>
          <Text>Carregando...</Text>
        </View>
      ):(
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={sensor => sensor.id}
          contentContainerStyle={styles.listPadding}
        />        
      )}
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
  },
  card:{
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
  },
  itemTitle: { fontSize: 16, fontWeight: 'bold' },
  listPadding: { paddingBottom: 20 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

});
