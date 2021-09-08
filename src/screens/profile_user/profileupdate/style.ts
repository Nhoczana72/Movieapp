import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      flex: 1
      
  },
  viewform:{
    marginHorizontal:wp(2),
    marginVertical:wp(10),
    paddingHorizontal:wp(2),
    paddingVertical:wp(2)
  },
  txtitle: {
    color: '#FF9900',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    marginLeft:wp(38),
    position:'absolute'
},

  viewdetailprofile:{
      justifyContent:'space-between',
      marginHorizontal:30,
      marginLeft:wp(5),marginVertical:wp(3)

  },
  txdtitleprofile:{
      fontWeight:'700',
  },
  
  txoutdele:{
    color:'red',
    fontWeight:'500',
    fontSize:16,
    marginLeft:30
  },

  btnlogin:{
    borderWidth:1,
    borderColor:'#FF9900',
    borderRadius:wp(5),
    height:hp(6),
    width:wp(85),
    backgroundColor:'red',
    marginVertical:10,
    minHeight:45
},

btntx:{
    color:'white',
    margin:5,
    padding:5,
    textAlign:'center',
    fontWeight:'700',
    fontSize:16

},



txinput:{
  minHeight:30,height:wp(10),width:wp(85),borderWidth:1,borderRadius:10
}



});
