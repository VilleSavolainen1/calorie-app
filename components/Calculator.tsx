import React, { useState, FC } from 'react';
import { View, StyleSheet, Pressable, TextInput, Text } from 'react-native';
import { Formik, useField } from 'formik';
import GenderSelector from './GenderSelector';



const initialValues = {
    gender: '',
    weight: 0,
    height: 0,
    age: 0
};




const calculateCaloriesRequired = (gender: string, weight: number, height: number, age: number) => {
    if (gender === 'male') {
        return Math.floor(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));
    } else {
        return Math.floor(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));
    }
};


interface Form {
    onSubmit: () => void
}

const CalorieCalculatorForm: FC<Form> = ({ onSubmit }) => {
    const [genderField, genderMeta, genderHelpers] = useField<string>('gender')
    const [weightField, weightMeta, weightHelpers] = useField<string>('weight');
    const [heightField, heightMeta, heightHelpers] = useField<string>('height');
    const [ageField, ageMeta, ageHelpers] = useField<string>('age');

    return (
        <View>
            <GenderSelector genderHelpers={genderHelpers} />
            <TextInput
                keyboardType='numeric'
                placeholder="Weight(kg)"
                value={weightField.value}
                onChangeText={value => weightHelpers.setValue(value)}
            />
            <TextInput
                keyboardType='numeric'
                placeholder="Height(cm)"
                value={heightField.value}
                onChangeText={value => heightHelpers.setValue(value)}
            />
            <TextInput
                keyboardType='numeric'
                placeholder="Age"
                value={ageField.value}
                onChangeText={value => ageHelpers.setValue(value)}
            />
            <Pressable onPress={onSubmit}>
                <Text>Calculate</Text>
            </Pressable>
        </View>
    )
}



const Calculator: FC = () => {
    const [result, setResult] = useState(0)
    const onSubmit = (values: { gender: string; weight: number; height: number; age: number; }) => {
        const gender = values.gender;
        const weight = values.weight;
        const height = values.height;
        const age = values.age;

        if (!isNaN(age)) {
            setResult(calculateCaloriesRequired(gender, weight, height, age))
        }
    }
    return (
        <View>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <CalorieCalculatorForm onSubmit={handleSubmit} />}
            </Formik>
            <Text>{result}</Text>
        </View>
    )
};

/*
Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)

Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
*/
export default Calculator;