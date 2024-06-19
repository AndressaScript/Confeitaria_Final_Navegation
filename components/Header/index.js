import {View, Text, Image} from 'react-native'
import estilo from './style'

export default function Header(imagem){
    return(
        <>
            <Text style={estilo.titulo}>Bubble Cake</Text>
             <View style={{width:'95%', marginTop: 20, alignItems:'center', justifyContent:"space-between" }}>
             <Image style={estilo. imagemHeader} source={{ uri: 'https://images.vexels.com/media/users/3/240278/isolated/preview/80ab36c60fe50f9a10bd335b4dcb2945-doces-e-confeitaria-6.png' }} />
            </View>

        </>
    )
}