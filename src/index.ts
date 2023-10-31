import { html } from 'htm/preact'
import { render } from 'preact'
import {
    Primary as ButtonOutlinePrimary,
    ButtonOutline
} from '@nichoth/components/htm/button-outline'
import { State, Increase, Decrease } from './state.js'
import Router from './routes/index.js'
import '@nichoth/components/button-outline.css'
import './style.css'

const router = Router()
const state = State()

export function Example () {
    const match = router.match(state.route.value)
    const ChildNode = match.action(match, state.route)

    if (!match) {
        return html`<div className="404">
            <h1>404</h1>
        </div>`
    }

    function plus (ev) {
        ev.preventDefault()
        Increase(state)
    }

    function minus (ev) {
        ev.preventDefault()
        Decrease(state)
    }

    return html`<div>
        <h1>hello</h1>

        <ul>
            <li><a href="/aaa">aaa</a></li>
            <li><a href="/bbb">bbb</a></li>
            <li><a href="/ccc">ccc</a></li>
        </ul>

        <div>
            <div>count: ${state.reflection.value}</div>
            <ul class="count-controls">
                <li>
                    <${ButtonOutlinePrimary} onClick=${plus}>
                        plus
                    </${ButtonOutline}>
                </li>
                <li>
                    <${ButtonOutline} onClick=${minus}>
                        minus
                    </${ButtonOutline}>
                </li>
            </ul>
        </div>

        <${ChildNode} />
    </div>`
}

render(html`<${Example} />`, document.getElementById('root')!)
