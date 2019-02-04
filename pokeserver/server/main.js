import {Meteor} from 'meteor/meteor';
import {Pokemon} from '../imports/collections/pokemon';

const fs = Npm.require('fs');

Meteor.startup(() => {
    console.log("Server has started.")
});

Meteor.methods({
    'pokemon.add': loc => {
        const user = Meteor.userId();

        if (!user) {
            console.log('user not signed in!');
            return;
        }

        console.log('Adding pokemon ...');

        const range = 0.035;
        const range1 = Math.random() > 0.5 ? range : -range;
        const range2 = Math.random() > 0.5 ? range : -range;
        let long = loc.longitude;
        long = long + Math.random() * (range1);
        let lat = loc.latitude;
        lat = lat + Math.random() * (range2);
        const iconPath = process.env.PWD + '/public';
        const icons = fs.readdirSync(iconPath);
        const min = Math.ceil(0);
        const max = Math.ceil(250);
        const random = Math.floor(Math.random() * (max - min)) + min;

        return Pokemon.insert({image: icons[random], longitude: long, latitude: lat});
    },
    'pokemon.subtract': x => {
        const user = Meteor.userId();
        if (!user) {
            console.log('user not signed in!');
            return;
        }
        return Pokemon.remove(x);
    }
});