import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

interface CounterProps {
  count: number;
}

export const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>
      <Text style={styles.label}>copos bebidos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  number: {
    fontSize: 80,
    fontWeight: 'bold',
    color: colors.primary,
  },
  label: {
    fontSize: 18,
    color: colors.text.secondary,
    marginTop: 5,
  },
});
