import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Edit from '../assets/edit-icon';
import {removeObject} from '../config/objectsReducer';
import Delete from '../assets/delete';
import {Shadow} from 'react-native-shadow-2';

export default function TagCard({item, isManage = false}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const removeTagObject = () => {
    dispatch(removeObject(id));
  };
  const updateTagObject = item => {
    navigation.navigate('EditTagObject', {item: item});
  };
  const {
    id,
    tagName = 'NA',
    tagType = 'NA',
    vendorName = 'NA',
    confidentiality = 'NA',
    itDisplaced = 'NA',
    packageType = 'NA',
    rssi = 'NA',
    createdDate = 'NA',
  } = item;
  return (
    <Shadow
      distance={5}
      containerViewStyle={{
        marginHorizontal: 20,
        marginVertical: 10,
      }}
      viewStyle={styles.shadowStyle}
      radius={8}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View>
            <Text style={styles.objectName}>{tagName || 'NA'}</Text>
            <Text style={styles.label}>{vendorName || 'NA'}</Text>
            <Text style={styles.label}>Tagged: {createdDate || 'NA'}</Text>
            <Text style={styles.label}>Wi-Fi: {rssi || 'NA'}</Text>
          </View>
          <View style={styles.rightCard}>
            <Text style={styles.tagPriority}>{confidentiality || 'NA'}</Text>
            <Text style={styles.labelRight}>Type: {tagType || 'NA'}</Text>
            <Text style={styles.labelRight}>
              Packaged: {packageType || 'NA'}
            </Text>
            <Text style={styles.labelRight}>
              Displaced: {itDisplaced || 'NA'}
            </Text>
          </View>
        </View>
        {isManage && (
          <View>
            <View style={styles.horizontalLine} />
            <View style={styles.manageOptions}>
              <TouchableOpacity
                onPress={() => updateTagObject(item)}
                style={styles.deleteButton}>
                <Edit />
                <Text style={{marginLeft: 14}}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => removeTagObject(id)}
                style={styles.deleteButton}>
                <Delete />
                <Text style={{marginLeft: 14}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Shadow>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightCard: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  objectName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  tagPriority: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
    paddingBottom: 8,
  },
  label: {
    paddingVertical: 10,
  },
  labelRight: {
    paddingVertical: 10,
    textAlign: 'left',
  },
  manageOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 14,
  },
  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowStyle: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignSelf: 'stretch',
  },
});
