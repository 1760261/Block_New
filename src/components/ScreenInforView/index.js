import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Item } from 'native-base';
import styles from '@Component/ScreenInforView/styles';
import FlatListData from './FlatListData';

const FlatListItem = ({ item }) => {
  return (
    <View
      style={{
        width: 24,
        height: 24,
        overflow: 'hidden',
        borderRadius: 12,
      }}>
      <Image resizeMode="cover" source={item.Url} style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

const ScreenInfo = ({ name, day, detail, title }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 5,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 15,
            left: 10,
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
            }}
            source={require('@Asset/images/imgA.png')}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.Name}> {name}</Text>
            <Text style={styles.Day}> {day}</Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.Title}>{title} </Text>
          <Text style={styles.Detail}>{detail}</Text>
        </View>
      </View>
    </View>
  );
};

export default ScreenInfo;
