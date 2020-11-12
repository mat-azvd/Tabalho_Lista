
import React, {Component} from 'react';
import axios from 'axios';
import api from '../src/api';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import PaginaContatos from './PaginaContatos';

export default class PaginaDetalheContato extends Component{

   static navigationOptions = {
       title: 'PaginaDetalheContato',
   };

  render() {

        
    const { detalhes } = this.props.navigation.state.params
      
        return (
            <div>
            <ScrollView>
               <h2 style={{border:'double'}}>
                 
                                
                <Image style={{height: 50, width: 50, borderRadius: 25}} source={{uri: detalhes.picture}}/>
                <Text style={{fontSize:'120%'}}> <strong>{detalhes.name}</strong></Text>
                                
                </h2>
           </ScrollView> 
           </div>
        )
  }
}

/*

*/