import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  const [posture, setPosture] = useState('Straight✅');
  const [confidence, setConfidence] = useState(0.95);
  const [status, setStatus] = useState('Mock Mode');

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.random();
      if (r < 0.4) {
        setPosture('Straight✅');
        setConfidence(0.92 + Math.random() * 0.08);
      } else if (r < 0.75) {
        setPosture('SLOUCH🚨');
        setConfidence(0.88 + Math.random() * 0.12);
      } else {
        setPosture('Lean⚠️');
        setConfidence(0.85 + Math.random() * 0.1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <Text style={styles.title}>🧠 SpineLine AI Vest</Text>
      <Text style={styles.status}>Status: {status}</Text>
      <Text style={[
        styles.posture, 
        posture.includes('Straight') ? styles.good : styles.bad
      ]}>
        {posture} {(confidence * 100).toFixed(0)}%
      </Text>
      <Text style={styles.stats}>Good: 47min | Score: 🟢 Excellent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
container: { 
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center', 
  backgroundColor: '#1a1a2e', 
  padding: 40,
  // ADD THESE:
  width: '100vw', 
  height: '100vh', 
},
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#00d4ff', 
    marginBottom: 30 
  },
  status: { 
    fontSize: 16, 
    color: '#aaa', 
    marginBottom: 30 
  },
  posture: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    marginVertical: 20 
  },
  good: { color: '#00ff88' }, 
  bad: { color: '#ff4444' },
  stats: { 
    fontSize: 18, 
    color: '#fff', 
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', 
    padding: 20, 
    borderRadius: 15 
  }
});
