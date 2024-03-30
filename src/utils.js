import jwt from 'jsonwebtoken'

/**
 * Generates a token using the provided payload.
 *
 * @param {Object} payload - The payload to be used for generating the token.
 * @return {string} The generated token.
 */
export const generateToken = (payload) => {
    const secret = process.env.SECRET_KEY
    if (!secret) throw new Error('Secret is not defined, please define me')
    return jwt.sign(payload, secret)
}

/**
 * Verifies a token using a JWT secret.
 *
 * @param {string} token - The token to be verified.
 * @return {object|string} - The decoded token if successful, or an error message if not.
 */
export const verifyToken = (token) => {
    const secret = process.env.SECRET_KEY
    if (!secret) throw new Error('Secret is not defined, please define me')
    return jwt.verify(token, secret)
}

/**
 * Standardizes the response format for API calls.
 *
 * @param {Object} res - The response object
 * @param {any} data - The data to be included in the response
 * @param {string} message - The message to be included in the response
 * @param {number} [status=200] - The status code for the response, defaults to 200
 * @return {Object} The standardized JSON response object
 */
export const standarizeResponse = (res, data, message, status = 200) => {
    return res.status(status).json({ data, message })
}
