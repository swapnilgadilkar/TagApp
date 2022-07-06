import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Search from '../assets/search.svg';
import Setting from '../assets/setting.svg';
import Tag from '../assets/tag.svg';
import LinearGradient from 'react-native-linear-gradient';
const tagColors = ['#C4ACFC', '#C4ACFC', '#B9A7FA'];
const searchColors = ['#C4ACFC', '#B9A7FA', '#7C61EE'];
const settingColors = ['#EFEFEF', '#EFEFEF', '#EFEFEF'];
const pickColors = option => {
  let color = '';
  switch (option) {
    case 'tag': {
      color = tagColors;
      break;
    }
    case 'search': {
      color = searchColors;
      break;
    }
    case 'setting': {
      color = settingColors;
      break;
    }
  }
  return color;
};
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    padding: 60,
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 40,
  },
  menuItemContainer: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 40,
  },
});
export default function Option({icon = '', title = '', onPressCallback}) {
  return (
    <TouchableOpacity onPress={onPressCallback}>
      <LinearGradient
        colors={pickColors(icon)}
        style={[
          styles.container,
          {backgroundColor: icon !== 'setting' ? 'blue' : '#EFEFEF'},
        ]}>
        {icon === 'tag' && <Tag />}
        {icon === 'search' && <Search />}
        {icon === 'setting' && <Setting />}
        <Text
          style={[
            styles.menuItemContainer,
            {color: icon !== 'setting' ? 'white' : '#190861'},
          ]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
