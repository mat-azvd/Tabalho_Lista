import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
          <Drawer.Navigator drawerStyle={{backgroundColor: '#B0E0E6'}} initialRouteName="PaginaContatos">
            <Drawer.Screen name="Contatos"  component={PaginaContatos} />
            <Drawer.Screen name="PaginaDetalheContato" component={PaginaDetalheContato} />
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