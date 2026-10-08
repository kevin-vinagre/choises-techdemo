import React from "react";
import { View } from "react-native";
import Navbar from "../../../components/Navbar.component";
import SignUpForm from "../../../components/SignUpForm.component";

function HomePage() {
    return (
        <View>
            <Navbar
                itens={[
                    { label: "HOME", link: "http://localhost" },
                    { label: "google", link: "https://google.com" },
                    { label: "github", link: "https://github.com" },
                ]}
            />
            <SignUpForm></SignUpForm>
        </View>
    );
}

export default HomePage