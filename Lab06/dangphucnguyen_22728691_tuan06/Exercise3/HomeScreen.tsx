import {useState} from 'react'
import {View, TextInput, Text, StyleSheet, Image, FlatList} from 'react-native'

export default function HomeScreen() {
  const data = [
    { id: '1', title: 'Sản phẩm 1' },
    { id: '2', title: 'Sản phẩm 2' },
    { id: '3', title: 'Sản phẩm 3' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  item: { fontSize: 18, padding: 10 },
});