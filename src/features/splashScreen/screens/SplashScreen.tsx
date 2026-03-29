import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Landing'); // or Login
    }, 800); // match figma delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FinWise</Text>
      {/* Replace with your logo if you have SVG/Image */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12B886', // match your green
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
});
