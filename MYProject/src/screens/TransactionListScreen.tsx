import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Alert, FlatList, SafeAreaView, Image, Button } from 'react-native';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import { Navigation } from '../types';
import { history } from '../mock/data';

type Props = {
  navigation: Navigation;
};

const TransactionListScreen = ({ navigation }: Props) => {

  const listItem = (props: any) => {
    return (
      <View>
        <TouchableOpacity onPress={() => handleNavigate()}>
        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
            Amount: {props.item.amount}
          </Text>
        </View>
        <View style={styles.listItemCont}>
        <Text style={styles.listItem}>
            Date: {props.item.date}
          </Text>
        </View>
        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
            Description: {props.item.description}
          </Text>
          </View>
        <View style={styles.listItemCont}>
          <Text style={styles.listItem}>
            Type: {props.item.type}
          </Text>
          </View>
        <View style={styles.hr} />
        </TouchableOpacity>
      </View>
    );
  }

  const handleNavigate = () => {
    navigation.navigate('TransactionDetailScreen');
  }
  
  return (
    
    <><Background>
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
    <View style={[styles.container]}>    
      <FlatList
        style={styles.list}
        data={history}
        renderItem={listItem} />
    </View>
    </Background></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 30
  },
  list: {
    width: "100%"
  },
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


export default memo(TransactionListScreen);

