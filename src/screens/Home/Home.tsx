/**
 * Home screen component
 * @file Home.tsx
 */

import Car from '@/assets/images/svg/Car';
import Header from '@/components/Header';
import RNButton from '@/components/RNButton';
import { Label } from '@/components/RNText';
import { homeScreenData } from '@/fixtures/HomeScreen';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InfoOverlayModal from '@/components/InfoOverlayModal';

const Home = () => {
  const navigation = useNavigation<any>();
  const [showModal, setShowModal] = useState(false);

  const handleUpgrade = () => {
    setShowModal(true);
  };

  const handleModalContinue = () => {
    navigation.navigate('PersonalInfo');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Header />
      <Text style={{ color: 'Black', marginBottom: 13, fontSize: 18 }}>Welcome back,</Text>
      <View style={{ height: 336, backgroundColor: '#F9A130', borderRadius: 20 }}>
        <View style={{ marginStart: 21 }}>
          <Label style={{ fontWeight: 700, fontSize: 22, marginTop: 21, color: '#FFFFFF' }}>Upgrade your Motor
            Insurance Plan</Label>
          <Label text="Your Motor Insurance Plan is almost up to date. Upgrade to get the best deals and
            discounts."  preset='default' style={{ marginVertical: 13 }} />
          <RNButton title="Upgrade" size="btnSmall" onPress={handleUpgrade} style={{ marginBottom: 13 }} />
          <Car />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 21 }}>
          <Label>Your Insured Cars</Label>
          <Label>See All</Label>

        </View>
      </View>
      <View style={{ marginTop: 12 }} />
      <FlatList
        data={homeScreenData}
        horizontal
        renderItem={({ item }) => (
          <View style={{ marginTop: 21, backgroundColor: '#FFFFFF', padding: 13, height: 123, marginHorizontal: 5, elevation: 3, borderRadius: 20 }}>
            {/* <Image source={item.image} style={{ width: 50, height: 50, marginRight: 13, resizeMode: 'contain' }} /> */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={item.image} style={{ width: 50, height: 50, marginRight: 13, resizeMode: 'contain' }} />

            </View>
            <View style={{ alignSelf: 'flex-start' }}>
              <Label text={item.name} preset='small' />
              <Label text={`Claims: ${item.claims}`} preset='small' style={{ color: '#6A6A6A' }} />
            </View>
          </View>
        )}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 21 }}>
        <Label>Your Insured Cars</Label>
        <Label>See All</Label>

      </View>
      
      {/* Info Overlay Modal */}
      <InfoOverlayModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onContinue={handleModalContinue}
      />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
});
export default Home;

