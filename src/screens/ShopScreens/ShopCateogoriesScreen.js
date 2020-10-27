import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';





const ShopCateogoriesComponent = ({ navigation }) => {
    return (
     
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
            <TouchableOpacity
             style={{ marginTop:20 }}
             onPress={() => navigation.navigate('Selected')}
           >
             <Text> shop cateogories</Text>
           </TouchableOpacity> 
        </View>
      
    )
  }

  const styles = StyleSheet.create({})

  export default ShopCateogoriesComponent