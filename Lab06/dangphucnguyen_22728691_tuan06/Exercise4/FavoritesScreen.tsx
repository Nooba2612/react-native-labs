import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

export default function FavoritesScreen({ route }) {
  const favorites = route.params?.favorites || [];

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text>Chưa có sản phẩm yêu thích</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          )}
        />
      )}
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
});