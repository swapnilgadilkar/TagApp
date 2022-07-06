import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import BackGround from '../components/BackGround';
import BottomArea from '../components/BottomArea';
import AppHeader from '../components/AppHeader';
import Option from '../components/Option';
import TopArea from '../components/TopArea';
function Home({navigation}) {
  const onTagClicked = () => {
    navigation.navigate('CreateTagForm');
  };
  const onFindClicked = () => {
    navigation.navigate('FindObject');
  };
  const onManageClicked = () => {
    navigation.navigate('ManageObjects');
  };

  return (
    <View style={{flex: 1}}>
      <AppHeader isBack={false} />

      <BackGround>
        <TopArea>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Option
                icon={'tag'}
                title={'Tag Objects'}
                onPressCallback={onTagClicked}
              />
              <Option
                icon={'search'}
                title={'Find Objects'}
                onPressCallback={onFindClicked}
              />
              <Option
                icon={'setting'}
                title={'Manage Objects'}
                onPressCallback={onManageClicked}
              />
            </View>
          </ScrollView>
        </TopArea>
        <BottomArea />
      </BackGround>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
