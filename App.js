import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import PaginaContatos from './paginas/PaginaContatos';
import PaginaDetalheContato from './paginas/PaginaDetalheContato';
import { createDrawerNavigator } from '@react-navigation/drawer';

import api from './src/api';

const Drawer = createDrawerNavigator();


function App() {
  return (
    <View style={styles.container} >
        <NavigationContainer >
          <Drawer.Navigator drawerStyle={{backgroundColor: 'black'}} initialRouteName="PaginaContatos" 
          
          drawerContentOptions={{
            activeTintColor: 'black',
            activeBackgroundColor: 'grey',
            inactiveTintColor: 'black',
            inactiveBackgroundColor: 'white',
            labelStyle:{
              marginLeft:5
            }
          }}

          >
            <Drawer.Screen name="PaginaContatos"  component={PaginaContatos} 
            options={{
              title: 'Contatos',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
            <Drawer.Screen name="PaginaDetalheContato" component={PaginaDetalheContato}
            options={{
              title: 'Detalhes',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              /*headerRight: () => (
                <Button
                  onPress={() => this.props.navigation.navigate('PaginaContatos')}
                  title="Voltar"
                  
                />
              ),
              */
              
            }} 
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    //style={{backgroundColor:'#5F9EA0'}}
  },
});



export default App;