import express from "express";
import signUpUser from "./features/signup/signup.service.js";
import signUpRouter from "./features/signup/signup.route.js";

const app = express();

const PORT = 8081;

app.use(express.json());

//Rotas das funcionalidades
app.use('/signup', signUpRouter);

app.listen(PORT, () => {
    console.log(`servidor iniciado em http://localhost:${PORT}`);
});