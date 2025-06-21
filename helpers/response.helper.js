

export const successResponse = (response, statusCode, message, data = {}) => {
    response.status(statusCode).json(
        {
            status: 'success',
            code: statusCode,
            message,
            data
        })
}

export const errorResponse = (response, statusCode, message, data = {}) => {
    response.status(statusCode).
        json({
            status: 'error',
            code: statusCode,
            message,
            data
        })
}