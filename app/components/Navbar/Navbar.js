import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

const Navbar = ({ settingsPress, homePress, examsPress }) => (
    < View style={styles.container} >
        <TouchableHighlight onPress={examsPress} underlayColor={styles.$underlayColor}>
            <View style={styles.settings} />
        </TouchableHighlight>
        <TouchableHighlight onPress={homePress} underlayColor={styles.$underlayColor}>
            <Image style={styles.home} resizeMode='contain' source={require('./images/graduation_cap.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={settingsPress} underlayColor={styles.$underlayColor}>
            <View style={styles.one} />
        </TouchableHighlight>

    </View >
);

Navbar.propTypes = {
    settingsPress: PropTypes.func,
    homePress: PropTypes.func,
    examsPress: PropTypes.func,
};

export default Navbar;