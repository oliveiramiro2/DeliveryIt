import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import { View } from 'react-native';

import { LogoHeader } from '../../../components';
import { SignUp } from '../../../pages/public';
import { Business, Consumer } from '../../../pages/public/SignUp/components';
import { IStackSignUp } from '../@types';

const Stack = createNativeStackNavigator<IStackSignUp>();

export const StackSignUp = () => (
    <Stack.Navigator
        screenOptions={{
            header: (props) => (
                <MotiView
                    from={{ height: 0 }}
                    animate={{ height: 60 }}
                    delay={200}
                    className="flex flex-row justify-between items-center ml-2"
                >
                    {/* eslint-disable-next-line */}
                    {props.back !== undefined && (
                        <MotiPressable
                            from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'timing', delay: 300, duration: 250 }}
                            /* eslint-disable-next-line */
                            onPress={() => props.navigation.goBack()}
                        >
                            <Ionicons name="arrow-back" size={28} />
                        </MotiPressable>
                    )}
                    <View />
                    <LogoHeader time={700} />
                </MotiView>
            ),
        }}
    >
        <Stack.Screen name="SignUpStack" component={SignUp} />
        <Stack.Screen name="ConsumerStack" component={Consumer} />
        <Stack.Screen name="BusinessStack" component={Business} />
    </Stack.Navigator>
);
