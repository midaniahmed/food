import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.developmentModeText}>
            Development mode is enabled
          </Text>

          <Text style={styles.getStartedText}>Get started by opening</Text>

          <Text style={styles.tabBarInfoText}>
            This is a tab bar.
          </Text>

          <MonoText style={styles.codeHighlightText}>navigation</MonoText>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
});
