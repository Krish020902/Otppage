import React, { useState } from "react";
import {
  View,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3a3332",
      }}
    >
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{ backgroundColor: "rgb(132,194,37)", padding: 10, margin: 10 }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MobileNo")}
        style={{ backgroundColor: "rgb(132,194,37)", padding: 10 }}
      >
        <Text style={{ color: "white" }}>Signup</Text>
      </TouchableOpacity>
    </View>
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
export default Home;
