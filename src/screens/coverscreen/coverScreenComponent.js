import React, { useContext, useRef, useEffect } from 'react';
import { StyleSheet, View,Text,Image, Animated, Flatlist } from 'react-native';
import { Context } from '../../components/context/BlogContext';
import BlogPostForm from '../../components/BlogPostForm';
import SearchBar from '../../components/TextInputs/SearchBar';
import SeperatorBarComponent from '../../components/SeperationBar/SeperaterComponent';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2500,
                useNativeDriver:'true'
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View style={{...props.style, opacity: fadeAnim,}}>
          {props.children}
        </Animated.View>
    )
}

const CoverScreenComponent = ({ navigation,route }) => {
    const { state, editBlogPost } = useContext(Context);
    // const id = navigation.navigate('id')

    // const blogPost = state.find((blogPost) => blogPost.id === navigation.navigate('id'));

    return(
       <View style={styles.container}>
        <FadeInView style={styles.top}>
            <Text style={styles.pure}>Pure Romance</Text>
            
        </FadeInView>
        <View>
        <SearchBar/>
        </View>
        <View style={styles.middle}>
            <Image style={styles.image} source={require('../../../assets/bondage.jpg')}/>
            <SeperatorBarComponent/>
            <View style={styles.feedView}>
            <TouchableOpacity>
            <Text style={styles.feeds}>Sexxy Cool</Text>
            <SeperatorBarComponent/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.feeds}>Man Cool</Text>
            <SeperatorBarComponent/>
            </TouchableOpacity>

            
        </View>
        </View>
            <View style={{width:'100%',height:'6%',backgroundColor:'tomato'}}>
                <TextInput style={{width:'25%',height:'20%',backgroundColor:'gray'}}/>
            </View>
       </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        width: '100%',
        height: '100%'
    },
    top: {
        height: '10%',
        backgroundColor: 'red',
        
    },
    pure: {
        textAlign:'center',
        fontSize: 30,
        color: 'white'
    },
    bottom: {
        flex: 1
    },
    image: {
        width:'40%',
        height: '40%',
      
    },
    middle: {
        width: '100%',
        height:'40%',
        alignItems:'center'
        
    },
    feeds: {
        color: 'white',
        fontSize:13,
        fontWeight: 'bold',
        borderBottomColor:'white',
        marginLeft:15
        
    },
    feedView:{
        flex:1,
        flexDirection:'row',
        padding:3,
        
    }
});

export default CoverScreenComponent;