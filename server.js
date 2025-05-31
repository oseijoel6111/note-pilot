import app from './app.js'
import {ENV} from './config/env.js'

// start server
app.listen(ENV.PORT, ()=>{
    console.log(`🚀 Server started on http://localhost:${ENV.PORT}`)
})