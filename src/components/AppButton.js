import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {BUTTON_PRIMARY} from '../constants';

export default function AppButton({title, onPressCall, disabled}) {
  return (
    <Shadow
      distance={5}
      containerViewStyle={{
        backgroundColor: BUTTON_PRIMARY,
        borderRadius: 24,
      }}
      viewStyle={styles.shadowStyle}
      radius={24}>
      <TouchableOpacity
        style={styles.getStartedBtn}
        onPress={onPressCall}
        disabled={disabled}>
        <Text style={styles.getStartedBtnLabel}>{title}</Text>
      </TouchableOpacity>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  shadowStyle: {},
  getStartedBtn: {
    width: 220,
    maxWidth: 400,
    padding: 14,
    overflow: 'hidden',
  },
  getStartedBtnLabel: {
    color: 'white',
    textAlign: 'center',
  },
});
