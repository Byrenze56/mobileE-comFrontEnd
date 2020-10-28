import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';





const CommentBoxComponent = ({term, onTermChange, onTermSubmit}) => {

    const { setReplies } = useContext();
    const [ showComment, setShowComment ] = useState(true);


    return(
        <View style={styles.background}>
          <Octicons name="search" style={styles.icon} />
          <TextInput style={styles.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onTermSubmit}
          />
        </View>
    );

    }

    const styles = StyleSheet.create({
        background: {
            backgroundColor: '#F0EEEE',
            height: 50,
            borderRadius: 5,
            marginHorizontal: 15,
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10

        },
        inputStyle: {
            flex: 1,
            fontSize: 18
        },
        icon: {
            fontSize: 35,
            alignSelf: 'center',
            marginHorizontal: 15
        }

    });

    // CommentBoxComponent.static defaultProps = {
    //     loadingComponent: () => <Text>loading...</Text>
        
    // }
    


export default CommentBoxComponent;