import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
// import apple from "../assets/apple.png"
// import grocery from "../assets/grocery.png";
import spotify from "../assets/spotify.png"
import { ThemeContext } from '../context/ThemeContext';
import AntDesign from "react-native-vector-icons/AntDesign"


const transactions = [
    { id: '3', description: 'Apple Store', subDescription: 'Entertainment', icon: "apple1", amount: '- $12.99' },
    { id: '4', description: 'Spotify', subDescription: 'Music', icon: spotify, amount: '- $5.99' },
    { id: '2', description: 'Grocery', subDescription: 'Walmart', icon: "shoppingcart", amount: '- $5.99' },
    { id: '1', description: 'Money Transfer', subDescription: 'Transaction', icon: "download", amount: '- $88' },
    { id: '5', description: 'Amazon', subDescription: 'Online Shopping', icon: "amazon", amount: '- $99.99' },
    { id: '7', description: 'Uber', subDescription: 'Ride', icon: "car", amount: '- $15.00' },
    { id: '6', description: 'Starbucks', subDescription: 'Coffee', icon: "", amount: '- $4.50' },
    { id: '8', description: 'Electric Bill', subDescription: 'Utility', icon: "", amount: '- $50.00' },
    { id: '9', description: 'Gym Membership', subDescription: 'Monthly Fee', icon: "", amount: '- $20.00' },
    { id: '10', description: 'Netflix', subDescription: 'Monthly Subscription', icon: "", amount: '- $9.99' },
];

const TransactionItem = ({ description, subDescription, amount, icon }) => {
    const { theme, isEnabled } = useContext(ThemeContext);
    return (
        <View style={{ paddingVertical: 10}}>
            <View style={[styles.transactionItem, { backgroundColor: theme?.backgroundColor ?? "white"}]}>
                <View style={[{ height: 60, width: 60, backgroundColor: "#ddd", alignItems: "center", borderRadius: 50, padding: 20, marginRight: 10 }, isEnabled && styles.bgBlack]}>
                    <AntDesign name={icon} size={30} style={ isEnabled && styles.darkText}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.description, isEnabled && styles.darkText]}>{description}</Text>
                    <Text style={[styles.subDescription, isEnabled && styles.darkText]}>{subDescription}</Text>
                </View>
                <Text style={styles.amount}>{amount}</Text>
            </View>
        </View>
    );
};

const Transactions = () => {
    return (
        <FlatList
            data={transactions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TransactionItem
                    description={item.description}
                    subDescription={item.subDescription}
                    amount={item.amount}
                    icon={item.icon}

                />
            )}

            scrollEnabled={false}
        />
    );
};

export default Transactions;

const styles = StyleSheet.create({
    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        marginBottom: 5,
    },
    icon: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    description: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subDescription: {
        fontSize: 14,
        color: '#555',
        marginTop: 5
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },

    darkText: {
        color: "#fff"
    },

    bgBlack: {
        backgroundColor: "black",
        opacity: 0.2
      },
  
});

