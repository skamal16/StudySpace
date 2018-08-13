import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { StylishList } from '../components/Lists/StylishList';
import exams from '../data/exams'
import { Page } from '../components/Page';

const TITLE = 'Exam List';
const TEMP_CURRENT_EXAM = 'MCAT';

class Exams extends Component {

    handlePress = () => {
        console.log('row press');
    }

    render() {
        return (
            <Page title={TITLE}>
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