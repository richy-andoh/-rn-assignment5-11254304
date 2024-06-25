import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = ({ isDarkMode, toggleTheme }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.option}>Language</Text>
      <Text style={styles.option}>My Profile</Text>
      <Text style={styles.option}>Contact Us</Text>
      <Text style={styles.option}>Change Password</Text>
      <Text style={styles.option}>Privacy Policy</Text>
      <View style={styles.themeOption}>
        <Text style={styles.option}>Theme</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  option: {
    fontSize: 18,
    marginVertical: 10,
  },
  themeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SettingsScreen;