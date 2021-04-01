import * as hpp from 'hpp'
import * as express from 'express'
import * as helmet from 'helmet'
import * as http from 'http'
import config from './config/config'
import logging from './config/logging'


const NAMESPACE: string = 'Server'
const api = express()

//Looging request
api.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP: [${req.socket.remoteAddress}]`)

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP: [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`)
    })

    next()
})

//Middlewear
api.use(express.urlencoded({extended: false}))
    .use(express.json())
    .use(helmet())
    .use(hpp())

//Rules of our API (CORS) Cross-origin resource sharing
api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT')
        return res.status(200).json({})
    }

    next()
})

//Routes

//Error Handling
api.use((req, res, next) => {
    const error = new Error('not found!')

    return res.status(404).json({
        message: error.message
    })
})

//Create Server
const httpServer = http.createServer(api)
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`))