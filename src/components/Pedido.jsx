import React from "react";
import {View , Text, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Pedido({navigation}){
    return(
        <View>
            <Text>Nome do Combo</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorem ad iusto a illum repellendus impedit odio iste corrupti minima nobis laborum, minus officia qui repellat similique enim ipsam placeat.</Text>

            

            <View>
                <Text>Quantidade</Text>
            </View>

            <TouchableOpacity onPress ={() => navigation.navigate('Final')}>
                <Text> Fazer pedido</Text>
            </TouchableOpacity>
        </View>
    );
}