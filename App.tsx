import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header } from './src/components/Header';
import { Counter } from './src/components/Counter';
import { SuccessBanner } from './src/components/SuccessBanner';
import { HydrationReminder } from './src/components/HydrationReminder';
import { ActionButtons } from './src/components/ActionButtons';
import { GoalSettings } from './src/components/GoalSettings';
import { History } from './src/components/History';
import { useWaterCounter } from './src/hooks/useWaterCounter';
import { colors } from './src/styles/colors';

export default function App() {
  const { 
    copos, 
    meta,
    history,
    lastAddedTime,
    adicionarCopo, 
    repor,
    salvarDiaAtual,
    definirMeta, 
    objetivoAtingido 
  } = useWaterCounter();

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Counter count={copos} />
        <SuccessBanner visible={objetivoAtingido} />
        <HydrationReminder lastAddedTime={lastAddedTime} />
        <ActionButtons onAdd={adicionarCopo} onReset={repor} onSaveDay={salvarDiaAtual} />
        <GoalSettings 
          currentGoal={meta} 
          currentCount={copos} 
          onSetGoal={definirMeta} 
        />
        <View style={styles.spacer} />
        <History history={history} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 40,
  },
  spacer: {
    height: 20,
  },
});
