import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ReanimatedBasics = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text>Basics</Text>
    </SafeAreaView>
  );
};

export default ReanimatedBasics;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
