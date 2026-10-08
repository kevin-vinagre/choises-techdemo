import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/features/HomePage/view/HomePage.js';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage></HomePage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
