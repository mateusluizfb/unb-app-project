import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import Login from './src/pages/login.js';
import NewPerson from './src/pages/person/new.js'
import Start from './src/pages/start.js'
import Home from './src/pages/home.js'

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <Navigator>
      <Screen name="Start" component={Start}/>
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro Pessoa" component={NewPerson} />
      <Screen name="Home" component={Home}/>
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
