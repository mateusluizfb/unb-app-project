import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import Login from './src/pages/login';
import NewPerson from './src/pages/person/new'

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro Pessoa" component={NewPerson} />
    </Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <AppStack />
    </NavigationContainer>
  );
}
