import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import BackGround from '../components/BackGround';
import BottomArea from '../components/BottomArea';
import AppHeader from '../components/AppHeader';
import TopArea from '../components/TopArea';
import TagForm from '../components/TagForm';
function CreateTag() {
  return (
    <View style={{flex: 1}}>
      <AppHeader title={'Tag Object'} />
      <BackGround>
        <TopArea>
          <TagForm />
        </TopArea>
        <BottomArea>
          <Text style={styles.infoTxt}>
            Hold your phone still, to get accurate RSSI sure you don't change
            your Wi-Fi position
          </Text>
        </BottomArea>
      </BackGround>
    </View>
  );
}
const styles = StyleSheet.create({
  infoTxt: {
    fontSize: 18,
    padding: 20,
  },
  formContainer: {
    flex: 4,
    margin: 20,
  },
  inputContainer: {backgroundColor: 'white'},
  tagButtonContainer: {
    alignItems: 'center',
  },
});
export default CreateTag;
