import React from 'react';
import {View} from 'react-native';
import SignIn from "./src/SignIn";
import Meteor, {Accounts} from 'react-native-meteor';
import PokeMap from "./src/PokeMap";

const SERVER_URL = 'ws://localhost:3000/websocket';

export default class App extends React.Component {
    state = {
        loggedIn: false
    };

    componentWillMount() {
        Meteor.connect(SERVER_URL);
        if (Meteor.userId()) {
            this.flipLogin(true);
        }
    }

    flipLogin = (x) => {
        this.setState({loggedIn: x});
    };

    signIn = (email, password) => {
        Meteor.loginWithPassword(email, password, (error, data) => {
            if (error) {
                if (error.reason === "User not found") {
                    Accounts.createUser({email, password}, error => {
                        console.log(error);
                    });
                }
            } else {
                this.flipLogin(true);
            }
        });
    };

    renderView = () => {
        if (!this.state.loggedIn) {
            return
        <
            SignIn
            signIn = {this.signIn}
            />
        } else {
            return
        <
            PokeMap
            flipLogin = {this.flipLogin}
            />
        }
    };

    render() {
        return (
            < View
        style = {styles.container} >
            {this.renderView()}
            < /View>
    )
        ;
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
};