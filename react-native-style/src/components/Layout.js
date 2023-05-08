import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Header() {
  return (
    <View style={[styles.container, styles.header]}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
}

export function Contents() {
  return (
    <View style={[styles.container, styles.contents]}>
      <Text style={styles.text}>Contents</Text>
    </View>
  );
}

export function Footer() {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f1c40f',
    flex: 1,
  },
  contents: {
    backgroundColor: '#1abc9c',
    flex: 3,
  },
  footer: {
    backgroundColor: '#3498db',
    flex: 1,
  },
  text: {
    fontSize: 26,
  },
});
