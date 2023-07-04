import { getUserByUsername } from "../../db/users"
import bcrypt from 'bcrypt'
import { generateTokens, sendRefreshToken } from '../../utils/jwt'
import { userTransformer } from "../../transformers/user"
import { createRefreshToken } from "../../db/refreshTokens"
import { sendError } from 'h3'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { username, password } = body

    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid Params"
        }))
    }

    const user = await getUserByUsername(username)

    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid Username or Password"
        }))
    }

    const passwordMatches = await bcrypt.compare(password, user.password )

    if(!passwordMatches){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid Username or Password"
        }))
    }

    const { accessToken, refreshToken } = generateTokens(user)

    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    sendRefreshToken(event, refreshToken)

    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
})

