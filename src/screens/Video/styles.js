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
      textAlign:'center'
  },
  listcontainer:{
    backgroundColor:'gray'
  },


  txviewitem: {
      color: 'white',
      textAlign:'center'

  },
  containerItem:{
      height:hp(30),
      width:wp(90),
      backgroundColor:'black',
      marginVertical:wp(5),
      borderWidth:wp(0.1),
      borderColor:'brown',
      justifyContent:'space-between'
  }

});

  export default styles