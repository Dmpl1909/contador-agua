import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface HistoryEntry {
  date: string;
  count: number;
  goal: number;
}

interface HistoryProps {
  history: HistoryEntry[];
}

export const History: React.FC<HistoryProps> = ({ history }) => {
  if (history.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="time-outline" size={20} color={colors.primary} />
          <Text style={styles.title}>Histórico</Text>
        </View>
        <Text style={styles.emptyText}>Sem dados ainda</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="time-outline" size={20} color={colors.primary} />
        <Text style={styles.title}>Histórico</Text>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {history.map((entry, index) => {
          const percentage = Math.min((entry.count / entry.goal) * 100, 100);
          const completed = entry.count >= entry.goal;
          
          return (
            <View key={index} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.dateText}>{entry.date}</Text>
                {completed && (
                  <Ionicons name="checkmark-circle" size={16} color={colors.success} />
                )}
              </View>
              
              <View style={styles.entryContent}>
                <Text style={styles.countText}>
                  {entry.count} / {entry.goal} copos
                </Text>
                <Text style={styles.percentageText}>{percentage.toFixed(0)}%</Text>
              </View>
              
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { 
                      width: `${percentage}%`,
                      backgroundColor: completed ? colors.success : colors.primary
                    }
                  ]} 
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
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
    maxHeight: 250,
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
  emptyText: {
    textAlign: 'center',
    color: colors.text.light,
    fontSize: 14,
    paddingVertical: 20,
  },
  scrollView: {
    maxHeight: 180,
  },
  entry: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
  },
  entryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  countText: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  percentageText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});
