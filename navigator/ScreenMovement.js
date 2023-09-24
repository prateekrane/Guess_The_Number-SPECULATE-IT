import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "../screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "../screens/GameScreen";
import GameOver from "../screens/GameOver";
import Colors from "../constants/Colors";
function ScreenMovement() {
  const [userNumber, setuserNumber] = useState("");
  const [gameover, setgameover] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  function pickedNumberHandler(pickedNumber) {
    setuserNumber(pickedNumber);
    setgameover(false);
  }

  function gameOverHandler(numberofRounds) {
    setgameover(true);
    setGuessRounds(numberofRounds);
  }

  function startNewGameHandler() {
    setuserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameover && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
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
        <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default ScreenMovement;
