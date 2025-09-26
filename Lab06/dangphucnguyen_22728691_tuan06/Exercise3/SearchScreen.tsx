import {useState} from 'react'
import {View, TextInput, Text, StyleSheet} from 'react-native'

export default function SearchScreen() {
  const [keyword, setKeyword] = useState<String>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa tìm kiếm..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Text style={{ marginTop: 10 }}>Bạn đang tìm: {keyword}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  input: { borderWidth: 1, padding: 8, width: '80%', borderRadius: 8 },
});