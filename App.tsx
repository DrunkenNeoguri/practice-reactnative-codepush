import React from 'react';
import Naviagation from './src/routes';
import CodePush from 'react-native-code-push';

function App() {
  return <Naviagation />;
}

export default CodePush(App);
