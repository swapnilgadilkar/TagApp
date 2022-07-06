import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BACK_OVERLAY} from '../constants';

function BackGround({children}) {
  return <View style={styles.container}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACK_OVERLAY,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileLogo: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default BackGround;
