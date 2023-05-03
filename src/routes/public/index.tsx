import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

import { Home, SignIn } from '../../pages/public';
import { ITabPublicNavigator } from './@types';
import { LogoHeader } from '../../components';
import { StackSignUp } from './stacks';

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
                borderBottomRightRadius: 5,
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
        <Tab.Screen
            name="SignInTab"
            component={SignIn}
            options={{
                tabBarIcon: ({ color, focused, size }) => {
                    if (focused) {
                        return (
                            <Ionicons name="log-in" color="#0A71B6" size={size} />
                        );
                    }

                    return (
                        <Ionicons
                            name="log-in-outline"
                            color={color}
                            size={size}
                        />
                    );
                },
            }}
        />
        <Tab.Screen
            name="SignUpTab"
            component={StackSignUp}
            options={{
                tabBarIcon: ({ color, focused, size }) => {
                    if (focused) {
                        return (
                            <FontAwesome name="user-plus" color="#0A71B6" size={size} />
                        );
                    }

                    return (
                        <AntDesign
                            name="adduser"
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
