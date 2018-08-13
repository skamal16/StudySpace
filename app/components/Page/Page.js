import PropTypes from 'prop-types';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Container from '../Container/Container';
import { PageTitle } from '../Text';
import styles from './styles';
import { Navbar } from '../Navbar';

const Page = ({ title, children, onPress }) => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <PageTitle text={title} />
        <View style={styles.container}>
            {children}
        </View>
        <Navbar onPress={onPress} />
    </Container >
);

Page.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    onPress: PropTypes.func,
};

export default Page;