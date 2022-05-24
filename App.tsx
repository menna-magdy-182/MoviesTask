import React, { Fragment } from 'react';
import type { Node } from 'react';
import {
  StatusBar, StyleSheet
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation';
import { store } from './src/redux/store';
import {Provider} from 'react-redux';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
