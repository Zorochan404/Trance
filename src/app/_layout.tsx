import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import { darkTheme, lightTheme } from '../styles';








const LightScheme =  {
 ...MD3LightTheme,
  colors: lightTheme, 
};

const DarkScheme = {
  ...MD3DarkTheme,
  colors: darkTheme, 
  
};


const App:React.FC = () => {
  const colorScheme = useColorScheme()
 
  const theme = colorScheme === 'dark' ? DarkScheme : LightScheme;


  return (
    <SafeAreaProvider>
    <PaperProvider theme ={theme}>
      <RootNavigation />
      <StatusBar style='auto' />
      </PaperProvider>
    </SafeAreaProvider>
  );
}



const RootNavigation = () => {
  return(
    <Stack>
    <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
    <Stack.Screen name= 'SigninScreen' options= {{headerShown: false}} />
  </Stack>
  )
  
}


export default App