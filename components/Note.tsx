/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  note: string;
}

const Note: React.FC<Props> = ({ note }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{note}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    textAlign: 'center',
  },
});
export default Note;
