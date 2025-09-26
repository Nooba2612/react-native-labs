import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PRODUCTS = [
  { id: "1", name: "Iphone 15 Pro", price: "30.000.000 VND" },
  { id: "2", name: "Samsung S24 Ultra", price: "28.000.000 VND" },
  { id: "3", name: "Xiaomi 14 Pro", price: "20.000.000 VND" },
];

export default function ProductsScreen({ navigation, route }) {
  const [favorites, setFavorites] = useState(route.params?.favorites || []);

  const handleAddToFavorites = (item) => {
    if (!favorites.find((f) => f.id === item.id)) {
      const newFavs = [...favorites, item];
      setFavorites(newFavs);
      navigation.setParams({ favorites: newFavs }); // cập nhật cho Tab2
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("ProductDetails", { id: item.id })
            }
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.price}</Text>
            <TouchableOpacity
              onPress={() => handleAddToFavorites(item)}
              style={styles.button}
            >
              <Text style={{ color: "white" }}>Thêm vào Favorites</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
  },
  title: { fontSize: 18, fontWeight: "bold" },
  button: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
});
