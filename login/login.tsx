import React, { Component } from 'react';
import { LoginStyle } from './style/loginStyle';
import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export class Login extends Component {

    handleLogin = () => {
        console.log('login sucess!');
    };
    render() {
        return <View style={LoginStyle.container}>
            <Text style={LoginStyle.title}>Đăng Nhập</Text>

            <TextInput
                style={LoginStyle.input}
                placeholder="Tên đăng nhập"
            />

            <TextInput
                style={LoginStyle.input}
                placeholder="Mật khẩu"
                secureTextEntry={true}
            />

            <TouchableOpacity style={LoginStyle.button} onPress={this.handleLogin}>
                <Text style={LoginStyle.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>
        </View>
    }
}