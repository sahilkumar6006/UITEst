import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import FormInput from '@/components/FormInput';
import UpgradeScreenLayout from '@/components/UpgradeScreenLayout';
import { useNavigation } from '@react-navigation/native';
import Colors from '@/styles/colors';
import Plus from '@/assets/images/svg/Plus';
import { images } from '@/constants/images';

const VehicleDetails = () => {
  const navigation = useNavigation<any>();
  const [carName, setCarName] = useState('Toyota Yaris');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('Toyota Yaris');

  const steps = [
    { number: 1, label: 'Personal Info', isActive: false, isCompleted: true },
    { number: 2, label: 'ID/Vehicle Details', isActive: true, isCompleted: false },
    { number: 3, label: 'Quote', isActive: false, isCompleted: false },
  ];

  const vehicles = [
    { id: '1', name: 'Toyota Yaris', year: '2008', selected: true, image: images.Car1 },
    { id: '2', name: 'Benz CL250', year: '2017', selected: false, image: images.Car2 },
  ];

  return (
    <UpgradeScreenLayout
      steps={steps}
      title="Upgrade to Comprehensive Motor Insurance Plan"
      description="Fill or Update your information and we'll get your vehicle covered in no time."
      onButtonPress={() => navigation.navigate('Quote')}
    >
      <View style={styles.idSection}>
        <View style={styles.idCard}>
          <View style={styles.idCardContent}>
            <Text style={styles.idLabel}>Driver's License/Dami-Benson</Text>
            <Text style={styles.idProgress}>87%</Text>
          </View>
        </View>
      </View>

      <View style={styles.vehicleSection}>
        <Text style={styles.sectionTitle}>Vehicle Information</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.vehicleList}>
          {vehicles.map((vehicle) => (
            <TouchableOpacity
              key={vehicle.id}
              style={[styles.vehicleCard, vehicle.selected && styles.vehicleCardSelected]}
              onPress={() => setSelectedVehicle(vehicle.name)}
            >
              <Image source={vehicle.image} resizeMode='contain' />
              <Text style={styles.vehicleName}>{vehicle.name}</Text>
              <Text style={styles.vehicleYear}>{vehicle.year}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addVehicleCard}>
            <Plus />
            <Text style={styles.addVehicleText}>Add New Car</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.formContainer}>
        <FormInput
          label="Car Name"
          value={carName}
          onChangeText={setCarName}
        />
        <FormInput
          label="License Number"
          value={licenseNumber}
          onChangeText={setLicenseNumber}
        />
      </View>
    </UpgradeScreenLayout>
  );
};

const styles = StyleSheet.create({
  idSection: {
    marginBottom: 30,
  },
  idCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    padding: 16,
  },
  idCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  idLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#828282',
    fontFamily: 'Poppins',
  },
  idProgress: {
    fontSize: 14,
    fontWeight: '400',
    color: '#828282',
    fontFamily: 'Poppins',
  },
  vehicleSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#201E1E',
    marginBottom: 16,
    fontFamily: 'Poppins',
  },
  vehicleList: {
    flexDirection: 'row',
  },
  vehicleCard: {
    width: 120,
    height: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  vehicleCardSelected: {
    borderWidth: 1,
    borderColor: '#F9A130',
  },
  vehicleImage: {
    width: 60,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginBottom: 8,
  },
  vehicleName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#201E1E',
    marginBottom: 4,
    fontFamily: 'Poppins',
  },
  vehicleYear: {
    fontSize: 12,
    fontWeight: '400',
    color: '#BDBDBD',
    fontFamily: 'Poppins',
  },
  addVehicleCard: {
    width: 120,
    height: 140,
    backgroundColor: '#F9A130',
    opacity: 0.1,
    borderRadius: 15,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F9A130',
    borderStyle: 'dashed',
  },
  addVehicleText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.light.primary,
    fontFamily: 'Poppins',
  },
  formContainer: {
    marginBottom: 30,
  },
});

export default VehicleDetails;

