import React from 'react';
import { View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from './components/Main';

const App = () => {
  return (
    <View>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </View>
  );
}

export default App;


