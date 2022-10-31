import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { Provider } from 'react-redux'
import { store } from './store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import DrawerContent from './src/navigation/DrawerContent';


const Stack = createNativeStackNavigator();
// Variabile per Drawer navigator
const Drawer = createDrawerNavigator();

export default function App() {

  const [isLogdin, setIsLogdIn] = useState(true)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar backgroundColor={'#fff'} barStyle={"dark-content"} />

          {
            isLogdin ?
              <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: "right" }} drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={Home} />
              </Drawer.Navigator>
              :

              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
              </Stack.Navigator>

          }

        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
