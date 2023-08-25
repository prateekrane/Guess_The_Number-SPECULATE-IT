import { View, Text, Image, StyleSheet } from 'react-native';
import Title from '../components/ui/Titles';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootcontainer}>
            <Title>Game Over!</Title>
            <View style={styles.imagecontainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/cback.png')} />
            </View>
            <Text style={styles.summaryTxt}>Your Mobile has taken <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Restart</PrimaryButton>
        </View>
    );
}

export default GameOver;

const styles = StyleSheet.create({
    rootcontainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: 'center',
    },
    imagecontainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        // borderWidth: 3,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryTxt: {
        fontFamily: 'working_text',
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'working_text',
    },
})