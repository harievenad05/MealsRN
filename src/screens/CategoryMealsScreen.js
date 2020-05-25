//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>CategoryMealsScreen</Text>
            <Button
                title="Go to MealDetail"
                onPress={() => props.navigation.navigate('MealDetail')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealsScreen;
