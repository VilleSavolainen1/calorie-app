import React, { FC, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface Props {
    genderHelpers: {
        setValue: (gender: string) => void
    }
}


const GenderSelector: FC<Props> = ({ genderHelpers }) => {
    const [selected, setSelected] = useState<string>('male')
    const setGender = (gender: string) => {
        genderHelpers.setValue(gender);
        selected === 'male' ? setSelected('female') : setSelected('male');
    }

    return (
        <View style={styles.container}>
            <View style={styles.genderselectors}>
            <Pressable style={selected === 'male' ? styles.selectedButton : styles.button} onPress={() => setGender('male')}>
                <Text style={styles.buttonText}>Male</Text>
            </Pressable>
            <Pressable style={selected === 'female' ? styles.selectedButton : styles.button} onPress={() => setGender('female')}>
                <Text style={styles.buttonText}>Female</Text>
            </Pressable>
            </View>
            <Text>Selected gender: {selected}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    genderselectors: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#333',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    selectedButton: {
        backgroundColor: '#666',
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
