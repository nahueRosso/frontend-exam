
import {  useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
import { StyleSheet, Text,Image, View } from 'react-native'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla
import HomeScreen from './components/main';

const Stack = createStackNavigator();

const App = () => {
  
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Stack.Navigator>
  <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'smartwater',
            headerStyle: {
              backgroundColor: '#2c2c2c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { // Cambiado a headerTitleStyle
              color:'#fff',
              fontFamily:'Inter_400Regular',
            },
            headerTitleAlign: 'center', // Centrar el texto
            headerLeft: () => (
              <View style={{ paddingLeft: 20 }}>
                <Image
                  source={require('./assets/svg/cerrar.png')} // Reemplaza esto con la ruta correcta de tu imagen
                  style={{ width: 15, height: 15 }}
                  resizeMode="contain" // Ajusta la imagen dentro del contenedor
                />
              </View>
            ),
            headerShown: true,
          }}
        />
  </Stack.Navigator>
</NavigationContainer>

  );
};

export default App;
