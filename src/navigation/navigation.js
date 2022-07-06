import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import FindTags from '../screens/FindTags';
import {Provider} from 'react-redux';
import {persistor, store} from '../config/store';
import ManageTags from '../screens/ManageTags';
import EditTag from '../screens/EditTag';
import Home from '../screens/Home';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLogo from '../assets/logo.svg';
import CreateTag from '../screens/CreateTag';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [firstLaunch, setIsFirstLaunch] = useState(null);

  const checkIfFirstLaunch = async () => {
    await AsyncStorage.getItem('alreadyLaunched').then(async value => {
      if (value == null) {
        setTimeout(() => {
          setIsFirstLaunch(true);
        }, 3000);
      } else {
        setTimeout(() => {
          setIsFirstLaunch(false);
        }, 3000);
      }
    });
  };

  useEffect(() => {
    checkIfFirstLaunch();
  }, []);

  if (firstLaunch === null) {
    return (
      <View style={styles.splashContainer}>
        <AppLogo />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {firstLaunch && <Stack.Screen name="Landing" component={Welcome} />}
            <Stack.Screen name="Dashboard" component={Home} />
            <Stack.Screen name="CreateTagForm" component={CreateTag} />
            <Stack.Screen name="FindObject" component={FindTags} />
            <Stack.Screen name="ManageObjects" component={ManageTags} />
            <Stack.Screen name="EditTagObject" component={EditTag} />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
