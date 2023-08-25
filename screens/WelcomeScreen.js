import Colors from '../constants/Colors';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';



function WelcomeScreen({ coolget }) {

    const [free, setfree] = useState(false);

    function invokecondition() {
        setfree();
        coolget(free);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.styText}> Speculate It !!</Text>
            <TouchableOpacity style={{ width: '90%', marginLeft: 165, }}
                onPress={invokecondition}
            >
                <View style={styles.lowercase}>

                    <Text style={styles.lowText}> Let's Begin...</Text>

                </View>
            </TouchableOpacity>
        </View>

    );


}

export default WelcomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",


    },
    styText: {
        fontFamily: 'satisfy',
        fontSize: 40,
        textAlign: "center",
        marginTop: 95,
        // backgroundColor: Colors.check,
    },
    lowercase: {
        justifyContent: "center",
        alignItems: "center",
        width: '50%',
        height: 40,
        marginTop: 260,
        // backgroundColor: "white",
        borderRadius: 7,

        borderWidth: 1,
    },
    lowText: {
        fontFamily: 'satisfy',
        fontSize: 25,

    }

});