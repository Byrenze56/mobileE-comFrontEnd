import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../../components/context/BlogContext';
import BlogPostForm from '../../components/BlogPostForm.js';
// import { EvilIcons } from '@expo/vector-icons';

const CreateScreen = ({ navigation }) => {
    const {addBlogPost} = useContext(Context);

    return (
    <BlogPostForm
        onSubmit={(title, content)=> {
            addBlogPost(title, content, ()=> navigation.navigate('Index'))
           
        }}
       
    />
    )
};

CreateScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
             onPress={()=>
              navigation.navigate('Edit', {id: navigation.getParam('id')})
              }>
                <EvilIcons name='pencil' size={35} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

});

export default CreateScreen;