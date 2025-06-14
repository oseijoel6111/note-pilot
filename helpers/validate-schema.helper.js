export const validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body)
            return next()
        } catch (error) {
           res.send({error: 'Error'})
        }
    }
}