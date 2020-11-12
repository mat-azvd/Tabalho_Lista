import React, {Component} from 'react';
import axios from 'axios';
import api from '../src/api';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import PaginaDetalheContato from './PaginaDetalheContato';
import { NavigationContainer } from '@react-navigation/native';

class PaginaContatos extends React.Component{

    static navigationOptions = {
        title: 'PaginaContato',
        headerStyle: {
            backgroundColor: '#f4511e'
        }
    };

    constructor(props){
        super(props);
        this.state = {
     
       contatos: [],
    }
}


    async componentDidMount(){
        const response = await api.get('')

        console.log(response.data);

        this.setState({ contatos: response.data});
    }

    onItemPress = (contato) => {
        this.props.navigation.navigate('PaginaDetalheContato', {detalhes: contato})
    }
    

    render(){

        const {contatos} = this.state;

        return(
            
            <View >
                
                <div>
                <ScrollView style={styles.container}>
                    {contatos.map(contato => (
                        <li style={{listStyleType: 'none'}} key={contato.id}>
                            
                            <h2 style={{border:'double'}}>
                                <TouchableOpacity style={{flexDirection: 'row', backgroundColor:'#5F9EA0'}} onPress={() => this.onItemPress(contato)}>
                                    
                                    <Image style={{height: 50, width: 50, borderRadius: 25}} source={{uri: contato.picture}}/>
                                    <Text style={{fontSize:'120%'}}> <strong>{contato.name}</strong></Text>
                                </TouchableOpacity>   
                            </h2>
                            
                        </li>
                    ))}
                </ScrollView>
                </div>
                
            </View>
            
           
        );
    }

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B0E0E6',
    },
  });
  

export default PaginaContatos;