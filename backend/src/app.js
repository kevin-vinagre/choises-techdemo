import express from "express";
import signUpRouter from "./features/signup/signup.route.js";
import signInRouter from "./features/signin/signin.route.js";

const app = express();

const PORT = 8081;

app.use(express.json());

//Rotas das funcionalidades
app.use('/signup', signUpRouter);
app.use('/signin', signInRouter);

app.listen(PORT, () => {
    console.log(`servidor iniciado em http://localhost:${PORT}`);
});