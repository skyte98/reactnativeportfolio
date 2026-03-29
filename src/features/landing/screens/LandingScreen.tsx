import { StyleSheet, Text, View } from 'react-native';

const LandingScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Landing Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default LandingScreen;
