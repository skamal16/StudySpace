import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Page } from '../components/Page';

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    }

    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings', { title: 'Settings' });
    };

    render() {
        return (
            <Page onPress={this.handleSettingsPress}>
                <StatusBar translucent={false} barStyle="light-content" />
            </Page>
        );
    }
}

export default Home;