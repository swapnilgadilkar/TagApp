import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import AppButton from './AppButton';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addObject, updateObject} from '../config/objectsReducer';
import {getDate} from '../utils/util';
export default function TagForm({isEdit = false, item = {}}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    id = 'NA',
    tagName = 'NA',
    tagType = 'NA',
    vendorName = 'NA',
    confidentiality = 'NA',
    itDisplaced = 'NA',
    packageType = 'NA',
    rssi = 'NA',
    createdDate = 'NA',
  } = item;
  const inputStyle = {
    backgroundColor: 'white',
  };
  const onSubmit = values => {
    if (isEdit) {
      values.id = id;
      dispatch(updateObject(values));
      navigation.pop();
      navigation.replace('ManageObjects');
    } else {
      dispatch(addObject(values));
      navigation.replace('FindObject');
    }
  };
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{
          tagName: isEdit ? tagName : '',
          tagType: isEdit ? tagType : '',
          vendorName: isEdit ? vendorName : '',
          confidentiality: isEdit ? confidentiality : '',
          itDisplaced: isEdit ? itDisplaced : '',
          packageType: isEdit ? packageType : '',
          rssi: isEdit ? rssi : '',
          createdDate: isEdit ? createdDate : getDate(),
        }}
        onSubmit={values => onSubmit(values)}
        validationSchema={yup.object().shape({
          tagName: yup.string().required('Please, provide tag name!'),
          // tagType: yup.string().required('Please, provide tag type!'),
          // vendorName: yup.string().required('Please, provide vendor name!'),
          // confidentiality: yup
          //   .string()
          //   .required('Please, provide tag confidentiality!'),
          // itDisplaced: yup.string().required('Please, provide package type!'),
          // packageType: yup.string().required('Please, provide tag name!'),
          // rssi: yup.string().required('Please wait we are fetching RSSI!'),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.pageHeader}>
                {isEdit ? 'Update' : 'Tag'} Object
              </Text>
              <TextInput
                value={values.tagName}
                style={inputStyle}
                onChangeText={handleChange('tagName')}
                onBlur={() => setFieldTouched('tagName')}
                placeholder="Tagged Object Name"
              />
              {touched.tagName && errors.tagName && (
                <Text style={styles.errorLabel}>{errors.tagName}</Text>
              )}
              <TextInput
                value={values.tagType}
                style={inputStyle}
                onChangeText={handleChange('tagType')}
                onBlur={() => setFieldTouched('tagType')}
                placeholder="Tagged Object Type"
              />
              {touched.tagType && errors.tagType && (
                <Text style={styles.errorLabel}>{errors.tagType}</Text>
              )}
              <TextInput
                value={values.vendorName}
                style={inputStyle}
                onChangeText={handleChange('vendorName')}
                placeholder="Vendor Name"
                onBlur={() => setFieldTouched('vendorName')}
              />
              {touched.vendorName && errors.vendorName && (
                <Text style={styles.errorLabel}>{errors.vendorName}</Text>
              )}
              <TextInput
                value={values.confidentiality}
                style={inputStyle}
                onChangeText={handleChange('confidentiality')}
                placeholder="Confidentiality eg: High, Low, Medium"
                onBlur={() => setFieldTouched('confidentiality')}
              />
              {touched.confidentiality && errors.confidentiality && (
                <Text style={styles.errorLabel}>{errors.confidentiality}</Text>
              )}
              <TextInput
                value={values.itDisplaced}
                style={inputStyle}
                onChangeText={handleChange('itDisplaced')}
                placeholder="Is it displaced?"
                onBlur={() => setFieldTouched('itDisplaced')}
              />
              {touched.itDisplaced && errors.itDisplaced && (
                <Text style={styles.errorLabel}>{errors.itDisplaced}</Text>
              )}
              <TextInput
                value={values.packageType}
                style={inputStyle}
                onChangeText={handleChange('packageType')}
                placeholder="Package Type"
                onBlur={() => setFieldTouched('packageType')}
              />
              {touched.packageType && errors.packageType && (
                <Text style={styles.errorLabel}>{errors.packageType}</Text>
              )}

              <TextInput
                value={values.rssi}
                style={inputStyle}
                onChangeText={handleChange('rssi')}
                placeholder="Fetching RSSI....."
                onBlur={() => setFieldTouched('rssi')}
              />
              {touched.rssi && errors.rssi && (
                <Text style={styles.errorLabel}>{errors.rssi}</Text>
              )}
              <View style={styles.buttonContainer}>
                <AppButton
                  title={isEdit ? 'Update Object' : 'Tag Object'}
                  disabled={!isValid}
                  onPressCall={handleSubmit}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  errorLabel: {
    fontSize: 12,
    color: '#FF0000',
  },
  pageHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
});
