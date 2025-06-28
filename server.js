import app from './app.js'
import { ENV, dbConnection } from './config/index.js'
import { logger } from './utils/logger.util.js'

// start server
(async () => {
    try {
        await dbConnection.authenticate()
        console.log('Database started')
        app.listen(ENV.PORT, () => {
            console.log(`🚀 Server started on http://localhost:${ENV.PORT}`)
        })
    } catch (error) {
        logger.error(error)
    }
})()