import { Text, SafeAreaView, StyleSheet, View,TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { RadioButton } from 'react-native-paper';

import ManHinhKQ from './components/ManHinhKQ'
import ManHinhNhap from './components/ManHinhNhap'
import BanPhim from './components/BanPhim'

export default function App() {
  const [result, setResult] = useState(16);
  const [phepTinh, setPhepTinh] = useState(" ");

  return (
    <SafeAreaView style={styles.container}>
      <ManHinhNhap result={result} phepTinh={phepTinh} setPhepTinh={setPhepTinh} />
      <ManHinhKQ result={result} />
      <BanPhim result={result} setPhepTinh={setPhepTinh} phepTinh={phepTinh} setResult={setResult} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
});
