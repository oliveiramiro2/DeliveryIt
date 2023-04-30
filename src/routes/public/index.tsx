import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Home } from '../../pages';
import { ITabPublicNavigator } from './@types/publicRoutes';
import { LogoHeader } from '../../components';

const Tab = createBottomTabNavigator<ITabPublicNavigator>();

const RoutesPublicDeliveryIt = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#190506',
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 2,
                borderBottomWidth: 2,
                borderTopColor: '#0A71B6',
                borderBottomColor: '#EAF2F0',
            },
            headerStyle: {
                borderBottomWidth: 2,
                borderBottomColor: '#0A71B6',
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            },
            headerRight: () => <LogoHeader />,
            headerTitle: '',
        }}
    >
        <Tab.Screen
            name="HomeTab"
            component={Home}
            options={{
                tabBarIcon: ({ color, focused, size }) => {
                    if (focused) {
                        return (
                            <Ionicons name="home" color="#0A71B6" size={size} />
                        );
                    }

                    return (
                        <Ionicons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    );
                },
            }}
        />
    </Tab.Navigator>
);

export default RoutesPublicDeliveryIt;
