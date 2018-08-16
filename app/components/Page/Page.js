import PropTypes from 'prop-types';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Container from '../Container/Container';
import { PageTitle } from '../Text';
import styles from './styles';
import { Navbar } from '../Navbar';

const Page = ({ title, children, settingsPress, homePress, examsPress }) => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <PageTitle text={title} />
        <View style={styles.container}>
            {children}
        </View>
        <Navbar settingsPress={settingsPress} homePress={homePress} examsPress={examsPress} />
    </Container >
);

Page.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    settingsPress: PropTypes.func,
    homePress: PropTypes.func,
    examsPress: PropTypes.func,
};

export default Page;