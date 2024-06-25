import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MasterCard = () => {
  return (
    <View style={styles.card}>
      <Ionicons name="card" size={30} color="#fff" style={styles.icon} />
      <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
      <Text style={styles.cardHolder}>AR Jonson</Text>
      <View style={styles.cardDetails}>
        <Text style={styles.expiryDate}>Expiry Date: 24/20</Text>
        <Text style={styles.cvv}>CVV: 698</Text>
      </View>
      <Text style={styles.cardType}>Mastercard</Text>
    </View>
  );
};

export default MasterCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3b3b3b',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 16,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  expiryDate: {
    color: '#fff',
  },
  cvv: {
    color: '#fff',
  },
  cardType: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
});

