import React from "react";
import { View } from "react-native";
import Navbar from "../../../components/Navbar.component";
import SignUpForm from "../../../components/SignUpForm.component";

function HomePage({ navigation }) {
    return (
        <View>
            <Navbar
                logoImg={require("../../../../assets/logo.png")}
                itens={[
                    { label: "HOME", pageName: "Home" },
                    { label: "Sign In", pageName: "SignIn" },
                    { label: "Sign UP", pageName: "SignUp" },
                ]}
                navigation={navigation}
            />
        </View>
    );
}

export default HomePage