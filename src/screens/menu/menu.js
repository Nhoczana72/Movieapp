import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import styles from './styles'
export const  MenuScreen=(props)=>{
   console.log(props)
    return (
       <View style={styles.container}>
          <Text style={styles.txtitle}>Wellcome: 
          {'\n'}Bùi Diễm Ngọc My</Text>
          <View style={styles.viewitem}>
          <TouchableOpacity style={styles.btnlogin}
            onPress={()=>props.navigation.navigate('Profile')}
            >
             <Text style={styles.btntx}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnlogin}>
             <Text style={styles.btntx}>Booking information </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnlogin}>
             <Text style={styles.btntx}>Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnlogin}
             onPress={()=>props.navigation.navigate('Navigator')}
          >
             <Text style={styles.btntx}>Go back home {'->'}</Text>
          </TouchableOpacity>
          </View>
          
       </View>
    )
}