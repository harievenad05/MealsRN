//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>CategoriesScreen</Text>
            <Button
                title="Go to CategoryMeals"
                onPress={() => props.navigation.navigate('CategoryMeal')}
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

export default CategoriesScreen;
