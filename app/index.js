import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import Start from './screens/Start';
import RegistrationForm from './screens/RegistrationForm';
import Exams from './screens/Exams';
import Settings from './screens/Settings';
import Themes from './screens/Themes';
import Navigator from './config/routes';

EStyleSheet.build({
    $primaryRed: '$softRed',
    $primaryBlue: '$lightBlue',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',

    $lightBlue: '#4F6D7A',
    $lightGrey: '#E2E2E2',
    $lightRed: '#E3BBBB',
    $softRed: '#FF5E5E',
    $white: '#FFFFFF',
    $red: '#FF0000',
    $black: '#000000',
    $grey: '#797979',

    //$outline: 1,
});

export default () => <Navigator />;