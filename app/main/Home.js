import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
} from 'react-native';

//Dimension of screen :
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;


export default class Home extends Component<{}> {

  render() {

    let imgCreer = require('../img/creerAccueil.jpg');
    let imgSuivre = require('../img/gainage.jpg');
    let imgPartage = require('../img/partageAccueil.jpg');

    return (
          <View style={styles.container}>
              <View style={styles.section}>
                <View>
                  <Image source={imgCreer} style={{height: h*0.2, width: w, opacity: 0.7}}/>
                </View>

                <View style={styles.textContain} >
                  <Text style={styles.caption} onPress={() => this.props.navigation.navigate('CreatePlan')}>
                    Créer un plan
                  </Text>
                </View>
              </View>


              <View style={styles.section}>
                <View>
                  <Image source={imgSuivre} style={{height: h*0.2, width: w, opacity: 0.7}}/>
                </View>

                <View style={[styles.textContain, , {backgroundColor: '#CCC'}]} >
                  <Text style={styles.caption}>
                    Suivre un plan
                  </Text>
                </View>
              </View>


              <View style={styles.section}>
                <View>
                  <Image source={imgPartage} style={{height: h*0.2, width: w, opacity: 0.7}}/>
                </View>

                <View style={[styles.textContain, {backgroundColor: '#000'}]} >
                  <Text style={styles.caption}>
                    Partager plan
                  </Text>
                </View>
              </View>

          </View>
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    section: {
        flex: 0.33333,
    },
    textContain: {
        flex: 1,
        backgroundColor: '#FF3366',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    caption: {
      color: 'white',
      fontSize: 40,
      textAlign: 'center',
    }
});