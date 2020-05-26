import React from 'react';
import {IconButton} from 'react-native-paper';
import Colors from '../constants/Colors';

const headerRightBtn = (props) => (
  <IconButton
    icon={props.iconName}
    color={Colors.primaryColor}
    size={25}
    onPress={props.menuBtnClickAction}
  />
);

export default headerRightBtn;
