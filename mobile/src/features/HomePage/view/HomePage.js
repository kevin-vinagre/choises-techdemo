import React from "react";
import { View } from "react-native";
import Navbar from "../../../components/Navbar.component";
import SignUpForm from "../../../components/SignUpForm.component";
import { MenuComponents } from "../../../data/MenuComponents";
function HomePage({ navigation }) {
    return (
        <View>
            <Navbar
                logoImg={MenuComponents["naologado"].logoImg}
                itens={MenuComponents["naologado"].itens}
                navigation={navigation}
            />
        </View>
    );
}

export default HomePage