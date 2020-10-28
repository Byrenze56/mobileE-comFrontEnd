import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';





const NotificationsComponent = ({ navigation }) => {
    return (
     
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
            <TouchableOpacity
             style={{ marginTop:20 }}x
             onPress={() => navigation.navigate('Inde')}
           >
             <Text> Notifications</Text>
           </TouchableOpacity> 
        </View>
      
    )
  }

  const styles = StyleSheet.create({})

  export default NotificationsComponent