import React from "react";
import {createStackNavigator} from "react-navigation";

import ConversaListaPage from './lista/lista.component'
import ConversaPage from "./conversa";

export default  createStackNavigator({
		ConversaLista: {
			screen: ConversaListaPage,
			navigationOptions: {
				header: null
			}
		},
		ConversaConversa: {
			screen: ConversaPage,
			path: 'conversa/:id',
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'ConversaLista'
	}
);
