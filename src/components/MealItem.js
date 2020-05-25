import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MealItem = (props) => {
  return (
    <View style={styles.mealItemContainerStyle}>
      <TouchableOpacity onPress={props.mealItemClick}>
        <View>
          <View style={{...styles.mealRowStyle, ...styles.mealHeaderStyle}}>
            <ImageBackground
              style={styles.bgImageStyle}
              source={{uri: props.imageUrl}}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleTxtStyle} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRowStyle, ...styles.mealDetailStyle}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItemContainerStyle: {
    height: 240,
    width: '100%',
    padding: 8,
    marginVertical: 10,
  },
  mealRowStyle: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealHeaderStyle: {
    height: '85%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealDetailStyle: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImageStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  titleTxtStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default MealItem;
