import { verifyToken } from '../utils.js'

export const authenticated = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.sendStatus(401)
    }

    try {
        const decoded = verifyToken(token)
        req.user = decoded
        return next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}
