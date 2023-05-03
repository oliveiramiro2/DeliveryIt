import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../../../pages/public';
import { Business, Consumer } from '../../../pages/public/SignUp/components';
import { IStackSignUp } from '../@types';

const Stack = createNativeStackNavigator<IStackSignUp>();

export const StackSignUp = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUpStack" component={SignUp} />
        <Stack.Screen name="ConsumerStack" component={Consumer} />
        <Stack.Screen name="BusinessStack" component={Business} />
    </Stack.Navigator>
);
