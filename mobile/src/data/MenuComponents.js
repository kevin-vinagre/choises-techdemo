const fucapi_logo = require("../../assets/logo.png")
const MenuComponents = {
    "naologado": {
        logoImg: fucapi_logo,
        itens:
            [
                { label: "HOME", pageName: "Home", type: "text" },
                { label: "Sign UP", pageName: "SignUp", type: "text" },
                { pageName: "SignInModal", type: "icon", icon: require("../../assets/signin_icon.png") },
            ],
    },
    "logado": {
        logoImg: fucapi_logo,
        itens: [
            { label: "Profile", pageName: "SignUp", type: "Text" },
        ],
    }
}

export { MenuComponents }