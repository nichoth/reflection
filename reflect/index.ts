import type { ReflectServerOptions } from '@rocicorp/reflect/server'
import { M, mutators } from './mutators.js'

function makeOptions (): ReflectServerOptions<M> {
    return {
        authHandler,
        mutators,
    }
}

export { makeOptions as default }

function authHandler (auth:string, roomID:string) {
    console.log('**auth**', auth)
    console.log('**room id**', roomID)
    return { userID: 'alice' }
    // const token = parseHeader(auth)
    // console.log('**token**', token)
    // // const isOk = verifyParsed(token)
    // // if (!isOk) throw new Error('Bad token')

    // return { userID: token.author }
}
