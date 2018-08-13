import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

const Navbar = ({ onPress }) => (
    < View style={styles.container} >
        <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
            <View style={styles.settings} />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
            <Image style={styles.home} resizeMode='contain' source={require('./images/graduation_cap.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
            <View style={styles.one} />
        </TouchableHighlight>

    </View >
);

Navbar.propTypes = {
    onPress: PropTypes.func,
};

export default Navbar;