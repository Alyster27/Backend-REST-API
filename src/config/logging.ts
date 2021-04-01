const getCurrentDateAndTime = ():string => {
    return new Date().toISOString()
}

const info = (namespace: string, message: string, object?: any) => {
    switch (true) {
        case (object):
            console.log(`[${getCurrentDateAndTime()}] [INFO] [${namespace}] ${message}`, object)
            break;
    
        default:
            console.log(`[${getCurrentDateAndTime()}] [INFO] [${namespace}] ${message}`)
            break;
    }
}

const warn = (namespace: string, message: string, object?: any) => {
    switch (true) {
        case (object):
            console.warn(`[${getCurrentDateAndTime()}] [WARN] [${namespace}] ${message}`, object)
            break;
    
        default:
            console.warn(`[${getCurrentDateAndTime()}] [WARN] [${namespace}] ${message}`)
            break;
    }
}

const error = (namespace: string, message: string, object?: any) => {
    switch (true) {
        case (object):
            console.error(`[${getCurrentDateAndTime()}] [ERROR] [${namespace}] ${message}`, object)
            break;
    
        default:
            console.error(`[${getCurrentDateAndTime()}] [ERROR] [${namespace}] ${message}`)
            break;
    }
}

const debug = (namespace: string, message: string, object?: any) => {
    switch (true) {
        case (object):
            console.debug(`[${getCurrentDateAndTime()}] [DEBUG] [${namespace}] ${message}`, object)
            break;
    
        default:
            console.debug(`[${getCurrentDateAndTime()}] [DEBUG] [${namespace}] ${message}`)
            break;
    }
}

export default {
    info,
    warn,
    error,
    debug
}