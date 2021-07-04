import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface GroupBtn {
    initValue?: string,
    setinitValue?: (string: string) => void


}

export const groups = [
    { label: 'Now playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Comming soon', value: 'upcoming' },
];
export const GroupBtn = (props: GroupBtn) => {
    const { initValue, setinitValue } = props
    const [choose, setchoose] = useState<string | undefined>('');
    const onchage = (value: string) => {
        setchoose(value);
        setinitValue(value);
    }
    useEffect(() => {
        setchoose(initValue)
    }, [initValue])

    return (
        <View style={_style.container}>
            {groups.map(g => {
                return (
                    <TouchableOpacity
                    key={g.value}
                        style={{
                            backgroundColor: choose === g.value ? 'red' : 'gray',
                            height: 33,
                            padding: 5
                        }} onPress={() => onchage(g.value)}>
                        <Text style={{
                            color: choose === g.value ? 'white' : 'white'
                        }} >{g.label}</Text></TouchableOpacity>
                );
            })}
        </View>
    );
};

const _style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 35,marginVertical:10,
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 5, marginHorizontal: 5,
        borderColor: 'orange',


    },
    btn: {
        borderWidth: 1, backgroundColor: 'white',
        height: 35,
        borderColor: 'orange',
        padding: 5, borderRadius: 5

    },
    txbtn: {
        color: 'black'
    }
})