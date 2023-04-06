import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";

import OTP from "./OTP";
import Home from "./Home";
import MobileNo from "./MobileNo";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            cardStyle: { backgroundColor: "#3a3332" },
          }}
        />
        <Stack.Screen
          name="MobileNo"
          component={MobileNo}
          options={{
            cardStyle: { backgroundColor: "#3a3332" },
          }}
        />
        <Stack.Screen
          name="OTP1"
          component={OTP}
          options={{
            cardStyle: { backgroundColor: "#3a3332" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    color: "white",
  },
  logo: {
    marginTop: 60,
    alignSelf: "center",
    width: 300,
    height: 80,
  },
  font: {
    color: "white",
    marginLeft: 15,
    marginTop: 5,
  },
  phoneInput: {
    color: "white",
    height: 40,
    width: 350,
    borderColor: "rgb(132,194,37)",
    borderWidth: 1,
    margin: 15,
  },
});
export default App;
