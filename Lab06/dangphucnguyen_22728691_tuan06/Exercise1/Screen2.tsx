import {Image,View, StyleSheet, Text, Pressable } from 'react-native'
import {useNavigation} from '@react-navigation/native'


const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={{height: "100%"}}>
      <View style={{flexDirection: "row", backgroundColor: "white"}}>
        <Image style={{width:130, height:160}} source={require("../assets/vs_blue.png")} />
        <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={{width: "100%", alignItems: "center", backgroundColor: "#C4C4C4"}}>
        <Text style={{alignSelf: "flex-start"}}>Chọn một màu bên dưới:</Text>
        <Pressable onPress={() => navigation.navigate("Screen3")} style={{width: 80, height: 80, backgroundColor:"cyan", margin: 10}}></Pressable>
        <Pressable onPress={() => navigation.navigate("Screen3")} style={{width: 80, height: 80, backgroundColor:"red", margin: 10}}></Pressable>
        <Pressable onPress={() => navigation.navigate("Screen3")} style={{width: 80, height: 80, backgroundColor:"black", margin: 10}}></Pressable>
        <Pressable onPress={() => navigation.navigate("Screen3")} style={{width: 80, height: 80, backgroundColor:"blue", margin: 10}}></Pressable>
      </View>

      <Pressable style={{flexDirection: "row", justifyContent:"space-around",alignItems: "center", width: "100%", borderRadius: 7, padding: 5, backgroundColor:"#1952E294", position: "absolute", bottom: 10}}><Text style={{color: "white", fontWeight: "bold"}}>XONG</Text></Pressable>
    </View>
  )

}

export default Screen2