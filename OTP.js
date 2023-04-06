import React, { useState } from "react";
import {
  View,
  StatusBar,
  TextInput,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import CountDown from "react-native-countdown-component";
import Timer from "./Timer";
const OTP = ({ navigation }) => {
  const [timer, setTimer] = useState(120);
  const handleTimer = () => {
    navigation.navigate("MobileNo");
  };

  return (
    <View style={{ flex: 1, padding: 30 }}>
      <Image
        source={require("./assets/BlissQuantsTM.jpg")}
        style={styles.logo}
      />
      <Text style={{ color: "white", height: 40, marginTop: 20 }}>
        Enter Verification code sent to your registered number
      </Text>
      <OTPInputView
        style={{ width: "100%", height: 250, marginTop: -60 }}
        pinCount={6}
        placeholderTextColor="white"
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <Text style={{ color: "white", height: 15, marginTop: -60 }}>
        Resend OTP in
        <Timer></Timer>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  logo: {
    // marginLeft: 35,
    marginTop: 60,
    alignSelf: "center",
    width: 300,
    height: 80,
  },
  borderStyleHighLighted: {
    borderColor: "white",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "rgb(132,194,37)",
  },
});
export default OTP;
