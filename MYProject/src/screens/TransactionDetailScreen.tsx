import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const TransactionDetailScreen = ({ navigation }: Props) => (
    <Background>
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
      <Header>Transaction History</Header>
      

    </Background>
);

export default memo(TransactionDetailScreen);