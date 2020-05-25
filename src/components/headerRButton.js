import React from 'react';
import {Colors, IconButton} from 'react-native-paper';

const headerRightBtn = (props) => (
  <IconButton
    icon={props.iconName}
    color={Colors.red500}
    size={25}
    onPress={props.menuBtnClickAction}
  />
);

export default headerRightBtn;
