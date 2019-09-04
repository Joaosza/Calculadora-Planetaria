import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';

const imagemBG = require('./background.png')

export default class Calculadora extends Component {

    render() {
        return (
            <ImageBackground source={imagemBG} style={{ height: '100%', width: '100%' }}>
            
                <TextInput style={[ styles.texto ]}
                    placeholder='INFORME O SEU PESO'
                    keyboardType='numeric'
                />
            </ImageBackground>
        );
    }
} 

const styles = StyleSheet.create({
  
})