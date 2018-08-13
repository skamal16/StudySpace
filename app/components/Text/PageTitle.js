import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const PageTitle = ({ text }) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>
);

PageTitle.propTypes = {
    text: PropTypes.string,
};

export default PageTitle;