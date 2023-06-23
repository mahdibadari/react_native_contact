import { View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import { useState} from 'react';
import { Stack, useRouter} from 'expo-router';

import { COLORS, icons, images, SIZES} from '../constants';
import { ScreenHeaderBtn, Welcome, Contact, HomeFooter} from '../components';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.microsoft} dimension="100%"/>
                    ),
                    headerTitle:""
                }}
            />             

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome>

                    </Welcome>
                    <Contact/>                   
                </View>
            </ScrollView>
            
            <HomeFooter onPress={() => router.push(`/contact-update/${item.id}`)} />
        </SafeAreaView>
    )
}

export default Home;