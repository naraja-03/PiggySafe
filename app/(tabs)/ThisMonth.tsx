import { StyleSheet, Text, View } from 'react-native';

export default function ThisMonth() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This Month</Text>
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
