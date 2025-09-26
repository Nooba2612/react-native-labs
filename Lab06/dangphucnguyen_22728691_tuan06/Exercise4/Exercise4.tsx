import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './HomeScreen'
import ProductDetailsScreen from './ProductDetailScreen'

const Stack = createStackNavigator();


export default function Exercise4() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ title: "Chi tiết sản phẩm" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
