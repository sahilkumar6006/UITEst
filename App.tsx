import Home from '@/screens/Home/Home';
import { ThemeProvider } from '@/context/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyTabs from '@/navigation/AppNavigator';
const App = () => {
  return (
    <>
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </SafeAreaProvider>

    </>

  )
}

export default App;