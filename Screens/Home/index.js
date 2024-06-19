import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import Header from '../../components/Header'
import Card from '../../components/Card';
import DATA1 from '../../data/index';
import DATA2 from '../../data/index2';


export default function Home() {
  return (
    <View style={estilo.container}>
      <Header></Header>
     <View style = {{width:'100%'}}>
      <FlatList
      horizontal = {true}
      data = {DATA1}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => (
    
        <Card
        titulo = {item.titulo}
        preco = {item.preco}
        imagem = {item.imagem}
        descricao = {item.descricao}
        />

      ) }

      />
</View>

<View  style = {{width:'100%'}}>

<FlatList
      horizontal = {true}
      data = {DATA2}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => (
    
        <Card
        titulo = {item.titulo}
        preco = {item.preco}
        imagem = {item.imagem}
        descricao = {item.descricao}
        />

      ) }

      />
      </View>
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
  }
});