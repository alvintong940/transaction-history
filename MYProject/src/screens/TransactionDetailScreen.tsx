import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import { Navigation } from '../types';
import { mockTrxDetail } from '../mock/data';

type Props = {
  navigation: Navigation;
};

const TransactionDetailScreen = ({ navigation }: Props) => {
  const data = mockTrxDetail;

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
      <Header>Transaction History</Header>
      
      <View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           Reference No : {data.refNo}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           To Account Name : {data.toAccName}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           To Account No : {data.toAccNo}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           To Account Bank : {data.toAccBank}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           From Account No : {data.fromAccNo}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           Date : {data.date}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           Transfer Mode : {data.tranferMode}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           Payment Type : {data.type}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           Description : {data.description}
          </Text>
        </View>

        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
           Amount : {data.amount}
          </Text>
        </View>
      </View>

    </Background>
  )
};

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
});

export default memo(TransactionDetailScreen);