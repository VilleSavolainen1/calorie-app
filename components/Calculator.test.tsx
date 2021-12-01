import React from 'react';
import Calculator, { calculateCaloriesRequired } from './Calculator';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

describe('<Calculator />', () => {
    it('has 2 child', () => {
        const tree = renderer.create(<Calculator />).toJSON();
        if (tree === null) return;
        expect(tree.children.length).toBe(2);
    });
});

describe('calculateCaloriesRequired', () => {
    it('function returns correct result', () => {
        expect(calculateCaloriesRequired('male', 80, 185, 32)).toBe('1866 kcal');
        expect(calculateCaloriesRequired('female', 55, 165, 25)).toBe('1359 kcal')
    });
    it('function returns error if no values given', () => {
        expect(calculateCaloriesRequired('female', NaN, 160, NaN)).toBe('Please fill values');
    });
});
