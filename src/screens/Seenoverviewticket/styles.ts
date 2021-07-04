import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
    } from 'react-native-responsive-screen';
 export const styles = StyleSheet.create({
  container:{
   
        flex:1,
    alignItems:'center'
},
txtitle: {
    color: '#FF9900',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    marginLeft:wp(38),
    position:'absolute'
},
viewitem:{backgroundColor:'white',
    borderWidth:1,
    borderRadius:20,
    height:hp(30),
    width:wp(85),
    paddingLeft:20,
    marginVertical:5,
    justifyContent:'space-evenly',
    alignItems:'baseline'

}
})


