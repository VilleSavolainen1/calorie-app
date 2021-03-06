import React from 'react';
import AppBar from './AppBar';
import { View } from 'react-native';
import { Switch, Route } from 'react-router-native';
import Calculator from './Calculator';
import Home from './Home';

const Main = () => {
    return (
        <View>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/calculator">
                    <Calculator />
                </Route>
            </Switch>
        </View>
    )
};

export default Main;