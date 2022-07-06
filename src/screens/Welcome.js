import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../components/AppButton';
import TopArea from '../components/TopArea';
import Logo from '../assets/logo.svg';
import Mobile from '../assets/mobile.svg';
import BackGround from '../components/BackGround';
import BottomArea from '../components/BottomArea';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Welcome({navigation}) {
  const onGetStarted = async () => {
    await AsyncStorage.setItem('alreadyLaunched', 'true');
    navigation.navigate('Dashboard');
  };
  return (
    <View style={styles.safeAreaViewContainer}>
      <BackGround>
        <TopArea>
          <View style={styles.logosContainer}>
            <View style={styles.logoContainer}>
              <Logo />
            </View>
            <View style={styles.wifiImgContainer}>
              <Mobile />
            </View>
          </View>
        </TopArea>
        <BottomArea>
          <AppButton title={'Get Started'} onPressCall={onGetStarted} />
        </BottomArea>
      </BackGround>
    </View>
  );
}

const styles = StyleSheet.create({
  logosContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  safeAreaViewContainer: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wifiImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
