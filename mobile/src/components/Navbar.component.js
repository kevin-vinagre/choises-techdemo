import React from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";

function Navbar({ itens, navigation }) {
    return (
        <View style={styles.container}>
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
        backgroundColor: "#000000",
        borderRadius: 8,
    },
    linkbox: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    linktext: {
        color: "#FFFFFF",
        fontSize: 16,
    },
});

export default Navbar