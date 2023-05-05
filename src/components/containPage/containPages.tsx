import React from 'react';
import { ScrollView, View } from 'react-native';

export const ContainPages: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <View style={{ flex: 1 }} className="bg-black flex-1 pl-2 pr-2 pt-6">
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
        >
            {children}
        </ScrollView>
    </View>
);
