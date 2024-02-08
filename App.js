import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default function App() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [positionAnim] = useState(new Animated.ValueXY({ x: 1000, y: 100 }));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(positionAnim, {
        toValue: { x: -550, y: -360 },
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, { opacity: fadeAnim, transform: positionAnim.getTranslateTransform() }]}>
        <Text style={styles.text}>Noteboook armário 2 : <Animated.Text style={{ color: 'red' }}>Ryan Brandão</Animated.Text></Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
