import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import SearchBar from '../../components/TextInputs/SearchBar';
import SeperatorBarComponent from '../../components/SeperationBar/SeperaterComponent';




const SelectedListComponent = ({ navigation }) => {


const pics = [
    {url: require('../../../assets/bondage.jpg')},
    {url: require('../../../assets/header_1.jpg')},
    {url: require('../../../assets/orangeVag.jpg')},
    {url: require('../../../assets/header_3.jpg')},
    {url: require('../../../assets/sexBooks_1.jpg')},
    {url: require('../../../assets/shoes.jpg')},
    {url: require('../../../assets/header_4.jpg')},
    {url: require('../../../assets/furrCuffs.jpg')},
    {url: require('../../../assets/sexBooks_2.jpg')},
];


    return (
     <>
     <ActivityIndicator/>
        <View style={styles.container}>
            <View style={styles.top}>
            <Image style={styles.image} source={require('../../../assets/bondage.jpg')}/>
            <SeperatorBarComponent/>
            </View>
            <View style={styles.cateogories}>
                <FlatList
                    data={pics}
                    keyExtractor={(pic)=> pic.url}
                    renderItem={({ item}) => {
                        return(
                            <View>
                                <TouchableOpacity
                                     onPress={() => navigation.navigate('Details')}
                                     style={{margin:8}}
                                >
                                <Image  source={item.url}/>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    horizontal={true}
                />
            </View>
            <View style={styles.bottomsearch}>
           
                <SearchBar/>
            </View>
        </View>
      </>
    )
  }

  const styles = StyleSheet.create({
      container: {
          backgroundColor: 'black',
          width: '100%',
          height: '100%'
      },
      top: {
          width: '100%',
          height: '40%'
      },
      image: {
          width: '40%',
          height: '40%'
      },
      text: {
          color: 'white'
      },
    
  })

  export default SelectedListComponent;