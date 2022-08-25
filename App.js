import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Home from './components/Home'
import Settings from './components/Settings'
import Calendar from './components/Calendar'
import Messages from './components/Messages'
import Classes from './components/Classes'
export default class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      page:'Home'
    }
  }

  _changePage = function (page) {
    this.setState({page:page})
  }

  render () {
    return (
      <View style={styles.app}>
        <View style={styles.titleBar}>
          <Text style={styles.titleBarText}>STA BLOCK</Text>
        </View>
        <View style={styles.navigationBar}>
          <TouchableOpacity style={styles.button} onPress={() => this._changePage('Messages')}>
            <Image source={require('./assets/messages.png')} style={[styles.icon, this.state.page !== 'Messages' ? {opacity: 0.5} : null]}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._changePage('Classes')}>
            <Image source={require('./assets/classes.png')} style={[styles.icon, this.state.page !== 'Classes' ? {opacity: 0.5} : null]}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._changePage('Home')}>
            <Image source={require('./assets/home.png')} style={[styles.icon, this.state.page !== 'Home' ? {opacity: 0.5} : null]}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._changePage('Calendar')}>
            <Image source={require('./assets/calendar.png')} style={[styles.icon, this.state.page !== 'Calendar' ? {opacity: 0.5} : null]}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._changePage('Settings')}>
            <Image source={require('./assets/settings.png')} style={[styles.icon, this.state.page !== 'Settings' ? {opacity: 0.5} : null]}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.page}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./assets/logo.png')} style={styles.logo}></Image>
            <Text style={styles.credit}>Powered by ShuffleBlock LLC</Text>
          </View>
          {
            this.state.page === 'Home' ? <Home changePage={this._changePage.bind(this)}></Home> :
            this.state.page === 'Settings' ? <Settings changePage={this._changePage.bind(this)}></Settings> :
            this.state.page === 'Calendar' ? <Calendar changePage={this._changePage.bind(this)}></Calendar> :
            this.state.page === 'Messages' ? <Messages changePage={this._changePage.bind(this)}></Messages> :
            this.state.page === 'Classes' ? <Classes changePage={this._changePage.bind(this)}></Classes> :
            null
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  titleBar: {
    position: 'absolute',
    height: '10%',
    width: '100%',
    backgroundColor:'#002d72',
    justifyContent: 'flex-end'
  },
  titleBarText: {
    textAlign: 'center',
    color: '#ffffff',
    bottom: 10,
    fontSize: 32,
  },
  navigationBar: {
    position: 'absolute',
    top: '10%',
    height: '5%',
    width: '100%',
    backgroundColor: '#212124',
    borderBottomWidth: '1',
    borderBottomColor: '#818181',
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    position: 'relative',
    flex: 1,
  },
  icon: {
    position: 'relative',
    resizeMode: 'contain',
    top: 5,
    height: '80%',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    resizeMode: 'contain',
    top: 200,
    opacity: 0.25,
    height: 200,
    width: 200
  },
  page: {
    position:'absolute',
    top: '15%',
    width: '100%',
    height: '90%',
    backgroundColor: '#212124',
  },
  credit: {
    position: 'absolute',
    color: '#818181',
    opacity: 0.5,
    top: 425
  }
});
