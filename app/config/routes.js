import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

export default StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
},
    {
        mode: 'modal',
    },
);