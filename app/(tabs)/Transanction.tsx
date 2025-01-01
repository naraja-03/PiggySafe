import { StyleSheet, Text, View } from 'react-native';

export default function Transanction() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transanctions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FF'
  },
  text: {
    fontSize: 24,
    color: '#000'
  },
});
