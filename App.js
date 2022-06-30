import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login';
import CadastroPessoa from './cadastroPessoa' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='CadastroPessoa' component={CadastroPessoa} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
        <AppStack />
    </NavigationContainer>
  );
}

