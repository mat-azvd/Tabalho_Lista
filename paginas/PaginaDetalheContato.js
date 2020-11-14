
import React, {Component} from 'react';
import axios from 'axios';
import api from '../src/api';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';


export default class PaginaDetalheContato extends Component{

   static navigationOptions = {
       title: 'PaginaDetalheContato',
   };

  render() {

        
    const { detalhes } = this.props.route.params
      
        return (
    
            <View style={styles.container}>
              <View style={{
                        alignItems: 'center',
                        height: '80%',
                        width: '80%',
                        borderWidth:  1, 
                        borderStyle: 'solid',
                        borderRadius: 10, 
                        backgroundColor:'#5F9EA0',
                        marginTop: 50,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 10,}}>

                <Image style={styles.image} source={{uri: detalhes.picture}}/>
                <Text style={styles.text}> {detalhes.name}</Text>
              </View>                                       
           </View> 
         
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    
  },
  text: {
      fontSize: 30,
      marginTop: 8,

  },
  /*
  contatoBox: {
      flex: 1,
      
      borderWidth:  1, 
      borderStyle: 'solid',
      borderRadius: 10, 
      backgroundColor:'#5F9EA0',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      
  },
  */
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
});

/*

*/