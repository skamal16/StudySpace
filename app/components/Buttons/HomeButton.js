import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

const HomeButton = (onPress) => (
    <TouchableOpacity onPress={onPress}>
        <View>
            <Image source={require('./images/study_space_logo.png')} />
        </View>
    </TouchableOpacity>
);

HomeButton.propTypes = {
    onPress: PropTypes.func,
};

export default HomeButton;