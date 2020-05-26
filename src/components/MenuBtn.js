import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors';

const MenuBtn = (props) => (
  <TouchableOpacity onPress={props.menuClick}>
    <View style={styles.iconContainer}>
      <Image
        style={styles.imgStyle}
        source={require('../assets/images/menu_btn.png')}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    paddingLeft: 25,
  },
  imgStyle: {
    height: 21,
    width: 21,
    tintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  },
});

export default MenuBtn;
