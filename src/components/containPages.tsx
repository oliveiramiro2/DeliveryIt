import React from 'react';
import { ScrollView, View } from 'react-native';

export const ContainPages: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <View className="bg-black flex-1 pl-2 pr-2 pt-1">
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    </View>
);
