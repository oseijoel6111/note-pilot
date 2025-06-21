import pino from 'pino'

export const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: "SYS:standard",
             ignore: "pid,hostname"
        }
    }
})

// Success
// {
//  status: "success",
//  code: ""
//  message: "What happened",
//  data: {

// }
// }



// Error
// {
//  status: "error",
//  "code": ""
//  message: "What happened",
//  data: {
	
// }

// }