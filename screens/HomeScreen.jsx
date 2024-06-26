import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
//import MasterCard from '../components/MasterCard';
import TransactionItem from '../components/TransactionItem';
import send from "../assets/send.png";
import topUp from "../assets/topUp.png";
import recieve from "../assets/recieve.png";
import profile from "../assets/profile.png";

import card from "../assets/Card.png";
import { ThemeContext } from '../context/ThemeContext';


const HomeScreen = () => {
    const { theme, isEnabled } = useContext(ThemeContext);
    return (
        <ScrollView style={[styles.container,{ backgroundColor: theme?.backgroundColor ?? 'white' }]}>
            <SafeAreaView>
                <View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={[{ display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems: "center" }]}>
                            <View style={{ height: 70, width: 70, borderRadius: 50, padding: 20, marginRight: 20, marginBottom: 10 }}>
                                <Image source={profile} style={{ height: 70, width: 70}} />
                            </View>
                            <View style={{ marginHorizontal: 15, marginTop: 30 }}>
                                <Text style={[styles.welcome,  isEnabled && styles.darkText ]}>Welcome back,</Text>
                                <Text style={[styles.name, isEnabled && styles.darkText]}>Eric Atsu</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, width: 50, backgroundColor: "#ddd3", borderRadius: 50, padding: 15, marginTop: 25 }}>
                            <Ionicons name="search" size={20} style={isEnabled && styles.darkText} />
                        </View>
                    </View>


                    <View style={{ marginTop: 30, alignItems: "center" }}>
                        <Image source={card} />
                    </View>


                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", marginVertical: 40 }}>
                        <View style={{ alignItems: "center" }}>
                            <View style={[{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 20, marginRight: 10 }, isEnabled && styles.bgBlack]}>
                                <AntDesign name='arrowup' size={30} style={[{ height: 25, opacity: 0.5 }, isEnabled && styles.darkText]} />
                            </View>
                            <Text style={[{ marginRight: 20, marginVertical: 10, fontSize: 18, opacity: 0.8}, isEnabled && styles.darkText]}>Sent</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={[{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 20, marginRight: 10 }, isEnabled && styles.bgBlack]}>
                                <AntDesign name='arrowdown' size={30} style={[{ height: 25, opacity: 0.5 }, isEnabled && styles.darkText]} />
                            </View>
                            <Text style={[{ marginRight: 20, marginVertical: 10, fontSize: 18, opacity: 0.8}, isEnabled && styles.darkText ]}>Received</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={[{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 18, marginRight: 10 }, isEnabled && styles.bgBlack]}>
                                <MaterialCommunityIcons name='currency-usd' size={35} color="black" style={[{ height: 40, width: 30, opacity: 0.5, fontWeight: "100" }, isEnabled && styles.darkText]} />
                            </View>
                            <Text style={[{ marginRight: 20, marginVertical: 10, fontSize: 18, opacity: 0.8}, isEnabled && styles.darkText ]}>Loan</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={[{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 20, marginRight: 10 }, isEnabled && styles.bgBlack]}>
                                <Image source={topUp} style={{ height: 30, width: 30, opacity: 0.5, fontWeight: "300" }}/>
                            </View>
                            <Text style={[{ marginRight: 20, marginVertical: 10, fontSize: 18, opacity: 0.8}, isEnabled && styles.darkText ]}>Topup</Text>
                        </View>
                    </View>


                    <View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}>
                            <Text style={[ {fontSize: 25},isEnabled && styles.darkText]}>Transactions</Text>
                            <Text style={{ color: "#4F8EF7", fontSize: 16 }}>See All</Text>
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
        backgroundColor: "white"
    },

    darkContainer: {
        backgroundColor: 'black',
    },

    welcome: {
        fontSize: 17,
        opacity: 0.6,
        marginTop: 3
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10
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

    darkText: {
        color: "white"
    },

    bgBlack: {
      backgroundColor: "black",
      opacity: 0.2
    },

    cardNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;