import React, { useState } from "react";
import {
  View,
  StatusBar,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import FloatingLabelInput from "./FloatingLabelInput";
const Stack = createStackNavigator();
const MobileNo = ({ navigation }) => {
  return (
    <View>
      <Image
        source={require("./assets/BlissQuantsTM.jpg")}
        style={styles.logo}
      />
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          marginLeft: 15,
          marginTop: 20,
        }}
      >
        Welcome,
      </Text>
      <Text style={styles.font}>Enter Your Mobile Number</Text>
      <FloatingLabelInput label="Enter Mobile Number" />
      <Text style={{ fontWeight: "lighter", color: "grey", marginLeft: 15 }}>
        OTP Message will be sent to your Phone Number
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("OTP1")}
        style={{
          backgroundColor: "rgb(132,194,37)",
          padding: 10,
          marginTop: 10,
          width: 100,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white" }}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
    // position: "absolute",

    color: "white",
    // marginLeft: 2,
  },
  logo: {
    // marginLeft: 35,
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

    // marginBottom: 10,
  },
});
export default MobileNo;
