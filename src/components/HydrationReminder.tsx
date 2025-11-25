import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

interface HydrationReminderProps {
  lastAddedTime?: number;
}

export const HydrationReminder: React.FC<HydrationReminderProps> = ({ lastAddedTime }) => {
  const [showReminder, setShowReminder] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const checkReminder = () => {
      if (lastAddedTime) {
        const timeSinceLastDrink = Date.now() - lastAddedTime;
        const fiveMinutes = 5 * 60 * 1000;

        if (timeSinceLastDrink >= fiveMinutes && !showReminder) {
          setShowReminder(true);
          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.delay(5000),
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }),
          ]).start(() => setShowReminder(false));
        }
      }
    };

    const interval = setInterval(checkReminder, 60000); // Verificar a cada minuto
    return () => clearInterval(interval);
  }, [lastAddedTime, showReminder, fadeAnim]);

  if (!showReminder) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Ionicons name="water-outline" size={24} color={colors.primary} />
      <Text style={styles.text}>Hora de se hidratar! 💧</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    gap: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
