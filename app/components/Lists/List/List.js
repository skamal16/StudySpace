import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';

import ListItem from './ListItem';
import { Page } from '../../Page'
import Separator from './Separator';

const List = ({ title, list, selected, handlePress }) => (
    <Page title={title}>
        <FlatList
            data={list}
            renderItem={({ item }) => (
                <ListItem
                    onPress={handlePress}
                    text={item}
                    selected={item === selected}
                />
            )}
            keyExtractor={item => item}
            ItemSeparatorComponent={Separator}
        />
    </Page>
);

List.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    selected: PropTypes.string,
    handlePress: PropTypes.func,
};

export default List;