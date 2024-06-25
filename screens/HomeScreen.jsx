import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MasterCard from '../components/MasterCard';
import TransactionItem from '../components/TransactionItem';


const HomeScreen = () => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={[{ display: "flex", flexDirection: "row" }]}>
                            <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 15, marginRight: 10 }}>

                            </View>
                            <View style={{ marginHorizontal: 4, marginVertical: 5 }}>
                                <Text style={styles.welcome}>Welcome back,</Text>
                                <Text style={styles.name}>Eric Atsu</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, width: 50, backgroundColor: "#ddd3", borderRadius: 50, padding: 15 }}>
                            <Ionicons name="search" size={20} color="black" />
                        </View>
                    </View>

                    {/* <View style={styles.card}>
                    <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
                    <Text>AR Jonson</Text>
                    <Text>Expiry Date: 24/20</Text>
                    <Text>CVV: 698</Text>
                    <Text>Mastercard</Text>
                </View> */}
                    <MasterCard />


                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", marginVertical: 40 }}>
                        <View style={{ alignItems: "center" }}>
                            <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 20, marginRight: 10 }}>
                                <FontAwesome6 name="arrow-up-long" size={35} color="black" style={{ height: 40, width: 30, opacity: 0.5, fontWeight: "300" }} />
                            </View>
                            <Text style={{ marginRight: 20, marginVertical: 10, fontSize: 18, opacity: 0.8 }}>Sent</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 20, marginRight: 10 }}>
                                <FontAwesome6 name="arrow-down-long" size={35} color="black" style={{ height: 40, width: 30, opacity: 0.5, fontWeight: "300" }} />
                            </View>
                            <Text style={{ marginRight: 20, marginVertical: 10, fontSize: 18, opacity: 0.8 }}>Received</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 18, marginRight: 10 }}>
                                <MaterialCommunityIcons name='currency-usd' size={35} color="black" style={{ height: 40, width: 30, opacity: 0.5, fontWeight: "100" }} />
                            </View>
                            <Text style={{ marginRight: 16, marginVertical: 10, fontSize: 18, opacity: 0.8 }}>Loan</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 20, marginRight: 10 }}>

                            </View>
                            <Text style={{ marginRight: 16, marginVertical: 10, fontSize: 18, opacity: 0.8 }}>Topup</Text>
                        </View>
                    </View>


                    {/* <TouchableOpacity>
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
                />
              </TouchableOpacity> */}
                    <View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}>
                            <Text>Transactions</Text>
                            <Text style={{ color: "#4F8EF7" }}>See All</Text>
                        </View>
                        <TransactionItem />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: 10
    },
    welcome: {
        fontSize: 17,
        opacity: 0.6,
        marginTop: 3
    },
    name: {
        fontSize: 24,
        fontWeight: "bold"
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    card: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#ddd',
    },
    cardNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;