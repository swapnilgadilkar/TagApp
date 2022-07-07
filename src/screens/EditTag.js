import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import BackGround from '../components/BackGround';
import BottomArea from '../components/BottomArea';
import AppHeader from '../components/AppHeader';
import TopArea from '../components/TopArea';
import TagForm from '../components/TagForm';

function EditTag({route}) {
  const {item} = route.params;
  return (
    <View style={styles.safeareaContainer} edges={['top']}>
      <AppHeader title={'Update Object'} />
      <BackGround>
        <TopArea>
          <TagForm isEdit={true} item={item} />
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
  safeareaContainer: {
    flex: 1,
  },
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
export default EditTag;
