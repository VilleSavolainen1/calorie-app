import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Link to="/"><Text style={styles.link}>Home</Text></Link>
            <Link to="/calculator"><Text style={styles.link}>Calculator</Text></Link>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#333',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    link: {
        color: '#fff',
        fontSize: 22
    }
})

export default AppBar;
