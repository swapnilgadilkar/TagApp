import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CustomStatusBar} from './src/components/CustomStatusBar';
import Navigation from './src/navigation/navigation';
const App = () => {
  return (
    <SafeAreaProvider>
      {/* <CustomStatusBar backgroundColor={'red'} /> */}
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
