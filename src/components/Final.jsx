import React from "react";
import {View,Text} from 'react-native';



export default function Final({navigation}){
    return(
        <View>
            <Text> Pedido realizado com sucesso</Text>
            <Text>Seu Pedido esta sendo praparado e logo logo sairá para a entrega</Text>

            <TouchableOpacity onPress={()=> navigation.navigate('')}>
                <Text>Voltar para o Cardápio</Text>
            </TouchableOpacity>
        </View>
    );
}