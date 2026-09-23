import prisma from "../../../core/database/prisma.client"


/**
 * Listagem de usuarios com campos id,username,status
 */
async function listUsers() {
    return prisma.users.findMany({
        select: {
            id: true,
            username: true,
            status: true
        }
    });
}

/**
 * validar por usuario e senha
 */
async function validateUser(username, password) {
    const user = prisma.users.findFirst({
        where: {
            username,
            password
        }
    });

    return !!user;
}

/**
 * função de criar usuario
 */
async function createUser(data) {
    return prisma.users.create({
        data,
        select: {
            id: true,
            username: true,
            status: true
        }
    });
}

async function validateByEmail(email) {
    const user = prisma.users.findUnique({
        where: {
            email
        }
    });

    return !!user;
}
async function validateByUsername(username) {
    const user = prisma.users.findUnique({
        where: {
            username
        }
    });

    return !!user;
}

export {
    listUsers,
    validateUser,
    createUser,
    validateByEmail,
    validateByUsername
}
