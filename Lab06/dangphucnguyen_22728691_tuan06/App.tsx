import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Exercise1 from './Exercise1/Exercise1'
import Exercise3 from './Exercise3/Exercise3'
import Exercise4 from './Exercise4/Exercise4'
import Exercise5 from './Exercise5/Exercise5'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      {/* Ex1
      <Exercise1 />
      */}
       
      {/* Ex3 
      <Exercise3 /> 
      */}

      {/* Ex4 
      <Exercise4 />
      */}

      {/* Ex5 
      */}
      <Exercise5 />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
