import * as React from 'react';
import {View, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomStatusBar = ({backgroundColor, barStyle = 'dark-content'}) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient colors={['#C4ACFC', '#E7ABFA', '#B9ACFC']} style={{}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </LinearGradient>
  );
};

export {CustomStatusBar};
