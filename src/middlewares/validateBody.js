/**
 * Validates the request body against a given schema and calls the next middleware if the validation passes.
 *
 * @param {Object} schema - The schema to validate the request body against.
 * @return {Function} - The middleware function that validates the request body and calls the next middleware if the validation passes.
 */
export const validateBody = (schema) => async (req, res, next) => {
    const { error, value } = schema.validate(req.body)
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    req.body = value
    next()
}
