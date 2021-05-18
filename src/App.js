import  React,{useState} from 'react'
import axios from 'axios'
import { View ,StyleSheet, TouchableOpacity, TextInput} from 'react-native';

function App(){
    const api="https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";
    const [state,setState]=useState({
        s:'a movie',
        results: [],
        selected:{}
    });
    return(
        <View style={styles.container} >
            <View>
                <TextInput></TextInput>
                <TouchableOpacity
                    
                    ><Text>Tìm Kiếm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        backgroundColor : 'black',
        flex:1
    }
})