import React from 'react'
import {StyleSheet, View, TouchableOpacity, TextInput, Text, ScrollView, Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Settings extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            classes:['period one', 'period two', 'period three', 'period four', 'period five', 'period six']
        }
    }

    render () {
        return (
            <View style={{position:'relative', flex:1}}>
                <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                            {
                                this.state.classes.map((name, index) => {
                                    return (
                                        <View style={styles.inputContainer} key={index}>
                                            <TextInput
                                                style={styles.input}
                                                placeholder={name}
                                                placeholderTextColor="#999999"
                                                //onChangeText={(value) => this._handleChange(value, index)}
                                                value={this.state.classes[index]}>
                                            </TextInput>
                                            <View style={styles.inputRowContainer}>
                                                <TouchableOpacity 
                                                    style={[styles.colors, this.state.classes[index]==='#EB144C' ? {borderColor:'#EB144C', backgroundColor:'#EB144C'} : {borderColor:'#EB144C', backgroundColor:'transparent'}]}
                                                    //onPress={() => this._handleColor('#EB144C', index)}
                                                    >
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                    style={[styles.colors, this.state.classes[index]==='#FF6900' ? {borderColor:'#FF6900', backgroundColor:'#FF6900'} : {borderColor:'#FF6900', backgroundColor:'transparent'}]}
                                                    //onPress={() => this._handleColor('#FF6900', index)}
                                                    >
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                    style={[styles.colors, this.state.classes[index]==='#0693E3' ? {borderColor:'#0693E3', backgroundColor:'#0693E3'} : {borderColor:'#0693E3', backgroundColor:'transparent'}]}
                                                    //onPress={() => this._handleColor('#0693E3', index)}
                                                    >
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                    style={[styles.colors, this.state.classes[index]==='#00D084' ? {borderColor:'#00D084', backgroundColor:'#00D084'} : {borderColor:'#00D084', backgroundColor:'transparent'}]}
                                                    //onPress={() => this._handleColor('#00D084', index)}
                                                    >
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                    style={[styles.colors, this.state.classes[index]==='#FCB900' ? {borderColor:'#FCB900', backgroundColor:'#FCB900'} : {borderColor:'#FCB900', backgroundColor:'transparent'}]}
                                                    //onPress={() => this._handleColor('#FCB900', index)}
                                                    >
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                    style={[styles.colors, this.state.classes[index]==='#9900EF' ? {borderColor:'#9900EF', backgroundColor:'#9900EF'} : {borderColor:'#9900EF', backgroundColor:'transparent'}]}
                                                    //onPress={() => this._handleColor('#9900EF', index)}
                                                    >
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                            <View style={styles.rowContainer}>
                                {
                                    this.state.classes.map((extra, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={[styles.extra, (this.state.classes[index] === extra) ? {backgroundColor:'#999999'} : {backgroundColor:'transparent'}]}>
                                                <Text style = {styles.smallText}>{extra}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                            <TouchableOpacity style={[styles.submit, {borderColor:'#00D084', marginBottom: 10}]}>
                                <Text style={styles.smallText}>Save</Text>
                            </TouchableOpacity>
                            <View style={{position:'relative', height:Dimensions.get('window').height}}></View>
                        </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    add: {
        position:'absolute',
        top: '10%',
        width: '100%',
        height: '100%',
        backgroundColor: '#333333',
    },
    back: {
        position: 'absolute',
        left: '5%',
        top: 10,
        height: 50,
        width: '42.5%',
        borderColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 2,
        justifyContent:'center'
    },
    text: {
        textAlign: 'center',
        fontSize:24,
        color: '#ffffff'
    },
    smallText: {
        textAlign: 'center',
        fontSize:24,
        color: '#ffffff'
    },
    textForm: {
        textAlign: 'center',
        fontSize:24,
        color: '#ffffff'
    },
    container: {
        position: 'relative',
        top: 70,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    inputRowContainer: {
        position:'absolute',
        top:32,
        height:18,
        right:0,
        flexDirection: 'row',
    },
    colors: {
        position:'relative',
        marginLeft:4,
        height: 18,
        width:18,
        borderRadius: 3.6,
        borderWidth: 2,
    },
    input: {
        position: 'absolute',
        marginTop: 0,
        marginBottom: 4,
        textAlign: 'left',
        height: 28,
        marginBottom: 0,
        width:'100%',
        fontSize:24,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderBottomColor: '#ffffff',
        borderRadius: 0,
        padding: 0,
        color: '#ffffff'
    },
    inputContainer: {
        position: 'relative',
        height: 50,
        width:'90%'
    },
    submit: {
        position: 'relative',
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent:'center'
    },
    item: {
        textAlign: 'left',
        fontSize:24,
        color: '#ffffff',
        padding: 0,
    },
    picker: {
        position: 'relative',
        width:'90%',
        height: 32,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '90%',
    },
    form: {
        position: 'relative',
        width: '21.25%',
        marginRight: '0%',
        marginBottom: 10,
        height: 50,
        borderColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 2,
        justifyContent:'center'
    },
    extra: {
        position: 'relative',
        width: '47.5%',
        marginRight: '0%',
        height: 50,
        borderColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 2,
        justifyContent:'center',
        marginBottom: 10
    },
    scrollView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})