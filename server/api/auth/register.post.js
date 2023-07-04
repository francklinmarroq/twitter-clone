import { createUser } from '../../db/users.js'
import { userTransformer } from '../../transformers/user.js'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { username, name, email, password, passwordConfirmation } = body

    if (!username || !name || !email || !password || !passwordConfirmation) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid Parameters' }))
    }

    if (password !== passwordConfirmation) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Passwords do not match' }))
    }

    const userData = {
        username,
        name,
        email,
        password,
        profileImage: 'https://picsum.photos/200/200'
    }

    const user = await createUser(userData)
    return {
        body: userTransformer(user)
    }
})