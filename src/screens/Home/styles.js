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
      borderColor: '#FF9900'

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
     marginBottom:80
  },
  txviewnavi: {
      marginVertical: 10,
      color: 'white',

  }

});

  export default styles