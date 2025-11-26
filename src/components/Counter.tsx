import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../styles/colors';

interface CounterProps {
  count: number;
  percentage: number;
}

export const Counter: React.FC<CounterProps> = ({ count, percentage }) => {
  const fillHeight = Math.min(percentage, 100);
  
  return (
    <View style={styles.container}>
      <View style={styles.glassContainer}>
        {/* Copo com sombra */}
        <View style={styles.glassShadow} />
        <View style={styles.glass}>
          {/* Água com gradiente */}
          <View style={[styles.waterContainer, { height: `${fillHeight}%` }]}>
            <View style={styles.water}>
              {/* Bolhas de água */}
              {fillHeight > 20 && (
                <>
                  <View style={[styles.bubble, styles.bubble1]} />
                  <View style={[styles.bubble, styles.bubble2]} />
                  <View style={[styles.bubble, styles.bubble3]} />
                </>
              )}
              {/* Brilho na água */}
              <View style={styles.waterShine} />
              {/* Ondas no topo */}
              <View style={styles.waterSurface}>
                <View style={styles.wave} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.label}>{count} copos bebidos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  glassContainer: {
    width: 150,
    height: 240,
    marginBottom: 25,
    position: 'relative',
    alignItems: 'center',
  },
  glassShadow: {
    position: 'absolute',
    bottom: -10,
    width: 160,
    height: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 100,
    opacity: 0.6,
  },
  glass: {
    width: '100%',
    height: '100%',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderTopWidth: 3,
    borderColor: colors.primary,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(33, 150, 243, 0.03)',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  waterContainer: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  water: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    position: 'relative',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  waterShine: {
    position: 'absolute',
    width: 50,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 40,
    top: '20%',
    left: 15,
    transform: [{ rotate: '-15deg' }],
  },
  waterSurface: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 8,
    overflow: 'hidden',
  },
  wave: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 4,
  },
  bubble: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  bubble1: {
    width: 12,
    height: 12,
    bottom: '30%',
    left: '25%',
  },
  bubble2: {
    width: 8,
    height: 8,
    bottom: '50%',
    right: '30%',
  },
  bubble3: {
    width: 10,
    height: 10,
    bottom: '70%',
    left: '50%',
  },
  label: {
    fontSize: 20,
    color: colors.text.secondary,
    marginTop: 5,
    fontWeight: '600',
  },
});
