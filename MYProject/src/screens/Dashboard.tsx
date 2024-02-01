import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Header>Let’s start</Header>
    <Paragraph>
      Welcome, you successfully login to the App!
    </Paragraph>

    <Button mode="contained" onPress={() => navigation.navigate('TransactionListScreen')}>
      Transaction History
    </Button>

    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
