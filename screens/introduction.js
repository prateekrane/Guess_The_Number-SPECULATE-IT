import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';

function Introduction() {

    return (
        <>
            <View style={{ flex: 1 }}>

                <View style={{ marginTop: 180, }}>
                    <ImageBackground
                        source={require('../assets/thinking.png')}

                        style={{ height: 450, width: 350, opacity: 0.35, marginRight: 10, }}
                    />
                </View>
            </View>





            <View style={{ alignItems: "center", marginTop: 20, }}>
                <View style={styles.container}>
                    <Text style={{ fontFamily: 'new', fontSize: 30 }}>Choose Your Option</Text>
                    <TouchableOpacity >
                        <View >
                            <Text style={styles.txt}> Game Rules</Text>
                        </View></TouchableOpacity>

                    <TouchableOpacity >
                        <View >
                            <Text style={styles.txt}> play game</Text></View></TouchableOpacity>
                </View>


            </View>
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
    uppertxt: {

    },
})