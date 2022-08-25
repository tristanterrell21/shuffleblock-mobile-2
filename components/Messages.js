import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Messages extends React.Component {
    render () {
        return (
            <View style={styles.messages}>
                <Text style={styles.text}>The "Messages" feature is in development.</Text>
                <Image style={styles.image} source={require('../assets/construction.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    messages: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        resizeMode: 'contain',
        opacity: 0.5,
        top: 110,
        height: 50,
        width: 50
    },
    text: {
        color: '#ffffff',
        top: 100,
        fontFamily: 'Futura',
        fontSize: 16
    }
  });
  