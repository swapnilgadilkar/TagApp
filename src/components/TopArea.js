import React from 'react';
import {StyleSheet, View} from 'react-native';
function TopArea({children}) {
  return <View style={styles.topOverlayContainer}>{children}</View>;
}
const styles = StyleSheet.create({
  topOverlayContainer: {
    height: '85%',
    backgroundColor: 'white',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
});
export default TopArea;
