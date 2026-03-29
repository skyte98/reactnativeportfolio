import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AppNavigator from './src/app/navigation/AppNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return <AppNavigator />;
}

export default App;
