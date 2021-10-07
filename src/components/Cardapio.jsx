import React from 'react';
import {View , Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Cardapio({navigation}){
    return(
        <View>
            <Image source = {required = ('../../assets/background.png')}></Image>

            <View>
                <Text>
                    It Burguer
                </Text>

                <Text>
                    Hamburgueria - 2.7 km
                </Text>

                <View>
                    <Image 
                    onPress={()=> navigation.navigate('Pedido')}
                    source= {required('../../assets/Card1.png')} ></Image>
                </View>
                <View>
                    onPress={() => navigation.navigate('Pedido')}
                    <Image source= {required('../../assets/Card1.png')} ></Image>
                </View>
                <View>
                    onPress={() => navigation.navigate('Pedido')}
                    <Image source= {required('../../assets/Card2.png')} ></Image>
                </View>
                <View>
                    onPress={() => navigation.navigate('Pedido')}
                    <Image source= {required('../../assets/Card2.png')} ></Image>
                </View>
            </View>

           

          
        </View>

        
            


        
    );

}