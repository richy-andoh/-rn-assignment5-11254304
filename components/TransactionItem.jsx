import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import apple from "../assets/apple.png"
import glocery from "../assets/glocery.png";


const transactions = [
    { id: '3', description: 'Apple Store', subDescription: 'Entertainment', icon: apple, amount: '- $12.99' },
    { id: '4', description: 'Spotify', subDescription: 'Music', icon: "", amount: '- $5.99' },
    { id: '1', description: 'Money Transfer', subDescription: 'Bank of America', icon: "", amount: '- $88' },
    { id: '2', description: 'Grocery Shopping', subDescription: 'Walmart', icon: "", amount: '- $5.99' },
    { id: '5', description: 'Amazon', subDescription: 'Online Shopping', icon: "", amount: '- $99.99' },
    { id: '6', description: 'Starbucks', subDescription: 'Coffee', icon: "", amount: '- $4.50' },
    { id: '7', description: 'Uber', subDescription: 'Ride', icon: "", amount: '- $15.00' },
    { id: '8', description: 'Electric Bill', subDescription: 'Utility', icon: "", amount: '- $50.00' },
    { id: '9', description: 'Gym Membership', subDescription: 'Monthly Fee', icon: "", amount: '- $20.00' },
    { id: '10', description: 'Netflix', subDescription: 'Monthly Subscription', icon: "", amount: '- $9.99' },
];

const TransactionItem = ({ description, subDescription, amount, icon }) => {
    return (
        <View>
            <View style={styles.transactionItem}>

                <View style={{ height: 60, width: 60, backgroundColor: "#ddd", borderRadius: 50, padding: 15, marginRight: 10 }}>
                    <FontAwesome6 name={icon} size={30} color="#000" style={styles.icon} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.subDescription}>{subDescription}</Text>
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
                    icons={item.icon}

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
        fontSize: 16,
        fontWeight: 'bold',
    },
    subDescription: {
        fontSize: 14,
        color: '#555',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f00',
    },
});

