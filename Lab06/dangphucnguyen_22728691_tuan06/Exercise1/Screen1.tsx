import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <Image style={{height: 370, width: 300}} source={require('../assets/vs_blue.png')} />
       <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
       <View style={{flexDirection: "row",justifyContent: "space-between"}}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/star.png')} />
            <Image source={require('../assets/star.png')} />
            <Image source={require('../assets/star.png')} />
            <Image source={require('../assets/star.png')} />
            <Image source={require('../assets/star.png')} />
          </View>
          <Text>(Xem 828 đánh giá)</Text>
       </View>
       <View style={{flexDirection:"row",justifyContent: "flex-start", alignItems: "center"}}>
        <Text style={{fontWeight: "bold", fontSize: 22}}>1.790.000 đ</Text>
        <Text style={{fontWeight: "bold", fontSize: 15, marginLeft: 10, textDecorationStyle: "solid", textDecorationLine: "line-through"}}>1.790.000 đ</Text>
       </View>

        <Text style={{color: "red"}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN <AntDesign name="question-circle" size={20} color="black" /></Text>

        <Pressable onPress={() => navigation.navigate("Screen2")} style={{flexDirection: "row", justifyContent:"space-around",alignItems: "center", width: "100%",border: "1px solid #000", borderRadius: 7, padding: 5}}>4 MÀU-CHỌN MÀU <AntDesign style={{position: "absolute", right: 10}} name="right" size={24} color="black" /></Pressable>

        <Pressable style={{flexDirection: "row", justifyContent:"space-around",alignItems: "center", width: "100%", borderRadius: 7, padding: 5, backgroundColor:"red", position: "absolute", bottom: 10}}><Text style={{color: "white", fontWeight: "bold"}}>CHỌN MUA</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
