import { Text, SafeAreaView, StyleSheet, View,TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { RadioButton } from 'react-native-paper';


export default function BanPhim({result, setPhepTinh, phepTinh, setResult}) {
  const [currentValue, setCurrentValue] = useState<number>();
  
  
  const tinhToan = () => {
      let type = ""
      for (let i=0;i<phepTinh.lenght(); i++) {
        if (phepTinh[i] === "+" || phepTinh[i] === "-" || phepTinh[i] === "*" || phepTinh[i] === "/") {
          type = phepTinh[i]
          return;
        }
      }

      if (type === "+") {
          const numArr = phepTinh.split("+")
          let kq = 0
          for (const num in numArr) {
            kq+= Number(num)
            setResult("1")
          }
      }
  }

  return (
      <View style={{}}>
        <View>
          <TouchableOpacity onPress={() => {setCurrentValue(0);setPhepTinh(prev=> prev+"0")}}>0</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(1);setPhepTinh(prev=> prev+"1")}}>1</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(2);setPhepTinh(prev=> prev+"2")}}>2</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(3);setPhepTinh(prev=> prev+"3")}}>3</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(4);setPhepTinh(prev=> prev+"4")}}>4</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(5);setPhepTinh(prev=> prev+"5")}}>5</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(6);setPhepTinh(prev=> prev+"6")}}>6</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(7);setPhepTinh(prev=> prev+"7")}}>7</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(8);setPhepTinh(prev=> prev+"8")}}>8</TouchableOpacity>
          <TouchableOpacity onPress={() => {setCurrentValue(9);setPhepTinh(prev=> prev+"9")}}>9</TouchableOpacity>
          
        </View>
        <View>
          <TouchableOpacity onPress={() => {setPhepTinh((prev) => prev+"+")}}>+</TouchableOpacity>
          <TouchableOpacity onPress={() => {setPhepTinh((prev) => prev+"-")}}>-</TouchableOpacity>
          <TouchableOpacity onPress={() => {setPhepTinh((prev) => prev+"*")}}>*</TouchableOpacity>
          <TouchableOpacity onPress={() => {setPhepTinh((prev) => prev+"/")}}>/</TouchableOpacity>
          <TouchableOpacity onPress={() => tinhToan()}>=</TouchableOpacity>
          <TouchableOpacity>Xóa</TouchableOpacity>
        </View>
      </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
});
