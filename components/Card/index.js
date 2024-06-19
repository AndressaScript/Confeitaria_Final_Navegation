import{Text,View,Image,TouchableOpacity} from 'react-native'
import estilo from './style'
import { useNavigation } from '@react-navigation/native'

export default function Card({preco,titulo,imagem, descricao}){
    const navigation = useNavigation();


    return(
        <TouchableOpacity 
            onPress={() => navigation.navigate('Details',{titulo:titulo,preco:preco,descricao:descricao,imagem:imagem})}
        >

        <View style={estilo.cardTarefa}>
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
            <View style={{  marginLeft: 15,width:150 }}>
                 <Text style={estilo.tituloCard}>{titulo}</Text>
                <Text style={estilo.textoCard}>{descricao}</Text>
            </View>
            <Text style={estilo.preco}>{preco}</Text>
        </View>
    </TouchableOpacity>
    )
}