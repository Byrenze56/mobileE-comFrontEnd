import React, { useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../../components/context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
   const { state } = useContext(Context);
    console.log(state);
     const blogPost = state.find((blogPost)=> blogPost.id === navigation.navigate('Create'))
    
    return <View>
    
    </View>
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
             onPress={()=>
              navigation.navigate('Edit', {id: navigation.navigate('id')})
              }>
                <EvilIcons name='pencil' size={35} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({});

export default ShowScreen;