import signUpUser from "./signup.service";

async function signupController(req, res) {
    try {
        const { username, email, password } = req.body;
        const user = await signUpUser(username, email, password);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(502).json({ mensagem: error.message });
    }

}

export default signupController;