import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import AppHeader from '../components/AppHeader';
import EmptyTags from '../components/EmptyTags';
import TagCard from '../components/TagCard';

export default function ManageTags() {
  const objectsList = useSelector(state => state.objects);
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.mainContainer}>
        <Text style={styles.listHeader}>Manage Objects</Text>
        {objectsList && objectsList.length === 0 && <EmptyTags />}
        <FlatList
          data={objectsList}
          renderItem={({item}) => <TagCard item={item} isManage={true} />}
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
    margin: 14,
  },
  listHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 18,
    paddingBottom: 10,
  },
});
