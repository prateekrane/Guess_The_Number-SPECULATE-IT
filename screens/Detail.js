import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

function DetailScreen({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../assets/rules.png')}
                style={{ flex: 1, height: 200, width: '90%', }}
                imageStyle={{ opacity: 0.45, resizeMode: "contain", marginLeft: 10, marginTop: 300, }}>
                <View >
                    <Text style={styles.uppertxt}>Rules...</Text>
                </View>
                <ScrollView style={{ flex: 1 }} >
                    <Text style={styles.infotxt}>{'\n\n1.Enter the digit i.e grater than 0 and samller than 99. \n'}</Text>
                    <Text style={styles.infotxt}>{'2.Dont try to enter negative number or more than 99. \n'}</Text>
                    <Text style={styles.infotxt}>{'3.After entering the number hint your mobile wheather the your number is grater or smaller than the generated number. \n'}</Text>
                    <Text style={styles.infotxt}>{"4.Dont try to miss lead your mobile, Although my code will catch you ;). \n "} </Text>
                    <Text style={styles.infotxt}>{"5.Enjoy this game :)."}</Text>

                    <View style={styles.lowercontainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('4')}>
                            <Text style={styles.lowertxt}> Tab to play!</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </ImageBackground>
        </View>
    );


}

export default DetailScreen;

const styles = StyleSheet.create({
    uppertxt: {
        fontFamily: 'rules',
        fontSize: 35,
        textAlign: "center",
        marginTop: 45,
        marginLeft: 65,

    },
    infotxt: {
        fontFamily: "rules",
        fontSize: 25,
        marginLeft: 20,
    },
    lowercontainer: {
        marginLeft: 95,
        height: 200,
        width: 200,
        // backgroundColor: "white",
        alignItems: "center",



    },
    lowertxt: {
        fontFamily: "satisfy",
        fontSize: 30,
        marginTop: 70,
        borderWidth: 1,
        height: 50,
        width: 180,
        textAlign: "center",
        borderRadius: 7,
    }
})