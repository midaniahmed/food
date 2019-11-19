import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>Screen 2</Text>
    </ScrollView>
  </View>
  );
}

SettingsScreen.navigationOptions = {
  title: "Settings",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    margin: 4,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 0,
  },
});
