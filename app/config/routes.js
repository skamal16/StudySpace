import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Exams from '../screens/Exams'
import Settings from '../screens/Settings';
import Themes from '../screens/Themes';

export default StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Exams: {
        screen: Exams,
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
    Themes: {
        screen: Themes,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
},
    {
        mode: 'modal',
        //cardStyle: { paddingTop: StatusBar.currentHeight },
    },
);