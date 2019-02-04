import React from 'react';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
import {Button, Form, Input, Item, Label} from 'native-base';

const myBackground = require('../assets/landing.jpg');
const window = Dimensions.get('window');
const {height, width} = window;

class SignIn extends React.Component {
    state = {
        email: "",
        password: ""
    };

    logIn = () => {
        const {email, password} = this.state;
        this.props.signIn(email, password);
    };

    render() {
        return (
            < View
        style = {
        {
            flex: 1
        }
    }>
    <
        ImageBackground
        source = {myBackground}
        style = {styles.backgroundImage} >
            < View
        style = {styles.inputStyle} >
            < Form >
            < Item
        floatingLabel >
        < Label > Email < /Label>
        < Input
        style = {
        {
        }
    }
        autoCorrect = {false}
        autoCapitalize = "none"
        onChangeText = {email
    =>
        this.setState({email})
    }
        />
        < /Item>
        < Item
        floatingLabel >
        < Label > Password < /Label>
        < Input
        style = {
        {
        }
    }
        secureTextEntry
        autoCorrect = {false}
        autoCapitalize = "none"
        onChangeText = {password
    =>
        this.setState({password})
    }
        />
        < /Item>
        < /Form>
        < View
        style = {
        {
            marginTop: 10
        }
    }>
    <
        Button
        primary
        block
        onPress = {this.logIn} >
            < Text
        style = {
        {
            color: 'white'
        }
    }>
        Sign
        In / Sign
        Up < /Text>
        < /Button>
        < /View>
        < /View>
        < /ImageBackground>
        < /View>
    )
        ;
    }
}

const styles = {
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width,
        height
    },
    inputStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10
    }
};

export default SignIn;