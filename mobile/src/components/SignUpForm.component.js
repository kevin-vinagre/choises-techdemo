import React, { useState } from "react";
import { TextInput, View } from "react-native";

function SignUpForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View>
            <TextInput
                placeholder="Nome de usuario"
                value={username}
                onChangeText={setUsername}
            >
            </TextInput>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}>

            </TextInput>
        </View>
    );
}

export default SignUpForm