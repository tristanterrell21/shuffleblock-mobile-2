import React from 'react'
import {View, StyleSheet, Image, Dimensions} from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom';

export default class Calendar extends React.Component {
    render () {
        return (
            <View>
                <View style={styles.imageContainer}>
                    <ImageZoom 
                        cropWidth={Dimensions.get('window').width * 0.9}
                        cropHeight={Dimensions.get('window').width * 1.2}
                        imageWidth={Dimensions.get('window').width * 0.9}
                        imageHeight={Dimensions.get('window').width * 1.2}>
                        <Image source={require('../assets/calendarSTA.png')} style={styles.image}></Image>
                    </ImageZoom>
                </View>
            </View>
        )
    }
}

const windowWidth = Dimensions.get('window').width * 0.9
const windowHeight = Dimensions.get('window').width * 1.2

const styles = StyleSheet.create ({
    text: {
        textAlign: 'center',
        fontSize:24,
        color: '#ffffff'
    },
    imageContainer: {
        position: 'relative',
        alignSelf: 'center',
        top: 25,
        left:0,
        width:windowWidth,
        height:500
    },
    image: {
        width:windowWidth,
        height:windowHeight
    }
})