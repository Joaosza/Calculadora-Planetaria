import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';

const background = require('./imgs/background.png')
const ac = require('./imgs/AC.png')
const jupiter = require('./imgs/JUPTER.png')
const lua = require('./imgs/LUA.png')
const marte = require('./imgs/MARTE.png')
const mercurio = require('./imgs/MERCURIO.png')
const netuno = require('./imgs/NETUNO.png')
const plutao = require('./imgs/PLUTAO.png')
const saturno = require('./imgs/SATURNO.png')
const sol = require('./imgs/SOL.png')
const urano = require('./imgs/URANO.png')
const venus = require('./imgs/VENUS.png')


export default class Calculadora extends Component {
    state = {
        peso: '0 Kg'
    }

    limpar() {
        this.setState({ peso: '0 Kg' });
    }

    render() {
        return (
            <ImageBackground source={background} style={{ height: '100%', width: '100%' }} >
                <View style={{ flex: 1 }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                        <Text style={styles.texto}>{this.state.texto}</Text>
                    </View>

                    {/* VIEW DO INPUT */}
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'flex-end'
                    }}>
                        <TextInput style={styles.textoEntrada} placeholder='INFORME SEU PESO' onChangeText={(peso) => this.setState({ peso: peso })}
                            keyboardType='numeric' />
                    </View>

                    {/* COMEMO DAS VIEWS E COLUNAS */}
                    <View style={{
                        flex: 2,
                        flexDirection: 'column'
                    }}>

                        {/* COMEMO DA 1 COLUNA */}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            justifyContent: 'space-around'
                        }}>

                            {/* IMAGEM DO BURACO DE MINHOCA */}
                            <TouchableHighlight style={{
                                flex: 2,
                                justifyContent: 'space-around',
                            }}>
                                <Image source={ac} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DA LUA */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around',
                            }}>
                                <Image source={lua} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DE MERCURIO */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around',
                            }}>
                                <Image source={mercurio} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                        </View>

                        {/* COMEMO DA 2 COLUNA */}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            justifyContent: 'space-between',

                        }}>
                            {/* IMAGEM DE VENUS */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}>
                                <Image source={venus} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DE MARTE */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}>
                                <Image source={marte} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DE JUPITER */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}>
                                <Image source={jupiter} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DE SATURNO */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}>
                                <Image source={saturno} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                        </View>


                        {/* COMEMO DA 3 COLUNA */}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            justifyContent: 'space-around',

                        }}>
                            {/* IMAGEM DO URANO */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}>
                                <Image source={urano} style={{ width: '90%', height: '90%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DO NETUNO */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}>
                                <Image source={netuno} style={{ width: '90%', height: '90%' }} />
                            </TouchableHighlight>

                            {/*   IMAGEM DO PLUTAO  */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}>
                                <Image source={plutao} style={{ width: '90%', height: '90%' }} />
                            </TouchableHighlight>


                            {/* IMAGEM DO SOL */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}>
                                <Image source={sol} style={{ width: '80%', height: '80%' }} />
                            </TouchableHighlight>

                        </View>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        height: '100%'
    },
    texto: {
        fontSize: 60,
        color: 'white',
        fontFamily: 'Press Start 2P',
        margin: 10
    },
    textoEntrada: {
        fontSize: 25,
        color: 'gray',
        fontFamily: 'Press Start 2P',
        textAlign: 'center'
    }

});