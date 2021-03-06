import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
    } from 'react-native-responsive-screen';
 
const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center'
  },
  txtitle: {
      color: '#FF9900',
      fontSize: 25,
      fontWeight: 'bold',
      margin: 5,
      textAlign:'center',
      marginLeft:wp(35),
      position:'absolute'
  },
  inputtx: {
      backgroundColor: 'gray',
      height: 35,
      width: 250,
      marginHorizontal: 20


  },
  txviewsearch: {
      justifyContent: 'space-around',
      margin: 10,
      flexDirection: 'row'
  },
  btnsearch: {
      borderWidth: 1,
      borderColor: '#FF9900',
      justifyContent:'center',
      padding:5,
      borderRadius:5

  },

  btntxsearch: {
      color: 'white',
      margin: 5,

  },

  viewitem: {
      margin: 10,
      backgroundColor: '#111111',
      height: 300,
      width: '45%',

  },
  txviewitem: {
      color: 'white',

  },

  viewnavibtn: {
      backgroundColor: 'gray',
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 80,
      width: '100%',

  },
  viewflatlist: {
     marginBottom:100,
     width:"100%"
  },
  txviewnavi: {
      marginVertical: 10,
      color: 'white',

  },
  viewmenu:{
    width:wp(62),
    height:hp(30),
    alignItems:'center',
    backgroundColor:'#555555',
    borderColor:'#FF9900',
    borderWidth:1,
    justifyContent:'space-around'
  },
  txmenutitle:{
    color: '#FF9900',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign:'center',
  },
  txmenu:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  viewactionimg:{
    width:'100%',height:200,backgroundColor:'gray',
    margin:wp(5),
    padding:wp(5)
  },
  imgaction:{
    width:'100%',height:150,resizeMode:'stretch'
  }


});

  export default styles