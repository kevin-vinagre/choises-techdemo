import prisma from "../../../core/database/prisma.client"

/**
 * Procurando usuario por username 
 */
async function findByUserName(username) {
    prisma.users.findUnique({
        where: {
            username
        }
    });
}

async function createUser(data) {
    return prisma.users.create({
        data
    });
}
