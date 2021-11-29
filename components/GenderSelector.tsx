import React, { FC } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface Props {
    genderHelpers: {
        setValue: (gender: string) => void
    }
}

const GenderSelector: FC<Props> = ({ genderHelpers }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => genderHelpers.setValue('male')}><Text style={styles.buttonText}>Male</Text></Pressable>
            <Pressable style={styles.button} onPress={() => genderHelpers.setValue('female')}><Text style={styles.buttonText}>Female</Text></Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#333',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default GenderSelector;
