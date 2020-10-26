import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../components/context/BlogContext';
import { Feather } from '@expo/vector-icons';
// import data from './'
const IndexScreen = ({ navigation }) => {
    const  {state, deleteBlogPost } = useContext(Context);

//     useEffect = (() => {},[]);

// useEffect = (()=> { 
//     let rando = Math.floor(Math.random() * data.length);
//     let oldPicArr = [data];
//     if(data.length > 0){
//         let pic = data[rando]
//         let newPicArr = oldPicArr.push(pic);
//          data = newPicArr;
//          newPicArr = data;
//     }else return data[0]} , [ data ])

// useEffect = (() => {}, [newPicArr])

    return( 
        <View>
            
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={()=> navigation.navigate('Show',{ id: item.id })} >
                        <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
                        <Feather name='trash' style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
};


IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}><Feather style={styles.plus} name='plus' size={30} /></TouchableOpacity>
                
               
             ), 
       }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    plus: {
        marginRight: 5
    }
})
export default IndexScreen;

