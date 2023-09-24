import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
function Introduction({ navigation }) {
  return (
    <>
      <LinearGradient
        colors={[Colors.high_upper, Colors.low_lower]}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={{ flex: 1 }}
          imageStyle={{ opacity: 0.1 }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: 180 }}>
              <ImageBackground
                source={require("../assets/thinking.png")}
                style={{
                  height: 450,
                  width: 350,
                  opacity: 0.5,
                  marginRight: 10,
                }}
              />
            </View>
          </View>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View style={styles.container}>
              <Text style={{ fontFamily: "new", fontSize: 30 }}>
                Choose Your Option
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("3")}>
                <View>
                  <Text style={styles.txt}> Game Rules</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("4")}>
                <View>
                  <Text style={styles.txt}> play game</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

export default Introduction;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    // backgroundColor: Colors.check,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 250,
  },
  txt: {
    fontFamily: "new",
    fontSize: 25,
    borderRadius: 7,
    marginVertical: 20,
    borderWidth: 2,

    textAlign: "center",
    height: 50,
    width: 200,
    padding: 4,
  },
  uppertxt: {},
});
