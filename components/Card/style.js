import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    cardTarefa: {
        marginTop: 20,
        backgroundColor: '#ffb8c2',
        width: '90%',
        height: 300,
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius: 10,
        borderColor: '#ff8fa0',
        borderWidth: 2,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
      },  
      textoCard: {
        fontSize: 13,
        marginTop: 5,
        color:'#990219'
      },
      imagemCard: {
        width: '90px',
        height: '90px',
        marginRight: 15,
        borderRadius: 10,

      },
      tituloCard: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#bf021f',
      },
      preco:{
        color:'#bf021f',
        fontSize:17
      }
})

export default estilo;