import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../../components/context/BlogContext';
import BlogPostForm from '../../components/BlogPostForm'

const EditScreen = ({ navigation,route }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.navigate('id')

    const blogPost = state.find((blogPost) => blogPost.id === navigation.navigate('id'));

    return(
        <BlogPostForm
            onSubmit={(title,content)=>{
                editBlogPost(id, title, content, ()=> navigation.pop())
                
            }}
            initialValues={{ title: blogPost.title, content: blogPost.content}}
            
        />
    )
};

const styles = StyleSheet.create({});

export default EditScreen;