import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TransactionItem = ({ description, subDescription, amount }) => {
  return (
    <View style={styles.transactionItem}>
      
      <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 15, marginRight: 10 }}>
      <Ionicons name="card-outline" size={30} color="#000" style={styles.icon} />
                        </View>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.subDescription}>{subDescription}</Text>
      </View>
      <Text style={styles.amount}>{amount}</Text>
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

