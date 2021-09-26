import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <view>
                <Image
                    style={{
                        width: 100,
                        height: 100, 
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
            </view>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
});
