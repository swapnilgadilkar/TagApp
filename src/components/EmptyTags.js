import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function EmptyTags() {
  return (
    <View style={styles.container}>
      <Text style={styles.labels}>No Objects Found!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labels: {
    fontSize: 16,
    fontWeight: '600',
    color: '#B8B8B8',
  },
});
