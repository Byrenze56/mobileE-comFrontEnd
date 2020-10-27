import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';





const SelectedListComponent = ({ navigation }) => {
    return (
     
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
            <TouchableOpacity
             style={{ marginTop:20 }}
             onPress={() => navigation.navigate('Details')}
           >
             <Text> item selected</Text>
           </TouchableOpacity> 
        </View>
      
    )
  }

  const styles = StyleSheet.create({})

  export default SelectedListComponent