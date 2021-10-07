import React, {useEffect , useState}  from 'react';


import{View , Text ,ActivityIndicator, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);

const cardapio = async () => {
    try {
     const response = await fetch('https://615b13564a360f0017a8147e.mockapi.io/menu');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
   cardapio();
 }, []);

export default function Initial({navigation}){
    return(
        <View>
               <View style={{ flex: 1, padding: 24 }}>
                                    {isLoading ? <ActivityIndicator/> : (
                                <FlatList
                                data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                            <Text>{item.title}, {item.releaseYear}</Text>
                        )}
                        />
                    )}
                </View>
                
                    <TouchableOpacity onPress={() => navigation.navigate('Cardapio')}>
                        <Text>Ver Cardápio</Text>
                    </TouchableOpacity>
        </View>
    );
    
}
    