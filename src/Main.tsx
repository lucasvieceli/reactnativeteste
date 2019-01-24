import React, {Component} from 'react';
import  {Text, Alert, View} from 'react-native';
import './config/storage';
import {ConversaModel} from "./models/conersa.model";

import { createConnection, getRepository } from 'typeorm/browser';

export default class Main extends Component {

  state = {
    logado: null
  };


  componentDidMount() {

    createConnection({
      type: 'react-native',
      database: 'test',
      location: 'default',
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [
          ConversaModel
      ]
    }).then()

  }


  render() {

      return <View><Text>.</Text></View>;

  }
}


