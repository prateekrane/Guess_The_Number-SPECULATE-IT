import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Colors
    from "../../constants/Colors";
function Card({ children }) {


    return (
        <View style={styles.card}>
            <LinearGradient
                colors={[Colors.high_upper, Colors.low_lower]}
                style={{ height: 310, width: 310 }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    {children}
                </View>
            </LinearGradient>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 24,
        padding: 16,
        marginTop: 56,
        backgroundColor: "white",
        borderRadius: 7,
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
    }
})