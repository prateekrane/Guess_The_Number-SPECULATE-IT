import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
    return (

        <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonouter}>

                    <Text style={styles.buttontext}>{children}</Text>

                </View>
            </TouchableOpacity>
        </View>

    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonouter: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
        borderWidth: 1,
        height: 40,
        width: 120,
        marginLeft: -20,

    },
    buttontext: {
        textAlign: "center",
        fontFamily: 'working_text',
        fontSize: 25,
        marginTop: 1,

    }
})