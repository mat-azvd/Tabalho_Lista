
import React, {Component} from 'react';
import axios from 'axios';
import api from '../src/api';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView, Button } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

export default class PaginaDetalheContato extends React.Component{

   static navigationOptions = {
       title: 'PaginaDetalheContato',
   };

  render() {

        
    const { detalhes } = this.props.route.params
      
        return (
    
            <View style={styles.container}>
              <View style={{
                        
                        alignItems: 'center',
                        height: '90%',
                        width: '90%',
                        borderWidth:  1, 
                        borderStyle: 'solid',
                        borderRadius: 10, 
                        backgroundColor:'black',
                        marginTop: 30,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 10,}}>

                <Image style={styles.image} source={{uri: detalhes.picture}}/>

                <View style={styles.contatoBox}>
                <View style={styles.textBorder}><Text style={styles.text}>Nome: {detalhes.name} {detalhes.lastName}</Text></View>
                <View style={styles.textBorder}><Text style={styles.text}>País: {detalhes.country}</Text></View>
                <View style={styles.textBorder}><Text style={styles.text}>Email: {detalhes.email}</Text></View>
                <View style={styles.textBorder}><Text style={styles.text}>Telefone: {detalhes.tel}</Text></View>
                <View style={styles.textBorder}><Text style={styles.text}>Profissão: {detalhes.job}</Text></View>
             </View>
             <TouchableOpacity style={styles.appButtonContainer}
                title="Voltar"
                color= "black"
                onPress={() => this.props.navigation.navigate('PaginaContatos')}
              >
                <Text style={styles.appButtonText}>Voltar</Text>
              </TouchableOpacity>
                
              </View>                                       
           </View> 
         
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  text: {
      paddingLeft: 5,
      backgroundColor:'#fff',
      color:'black',
      marginLeft: 10,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      fontSize: responsiveFontSize(2),
 

  },

  textBorder: {
    borderColor: '#fff',
    borderRadius: 25,
    marginTop: 8,
    borderWidth: 5, 
    borderStyle: 'solid',

  },

  textBox: {
    fontSize: responsiveFontSize(2),
    marginTop: 8,
  },
 
  contatoBox: {
      flex: 1,
      
      alignSelf: 'stretch',
      
      backgroundColor:'black',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      
  },
 
  image: {
      height: 200,
      width: 200,
      borderWidth:  5, 
      
      borderRadius: 25,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      

      /*
      marginTop: 5,
      marginLeft: 5,
      marginRight: 15,
      marginBottom: 5,
      */
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

/*

*/