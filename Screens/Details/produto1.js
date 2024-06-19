import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Details() {
  const route = useRoute()
  return (
    <View style={estilo.container}>
      <Image style={estilo.imagemCard} source={{uri : route.params.imagem}}></Image>
       <Text style={estilo.tituloCard}>{route.params.titulo}</Text>
      <Text style={estilo.textoCard}>{route.params.descricao}</Text>
      <Text style={estilo.preco}>{route.params.preco}</Text>
      </View>

     
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    justifyContent: 'center',
    width:'100%',
    alignItems: 'center',
    backgroundColor: '#ffc7cf',
    paddingHorizontal: 20,
  
  },
  imagemCard: {
    width: '250px',
    height: '250px',
    marginRight: 15,
    borderRadius: 10,
    marginBottom:10,

  },

  tituloCard: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#bf021f',
  },

  textoCard: {
    fontSize: 20,
    marginTop: 5,
    color:'#990219'
  },

  preco:{
    color:'#bf021f',
    fontSize:20
  }

});