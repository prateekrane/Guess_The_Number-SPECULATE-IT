import Colors from "../constants/Colors";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[Colors.high_upper, Colors.low_lower]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.1 }}
      >
        <View style={styles.container}>
          <Text style={styles.styText}> Speculate It !!</Text>
          <TouchableOpacity
            style={{ width: "90%", marginLeft: 165 }}
            onPress={() => navigation.navigate("2")}
          >
            <View style={styles.lowercase}>
              <Text style={styles.lowText}> Let's Begin...</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  styText: {
    fontFamily: "satisfy",
    fontSize: 40,
    textAlign: "center",
    marginTop: 95,
    // backgroundColor: Colors.check,
  },
  lowercase: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 40,
    marginTop: 260,
    // backgroundColor: "white",
    borderRadius: 7,

    borderWidth: 1,
  },
  lowText: {
    fontFamily: "satisfy",
    fontSize: 25,
  },
});
