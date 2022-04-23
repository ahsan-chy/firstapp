// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import EducationScreen from './screens/EducationScreen';
import SkillsScreen from './screens/SkillsScreen';
import ErozgarScreen from './screens/ErozgarScreen';
import ContactScreen from './screens/ContactScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import SignInScreen from "./screens/SignInScreen"


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
        <Stack.Screen name="Skills" component={SkillsScreen} />
        <Stack.Screen name="Erozgar" component={ErozgarScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;