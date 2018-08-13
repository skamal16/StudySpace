import { PropTypes } from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const StylishListItem = ({ text, onPress }) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableHighlight>
);

StylishListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
};

export default StylishListItem;