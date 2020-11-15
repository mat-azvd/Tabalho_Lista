import React, {Component} from 'react';
import axios from 'axios';
import api from '../src/api';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

class PaginaContatos extends React.Component{

    static navigationOptions = {
        title: 'PaginaContatos',
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
            <View style={styles.container}>    
                <ScrollView >
                    {contatos.map(contato => (                     
                                <TouchableOpacity style={styles.contatoBox} key={contato.id} onPress={() => this.onItemPress(contato)}>                               
                                    <Image style={styles.image} source={{uri: contato.picture}}/>
                                    <Text style={styles.text}> {contato.name}</Text>
                                </TouchableOpacity>                                       
                    ))}
                </ScrollView>
                
                
            </View>
            
           
        );
    }

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
        fontSize: 30,
        marginTop: 8,
        color: '#fff',

    },
    contatoBox: {
        flexDirection: 'row',
        borderWidth:  1, 
        borderStyle: 'solid',
        borderRadius: 10, 
        backgroundColor:'black',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        
    },
    image: {
        height: 50,
        width: 50,
        borderWidth:  3, 
        borderColor: '#fff',
        borderRadius: 25,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 15,
        marginBottom: 5,
    },
  });
  

export default PaginaContatos;