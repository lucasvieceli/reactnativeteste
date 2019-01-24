import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomePage from './paginas/home';
import RouterConversa from './paginas/conversa/router';
import Icon from './components/icon/icon.component';


class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({

		Home: {
			screen: HomePage,
			navigationOptions:{
				title: "Instagram",
				tabBarIcon: ({ tintColor }) => (
					<Icon nome="ios-home-outline" cor={tintColor}/>
				)
			}
		},
        Conversas: {
			screen: RouterConversa,
			navigationOptions:{
				title: "Converças",
				tabBarIcon: ({ tintColor }) => (
					<Icon nome="ios-chatbubbles-outline" cor={tintColor} />
				)
			}
		},

		 Perfil: {
			screen: SettingsScreen, 
			navigationOptions:{
				title: "Converças",
				tabBarIcon: ({ tintColor }) => (
					<Icon nome="ios-contact-outline" cor={tintColor}/>
				)
			}
		},
		 Configuracoes: {
			screen: SettingsScreen, 
			navigationOptions:{
				title: "Converças",
				tabBarIcon: ({ tintColor }) => (
					<Icon nome="ios-cog" cor={tintColor}/>
				)
			}
		},
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
		
        tabBarOptions: {
			tabStyle:{
				borderTopWidth: 1,
				borderColor: '#bbb',
			},
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    }
);

export default createAppContainer(TabNavigator);
//export default createStackNavigator({ TabNavigator }, { headerMode: "none" });