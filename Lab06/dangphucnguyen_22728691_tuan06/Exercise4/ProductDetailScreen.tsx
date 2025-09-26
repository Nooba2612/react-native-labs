import {View,Text, StyleSheet} from 'react-native'

const PRODUCTS = [
  { id: "1", name: "Iphone 15 Pro", price: "30.000.000 VND" },
  { id: "2", name: "Samsung S24 Ultra", price: "28.000.000 VND" },
  { id: "3", name: "Xiaomi 14 Pro", price: "20.000.000 VND" },
];

export default function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) return <Text>Không tìm thấy sản phẩm</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>{product.price}</Text>
      <Text style={{ marginTop: 20 }}>Mô tả: Đây là sản phẩm {product.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
});