import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Introduction from '../screens/introduction';
import DetailScreen from '../screens/Detail';




const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (

        <Stack.Navigator initialRouteName='1'>
            <Stack.Screen name="1" component={WelcomeScreen} />
            <Stack.Screen name="2" component={Introduction} />
            <Stack.Screen name="3" component={DetailScreen} />
        </Stack.Navigator>

    );
};

export default RootNavigator;