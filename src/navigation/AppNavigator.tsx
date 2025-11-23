import CarBottom from '@/assets/images/svg/CarBottom';
import Explore from '@/assets/images/svg/Explore';
import HomeBottom from '@/assets/images/svg/HomeBottom';
import Query from '@/assets/images/svg/Query';
import Home from '@/screens/Home/Home';
import PersonalInfo from '@/screens/PersonalInfo/PersonalInfo';
import Quote from '@/screens/Quote/Quote';
import VehicleDetails from '@/screens/VehicleDetails/VehicleDetails';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={Home} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      <Stack.Screen name="Quote" component={Quote} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarIcon: ({ color, size }) => <HomeBottom size={size} color={color} />,
      }} />
      <Tab.Screen name="Insurance" component={Home} options={{
        tabBarIcon: ({ color, size }) => <CarBottom size={size} color={color} />,
      }} />
      <Tab.Screen name="Profile" component={Home} options={{
        tabBarIcon: ({ color, size }) => <Explore size={size} color={color} />,
      }} />
      <Tab.Screen name="Exlore" component={Home} options={{
        tabBarIcon: ({ color, size }) => <Query size={size} color={color} />,
      }} />
    </Tab.Navigator>
  );
}

export default MyTabs