import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import AppHeader from '../components/AppHeader';
import EmptyTags from '../components/EmptyTags';
import TagCard from '../components/TagCard';

export default function FindTags() {
  const objectsList = useSelector(state => state.objects);
  return (
    <View style={styles.container}>
      <AppHeader title={'Find Objects'} />
      <View style={styles.mainContainer}>
        {objectsList && objectsList.length === 0 && <EmptyTags />}
        <FlatList
          data={objectsList}
          renderItem={({item}) => <TagCard item={item} />}
          extraData={objectsList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  mainContainer: {
    flex: 1,
  },
  listHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 20,
    marginLeft: 18,
  },
});
