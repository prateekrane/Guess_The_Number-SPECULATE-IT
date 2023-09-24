import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Titles";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import { useState } from "react";

function StartGameScreen({ onPickNumber }) {
  const [enterednumber, setenterednumber] = useState("");

  function numberInputHandler(enterednumber) {
    setenterednumber(enterednumber);
  }
  function resetInputHandler() {
    setenterednumber("");
  }
  function confirmInputHandler() {
    const choseNumber = parseInt(enterednumber);

    if (isNaN(enterednumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Invalid Number!", "Number rang sholud be from 1 to 99.", [
        { text: "Okay", style: "default", onPress: resetInputHandler },
      ]);
    } else {
      onPickNumber(choseNumber);
    }
  }

  return (
    <View style={styles.rootcontainer}>
      <Title>Speculate It !!</Title>
      <Card>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InstructionText> Enter A number </InstructionText>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            style={styles.numberInput}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enterednumber}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.buttoncontainer}>
            <View style={{ flex: 1 }}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={{ flex: 1 }}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.check,
    borderBottomWidth: 2,
    marginVertical: 8,
    textAlign: "center",
    fontFamily: "satisfy",
    marginTop: 10,
    // backgroundColor: "white",
  },
  buttoncontainer: {
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 25,
  },
});
