import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ isDarkMode, toggleTheme }) => {
  const settingsOptions = [
    'Language',
    'My Profile',
    'Contact Us',
    'Change Password',
    'Privacy Policy',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {settingsOptions.map((option, index) => (
        <View key={index}>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>{option}</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </View>
          <View style={styles.divider} />
        </View>
      ))}
      <View style={styles.themeOption}>
        <Text style={styles.optionText}>Theme</Text>
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
    marginBottom: 30,
    textAlign: "center",
    marginTop: 20
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
  themeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default SettingsScreen;
