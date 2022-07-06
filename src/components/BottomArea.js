import React from 'react';
import {View, StyleSheet} from 'react-native';
export default function BottomArea({children}) {
  return <View style={styles.bottomOverlayContainer}>{children}</View>;
}
const styles = StyleSheet.create({
  bottomOverlayContainer: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
