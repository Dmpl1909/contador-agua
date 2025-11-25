import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface GoalSettingsProps {
  currentGoal: number;
  currentCount: number;
  onSetGoal: (goal: number) => boolean;
}

export const GoalSettings: React.FC<GoalSettingsProps> = ({ 
  currentGoal, 
  currentCount, 
  onSetGoal 
}) => {
  const [inputValue, setInputValue] = useState(currentGoal.toString());

  const handleSetGoal = () => {
    const newGoal = parseInt(inputValue);
    const success = onSetGoal(newGoal);
    
    if (!success) {
      Alert.alert('Erro', 'Por favor, insira um número válido maior que 0');
      setInputValue(currentGoal.toString());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="flag" size={20} color={colors.primary} />
        <Text style={styles.title}>Meta Diária</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          keyboardType="numeric"
          placeholder="Meta"
          placeholderTextColor={colors.text.light}
        />
        <TouchableOpacity 
          style={styles.buttonInside} 
          onPress={handleSetGoal}
          activeOpacity={0.7}
        >
          <Ionicons name="checkmark" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {currentCount} / {currentGoal} copos
        </Text>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${Math.min((currentCount / currentGoal) * 100, 100)}%` }
            ]} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    paddingRight: 50,
    fontSize: 16,
    color: colors.text.primary,
  },
  buttonInside: {
    position: 'absolute',
    right: 4,
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    gap: 8,
  },
  progressText: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
});
