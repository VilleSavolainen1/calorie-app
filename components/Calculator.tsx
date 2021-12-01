import React, { useState, FC } from 'react';
import { View, StyleSheet, Pressable, TextInput, Text } from 'react-native';
import { Formik, useField } from 'formik';
import GenderSelector from './GenderSelector';



const initialValues = {
    gender: 'male',
    weight: 0,
    height: 0,
    age: 0
};



export const calculateCaloriesRequired = (gender: string, weight: number, height: number, age: number) => {
    if (isNaN(weight) || isNaN(height) || isNaN(age)) return 'Please fill values';
    if (weight === 0 || height === 0) return 'Please fill values';
    if (gender === 'male') {
        return `${Math.floor(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age))} kcal`;
    } else {
        return `${Math.floor(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age))} kcal`;
    }
};


interface Form {
    onSubmit: () => void
}

export const CalorieCalculatorForm: FC<Form> = ({ onSubmit }) => {
    const [genderField, genderMeta, genderHelpers] = useField('gender')
    const [weightField, weightMeta, weightHelpers] = useField('weight');
    const [heightField, heightMeta, heightHelpers] = useField('height');
    const [ageField, ageMeta, ageHelpers] = useField('age');

    return (
        <View>
            <GenderSelector genderHelpers={genderHelpers} />
            <TextInput
                style={styles.textinput}
                keyboardType='numeric'
                placeholder="Weight(kg)"
                onChangeText={value => weightHelpers.setValue(parseInt(value))}
            />
            <TextInput
                style={styles.textinput}
                keyboardType='numeric'
                placeholder="Height(cm)"
                onChangeText={value => heightHelpers.setValue(parseInt(value))}
            />
            <TextInput
                style={styles.textinput}
                keyboardType='numeric'
                placeholder="Age"
                onChangeText={value => ageHelpers.setValue(parseInt(value))}
            />
            <Pressable onPress={onSubmit} style={styles.calculatebutton}>
                <Text style={styles.calculatebuttontext}>Calculate</Text>
            </Pressable>
        </View>
    )
}



const Calculator: FC = () => {
    const [result, setResult] = useState('')
    const onSubmit = (values: { gender: string; weight: number; height: number; age: number; }) => {
        const gender = values.gender;
        const weight = values.weight;
        const height = values.height;
        const age = values.age;
        setResult(calculateCaloriesRequired(gender, weight, height, age))
    }
    return (
        <View style={styles.container}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <CalorieCalculatorForm onSubmit={handleSubmit} />}
            </Formik>
            <Text style={styles.result}>{result}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        height: 50,
        fontSize: 20,
        color: '#000',
        padding: 6,
        margin: 1,
        backgroundColor: '#999',
    },
    calculatebutton: {
        backgroundColor: '#333',
        marginTop: 15,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calculatebuttontext: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    result: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    }
})

export default Calculator;