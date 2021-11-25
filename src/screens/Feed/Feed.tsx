import React from 'react';
import {
  SafeAreaView, StatusBar, Text, View,
} from 'react-native';

import { Layout } from '@ui/theme/Layout';
import { styles } from './Feed.styles';
import { AudioList } from './components/AudioList';



export const Feed: React.FC = () => (
  <View style={[Layout.flexContainer, styles.container]}>
    <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    <SafeAreaView style={[Layout.flexContainer]}>
      <Text style={styles.heading}>SomePlay</Text>
      <AudioList />
    </SafeAreaView>
  </View>
);
