import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import MainScreen from './src/screens/MainScreen';
import R from 'res/R';
import LanguagesScreen from './src/screens/LanguagesScreen';
import CreateToDoScreen from './src/screens/CreateToDoScreen';
import { Provider as TodoProvider } from './src/context/TodoContext';
import TodoDetailScreen from './src/screens/TodoDetailScreen';
import EditToDoScreen from './src/screens/EditToDoScreen';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

function HomeRoot() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={R.routes.main} component={MainScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name={R.routes.languages} component={LanguagesScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name={R.routes.createToDo} component={CreateToDoScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name={R.routes.todoDetail} component={TodoDetailScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name={R.routes.editToDo} component={EditToDoScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={R.routes.splash} component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name={R.routes.home} component={HomeRoot} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </TodoProvider>
    );
  };
}

export default App;
