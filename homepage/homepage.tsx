import React, { Component } from 'react';
import { styles } from './style/style';
import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export class HomePage extends Component {
    _onPress = () => {
        console.log('Press')
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.title}>ToDay Task</Text>
            <ScrollView>
                <View 
                    style={styles.itemViewContainer}
                >
                    <View 
                        style={styles.subItems}
                    >
                        <View style={styles.itemSquare}></View>
                        <Text style={{color:'white'}}>Like</Text>
                    </View>

                    <View style={styles.itemCircle}></View>
                </View>
                
            </ScrollView>

            {/* <Button 
                title='Hello'
            /> */}
            <View 
                style={styles.wrapper}
            >
                <TextInput
                    placeholder='Nhập vào'
                    placeholderTextColor={'white'}
                    style={[styles.input, styles.shadow]}
                />
                <TouchableOpacity
                    style={[styles.button, styles.shadow,{marginLeft:15}]}
                    onPress={this._onPress}
                >
                    <Image
                        tintColor={'white'}
                        source={require('../images/plus/add.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    }
}