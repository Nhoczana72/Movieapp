/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import IconMenu from 'react-native-vector-icons/Entypo';

interface Headerprops {
    title?: string,
    icon?: any,
    onpress?: any
}
export const Headerapp = (props: Headerprops) => {
    const { title, icon, onpress } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginLeft: 10 }}
                onPress={onpress}
            >
                <IconMenu name={icon} color="#FF9900" size={25} />
            </TouchableOpacity>
            <View style={styles.viewtitle}>
                <Text style={styles.txtitle} >{title}</Text>
            </View>

        </View>
    )

}




const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#222222',
        width: '100%',
        alignItems: 'center', height: 50,
        borderBottomWidth: 1, borderColor: '#FF9900'

    },
    txtitle: {
        color: '#FF9900',
        fontSize: wp(5.5),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    viewtitle: {
        width: '100%',
        position: 'absolute',
        paddingHorizontal: 40,
        paddingBottom:5,marginBottom:5


    },
});
