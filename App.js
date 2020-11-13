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
    <View >
        <NavigationContainer>
          <Drawer.Navigator  initialRouteName="PaginaContatos">
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
    backgroundColor: '#B0E0E6',
  },
});



export default App;