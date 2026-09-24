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
});

app.listen(PORT, () => {
    console.log(`servidor iniciado em http://localhost:${PORT}`);
});