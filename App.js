import React from 'react';
import Screens from '@Screen/index';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import ImageCardView from '@Component/ImageCardView';
import { InputGroup } from 'native-base';
import ScreenInforView from '@Component/ScreenInforView';
import ShowScreen from '@Component/ShowScreen';

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'pink' }}>
      <View
        style={{
          marginTop: 50,
          backgroundColor: 'white',
          margin: 20,
          borderRadius: 10,
        }}>
        <ShowScreen
          name="Erick Smith"
          day="Saturday at 12:00 PM"
          title="The tailor from outer space or the incredible
"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod lasted tempor..."
          IMGS={require('@Asset/images/imageC.png')}
        />
      </View>
      <View
        style={{
          borderRadius: 10,
          marginTop: 50,
          backgroundColor: 'white',
          margin: 20,
        }}>
        <ShowScreen
          name="Erick Smith"
          day="Saturday at 12:00 PM"
          title="Top 10 Yoga paths you could take to be stress free today
"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod lasted tempor..."
          IMGS={require('@Asset/images/imgA.png')}
        />
      </View>
      <View
        style={{
          borderRadius: 10,
          marginTop: 50,
          backgroundColor: 'white',
          margin: 20,
        }}>
        <ShowScreen
          name="Erick Smith"
          day="Saturday at 12:00 PM"
          title="The tailor from outer space or the incredible
"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod lasted tempor..."
          IMGS={require('@Asset/images/imgA.png')}
        />
      </View>
    </ScrollView>
  );
}
