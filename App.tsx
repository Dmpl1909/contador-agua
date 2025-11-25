import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header';
import { Counter } from './src/components/Counter';
import { SuccessBanner } from './src/components/SuccessBanner';
import { ActionButtons } from './src/components/ActionButtons';
import { GoalSettings } from './src/components/GoalSettings';
import { useWaterCounter } from './src/hooks/useWaterCounter';
import { colors } from './src/styles/colors';

export default function App() {
  const { 
    copos, 
    meta, 
    adicionarCopo, 
    repor, 
    definirMeta, 
    objetivoAtingido 
  } = useWaterCounter();

  return (
    <View style={styles.container}>
      <Header />
      <Counter count={copos} />
      <SuccessBanner visible={objetivoAtingido} />
      <ActionButtons onAdd={adicionarCopo} onReset={repor} />
      <GoalSettings 
        currentGoal={meta} 
        currentCount={copos} 
        onSetGoal={definirMeta} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
