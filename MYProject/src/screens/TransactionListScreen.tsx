import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Alert, FlatList, SafeAreaView, Image, Button } from 'react-native';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const tasks =[
  {amount:'120.00', date:'21/12/2023', description:"Own transfer", type:'debit'},
  {amount:'520.00', date:'23/12/2023', description:"Own transfer", type:'credit'},
  {amount:'10.00', date:'24/12/2023', description:"Grocerry", type:'debit'},
  {amount:'20.00', date:'25/12/2023', description:"Own transfer", type:'credit'},
  {amount:'120.00', date:'25/12/2023', description:"Petrol", type:'debit'},
  {amount:'12.00', date:'25/12/2023', description:"Own transfer", type:'debit'},
  {amount:'12.00', date:'27/12/2023', description:"Petrol", type:'debit'},
  {amount:'120.00', date:'27/12/2023', description:"Own transfer", type:'credit'},
  {amount:'20.00', date:'21/01/2024', description:"Own transfer", type:'credit'},
  {amount:'20.00', date:'21/01/2024', description:"Own transfer", type:'credit'},
  {amount:'120.00', date:'21/01/2024', description:"Grocery", type:'debit'},
  {amount:'1020.00', date:'21/01/2024', description:"CC bill", type:'debit'},
  {amount:'120.00', date:'21/01/2024', description:"Grocery", type:'debit'}];

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
        data={tasks}
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

