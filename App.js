


import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyCards from './screens/MyCards';
import Statistics from './screens/Statistics';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <SafeAreaProvider>
                    <MainNavigator />
                </SafeAreaProvider>
            </NavigationContainer>
        </ThemeProvider>
    );
};

const MainNavigator = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'My Cards') {
                        iconName = focused ? 'card' : 'card-outline';
                    } else if (route.name === 'Statistics') {
                        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: theme.tabBarIconColor,
                tabBarStyle: { backgroundColor: theme.tabBarColor },
                headerStyle: { backgroundColor: theme.backgroundColor, paddingVertical: theme.paddingVertical },
                headerTitleStyle: { color: theme.textColor },
                tabBarLabelStyle: { color: theme.textColor },
            })}
            initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="My Cards" component={MyCards} options={{ headerShown: false }} />
            <Tab.Screen name="Statistics" component={Statistics} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
