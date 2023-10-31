import { Signal, signal } from '@preact/signals'
import Route from 'route-event'
import { Reflect } from '@rocicorp/reflect/client'
import { mutators } from '../reflect/mutators.js'

/**
 * Setup any app state
 *   - routes
 *   - reflect
 */
export function State ():{
    route:Signal<string>;
    reflection:Signal<number>;
    _reflect:InstanceType<typeof Reflect>
    _setRoute:(path:string)=>void;
} {  // eslint-disable-line indent
    const onRoute = Route()

    const serverURL = (import.meta.env.DEV ?
        'http://localhost:8080' :
        'https://reflection-nichoth.reflect-server.net/')

    const r = new Reflect({
        userID: 'alice',
        roomID: 'myRoom',
        server: serverURL,
        mutators,
    })

    const state = {
        _reflect: r,
        reflection: signal<number>(0),
        _setRoute: onRoute.setRoute.bind(onRoute),
        route: signal<string>(location.pathname + location.search)
    }

    r.subscribe(
        (tx) => tx.get('count'),
        (count) => {
            console.log('subscription', count)
            state.reflection.value = (count as number ?? 0)
        }
    )

    // set the app state to match the browser URL
    onRoute((path:string) => {
        // for github pages
        const newPath = path.replace('/reflection/', '/')
        state.route.value = newPath
    })

    return state
}

/**
 * Our state update functions only call methods on the reflect object. We don't
 * set our UI state manuallyThe
 * reflect object has methods from the mutators that we passed in earlier.
 *
 * The UI hears the state change because we subscribed to any changes in
 * reflect's state in the constructor.
 */
export function Increase (state:ReturnType<typeof State>) {
    console.log('increase', state)
    state._reflect.mutate.increment({ key: 'count', delta: 1 })
}

export function Decrease (state:ReturnType<typeof State>) {
    state._reflect.mutate.decrement({ key: 'count', delta: 1 })
}
