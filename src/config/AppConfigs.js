import Immutable from 'seamless-immutable';
import { YellowBox } from 'react-native';
// import firebase from 'expo-firebase-app';

console.ignoredYellowBox = ['Remote debugger'];
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

//define configs
const AppConfigs = {
  apiVersion: 'v1',
};

global.AppConfigs = Immutable(AppConfigs);
export default global.AppConfigs;
