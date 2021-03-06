import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ImageCardView from '@Component/ImageCardView';
import ScreenInforView from '@Component/ScreenInforView';
import { Icon } from 'native-base';

import FlatListData from '@Component/ScreenInforView/FlatListData';
import styles from '@Component/ImageCardView/styles';
import styless from '@Component/ShowScreen/styles';
const FlatListItem = ({ item }) => {
  return (
    <View style={styless.Avatar}>
      <Image resizeMode="cover" source={item.Url} style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

const ShowAvatarIcon = () => {
  let newCount = 0;

  if (FlatListData.length > 5) {
    newCount = FlatListData.length - 5;
  }
  const data = FlatListData;
  for (var i = 0; i < newCount; i++) {
    data.pop();
  }

  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: 'row',
      }}>
      <FlatList
        horizontal
        style={{ margin: 5 }}
        data={FlatListData}
        renderItem={({ item, index }) => {
          return <FlatListItem item={item} index={index} />;
        }}
      />
      <Text style={{ paddingTop: 7 }}> + {newCount}</Text>
    </View>
  );
};

class ShowIconReact extends Component {
  state = {
    styles1: styless.Icon,
    IsChange: true,
  };
  Change2 = () => {
    this.state(previousState => {
      return {
        IsChange: !previousState.IsChange,
      };
    });
  };

  c;

  ChangStyleColor() {
    const styles2 = styless.Icon2;
    const styles3 = styless.Icon;
    if (this.state.IsChange == true) return this.setState({ styles1: styles2, IsChange: false });
    if (this.state.IsChange == false) return this.setState({ styles1: styles3, IsChange: true });
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          right: 25,
        }}>
        <TouchableOpacity onPress={this.ChangStyleColor.bind(this)}>
          <Icon name="like2" type="AntDesign" style={this.state.styles1} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comment-processing-outline" type="MaterialCommunityIcons" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share" type="MaterialIcons" />
        </TouchableOpacity>
      </View>
    );
  }
}

const index = ({ IMGS, name, day, title, detail }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginBottom: 10,
      }}>
      <View style={{ paddingTop: 10, flexDirection: 'row' }}>
        <View style={{ flex: 50, marginTop: -10 }}>
          <Image source={IMGS} style={styles.lagreImage} />
        </View>
        <View style={{ flex: 50 }}>
          <ScreenInforView name={name} day={day} title={title} detail={detail} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 50,
            paddingTop: 20,
            marginLeft: 35,
          }}>
          <ShowIconReact />
        </View>
        <View
          style={{
            flex: 50,
            paddingBottom: 10,
            paddingRight: 10,
            flexDirection: 'row',
          }}>
          <ShowAvatarIcon />
        </View>
      </View>
    </View>
  );
};

export default index;
