import { View, Text, StyleSheet } from "react-native";


function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create(
    {
        container: {
            borderWidth: 4,
            padding: 24,
            borderRadius: 8,
            margin: 24,
            alignItems: 'center',
            justifyContent: "center",
        },
        numberText: {
            fontSize: 36,
            fontFamily: 'working_text',
        },
    }
)