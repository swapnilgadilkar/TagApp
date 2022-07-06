import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '../assets/back-icon';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export default function AppHeader({isBack = true}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#C4ACFC', '#E7ABFA', '#B9ACFC']}
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      {isBack && (
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      )}
      {!isBack && <View style={{flex: 1}} />}
      <View style={styles.appHeaderText}>
        <Text style={styles.header}>tagSpace</Text>
        <Text style={styles.subHeader}>Tag & Find Anything</Text>
      </View>
      <View style={{flex: 1}} />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  subHeader: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  appHeaderText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIconContainer: {
    flex: 0.75,
    marginLeft: 12,
  },
});
