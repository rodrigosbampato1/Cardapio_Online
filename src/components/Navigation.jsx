import React from 'react';
import {Text , View }from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Initial from './Initial';
import Cardapio from './Cardapio';
import Pedido from './Pedido';
import Final from './Final';


const Stack = createStackNavigator();

export default function Navigation({navigation}){

    
    return(
        <Stack.navigator initialRouteName={Initial}>
            <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }}  />
            <Stack.Screen name="Cardapio" component={Cardapio} options={{ headerShown: false }}  />
            <Stack.Screen name="Pedido" component={Pedido} options={{ headerShown: false }}  />
            <Stack.Screen name="Final" component={Final} options={{ headerShown: false }}  />


 
 
 
 
        </Stack.navigator>
    
    )
        
}



