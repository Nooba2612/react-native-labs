
import { Text, SafeAreaView, StyleSheet, View,TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { RadioButton } from 'react-native-paper';



export default function ManHinhNhap({ result, phepTinh, setPhepTinh }) {

  return (
   <View style={{backgroundColor: "black", width: "100%" }}>
        <Text style={{color: "white",textAlign: "center" }}>{phepTinh}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});


