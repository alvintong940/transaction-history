import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  TransactionListScreen,
  TransactionDetailScreen,
  Dashboard,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    TransactionListScreen,
    TransactionDetailScreen,
    Dashboard,
  },
  {
    initialRouteName: 'TransactionListScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
