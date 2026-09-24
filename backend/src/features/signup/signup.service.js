import bcrypt from 'bcryptjs'
import { validateByEmail, validateByUsername, createUser } from '../../shared/users/repositories/users.repository'


async function signUpUser(username, email, password) {
    if (!username || !email || !password) {
        const error = new Error("Campos nome de usuario, email e senha são obrigatorios");
        error.statusCode = 500;
        throw error;
    }
    if (await validateByUsername(username)) {
        const error = new Error("Nome de usuario ja cadastrado");
        error.statusCode = 409;
        throw error;
    }
    if (await validateByEmail(email)) {
        const error = new Error("Email ja registrado");
        error.statusCode = 409;
        throw error;
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser({
            username,
            email,
            password: hashedPassword
        });
        return user;
    } catch (issue) {
        const error = new Error("Falha ao comunicar com banco de dados");
        error.statusCode = 509;
        throw error;
    }
}


export default signUpUser;