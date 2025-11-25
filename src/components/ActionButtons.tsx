import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface ActionButtonsProps {
  onAdd: () => void;
  onReset: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onAdd, onReset }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonPrimary} onPress={onAdd} activeOpacity={0.7}>
        <Ionicons name="add-circle" size={24} color={colors.white} />
        <Text style={styles.buttonTextPrimary}>Adicionar Copo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={onReset} activeOpacity={0.7}>
        <Ionicons name="refresh" size={24} color={colors.primary} />
        <Text style={styles.buttonTextSecondary}>Repor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 30,
    gap: 12,
  },
  buttonPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    gap: 8,
  },
  buttonSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    gap: 8,
  },
  buttonTextPrimary: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
