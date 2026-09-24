import express from "express";
import signUpUser from "./features/signup/signup.service.js";

const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        "message": "raiz funcional"
    });
});

app.get("/list-user", (req, res) => {
    res.json({
        "message": "area do usuario"
    });
});

app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    res.json({
        "message": {
            "primeira": "usuario cadastrado",
            "segunda": "usuario adicionado"
        },
        "username": username,
        "password": password
    });
});

app.post("/signup", async (req, res) => {

    try {
        const { username, email, password } = req.body;
        const user = await signUpUser(username, email, password);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(502).json({ mensagem: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`servidor iniciado em http://localhost:${PORT}`);
});