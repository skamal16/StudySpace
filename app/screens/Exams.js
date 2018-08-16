import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { StylishList } from '../components/Lists/StylishList';
import exams from '../data/exams'
import { Page } from '../components/Page';

const TITLE = 'Exam List';
const TEMP_CURRENT_EXAM = 'MCAT';

class Exams extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    }

    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings', { title: 'Settings' });
    };

    handleHomePress = () => {
        this.props.navigation.navigate('Home', { title: 'Home' });
    };

    handlePress = () => {
        console.log('press exam item');
    };

    render() {
        return (
            <Page title={TITLE} settingsPress={this.handleSettingsPress} homePress={this.handleHomePress}>
                <StylishList
                    title={TITLE}
                    list={exams}
                    selected={TEMP_CURRENT_EXAM}
                    handlePress={this.handlePress}
                >
                    <StatusBar translucent={false} barStyle="light-content" />
                </StylishList>
            </Page >
        );
    }
}

export default Exams;