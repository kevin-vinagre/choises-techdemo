import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function Navbar({ logoImg, itens, navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
                resizeMode="contain"></Image>
            {
                itens.map((item, index) => (
                    <Pressable
                        key={index}
                        onPress={() => { navigation.navigate(item.pageName) }}
                        style={styles.linkbox}>
                        <Text style={styles.linktext}>{item.label}</Text>
                    </Pressable>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: "#3383c4",
        borderRadius: 8,
        marginTop: 40,
    },
    logo: {
        width: 100,
        height: 50,
        padding: 4
    },
    linkbox: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    linktext: {
        color: "#FFFFFF",
        fontSize: 14,
    },
});

export default Navbar