import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"



const TransactionItem = ({ description, subDescription, amount, icon }) => {
    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
                <Text>Transactions</Text>
                <Text style={{ color: "#4F8EF7"}}>See All</Text>
            </View>
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

export default TransactionItem;


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

