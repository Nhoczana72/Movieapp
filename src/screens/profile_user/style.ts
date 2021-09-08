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
  txtitle: {
    color: '#FF9900',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    marginLeft:wp(38),
    position:'absolute'
},

  viewAvt: {
      height: hp('25%'),
      width:wp(33),
      alignItems:'center',
      marginVertical: 5,
  },
  
  viewimage:{
    backgroundColor:'white',
    borderWidth:1,
    marginTop:10,
    borderRadius:100,
    width:wp(33),
    height:wp('33%'),
    borderColor:'gray'
  },

  txname:{
    fontWeight:'700',
    fontSize:24,
    textAlign:'center'
  },
  viewprofile:{
      borderWidth:1,
      width:wp(90),
      height:hp(40),
      justifyContent:'space-around',
      borderRadius:wp(10),
      borderColor:'#999999',
      marginVertical:10,


  },
  viewdetailprofile:{
      justifyContent:'space-between',
      flexDirection:'row',
      marginHorizontal:30
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
  text_delete_device: {
    color: '#031224',
    fontSize: wp(4),
    marginTop: wp(5),
    letterSpacing: 0.5,
  },
  text_content_detele: {
    fontSize: wp(3.5),
    letterSpacing: 0.5,
    opacity: 0.5,
    width: '60%',
    textAlign: 'center',
  },
  btnlogin:{
    borderWidth:1,
    borderColor:'#FF9900',
    borderRadius:wp(5),
    height:hp(6),
    width:wp(85),
    backgroundColor:'red',
    marginVertical:10,
    minHeight:45,
},

btntx:{
    color:'white',
    margin:5,
    padding:5,
    textAlign:'center',
    fontWeight:'700',
    fontSize:16

},

iconbadge:{
  position:'absolute',
  borderRadius:50,
  backgroundColor:'#114A69',
  width:wp(8),
  height:wp(8),
  right:1,
  justifyContent:'center',
  alignItems:'center',
  bottom:hp(8)
},
viewchoosefile:{
  height:hp(30),
  backgroundColor:'white',
  width:wp(100),
  borderTopEndRadius:wp(10),
  justifyContent:'center',
  alignItems:'center'
},
viewiconoptionimage:{
  width:wp(7),
  height:wp(7),
  backgroundColor:'#DEE1E2',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:100,
},
btnoptionsimage:{
  flexDirection:'row',
  marginVertical:wp(2),
  marginHorizontal:wp(7),
  width:wp(85)
},
btnoptionsimagecenter:{
  flexDirection:'row',
  borderTopWidth:1,
  borderBottomWidth:1,
  borderColor:'#6CB6DD',
  paddingVertical:5,
  marginVertical:wp(2),
  marginHorizontal:wp(7),
  width:wp(85)

},
txoptionimage:{
  fontWeight:'500',
  marginLeft:10,
},
img:{
  width:300,height:150
},
txinput:{
  minHeight:35,width:wp(85)
},
viewupdateimage:{
  width:wp(33),
  alignItems:'center',
  marginVertical: 5,
}



});
