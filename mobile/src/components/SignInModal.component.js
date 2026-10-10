import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function SignInModal(visible, onClose, mode, onSubmit) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isSignIn = mode === "signin"

    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}>
            <View style={style.overlay}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}>
                </TextInput>
                <TextInput
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry>
                </TextInput>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => onSubmit({ email, password })}>
                    <Text
                        style={style.buttonlabel}
                    >{
                            isSignIn ? "FazerLogin" : "Cadastrar"
                        }</Text>
                </TouchableOpacity>

            </View>

        </Modal>
    );

}

const style = StyleSheet.create({

});

export default SignInModal