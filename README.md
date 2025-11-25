# 💧 Contador de Água

Aplicação móvel e web para registar o consumo diário de água.

## 🎯 Funcionalidades

- ✅ Contador de copos de água bebidos
- ✅ Botão para adicionar copos (+1)
- ✅ Botão para repor contador
- ✅ Definir meta diária personalizada
- ✅ Barra de progresso visual
- ✅ Notificação quando atingir objetivo
- ✅ Proteção contra valores negativos

## 🚀 Como executar

### Web
```bash
npm run web
```
Aceder em: http://localhost:8081

### Android
```bash
npm run android
```
Ou ler o QR code com Expo Go

### iOS
```bash
npm run ios
```
Ou ler o QR code com a app Camera

## 📁 Estrutura do Projeto

```
src/
├── components/        # Componentes React
│   ├── Header.tsx
│   ├── Counter.tsx
│   ├── SuccessBanner.tsx
│   ├── ActionButtons.tsx
│   ├── GoalSettings.tsx
│   └── index.ts
├── hooks/            # Custom hooks
│   └── useWaterCounter.ts
└── styles/           # Estilos e temas
    └── colors.ts
```

## 🛠️ Tecnologias

- React Native
- Expo
- TypeScript
- @expo/vector-icons
