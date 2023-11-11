# reflection ![tests](https://github.com/nichoth/reflection/actions/workflows/nodejs.yml/badge.svg)

Trying [Reflect](https://hello.reflect.net/add-to-existing)

Created with
```
npx @rocicorp/reflect@latest init
```

## demo
Deployment works. See a live demo at https://nichoth-reflection.netlify.app/.

Open a second browser window (private, so you're not using the same local storage), and see that the state is synchronized in both windows.

## develop

Start the local dev environment:
```
npx reflect dev
```

Start the UI local server:
```
npx vite
```

Start both concurrently:
```
npm start
```

## deploy
Deploy the Reflect server to reflect.net:
```
npx reflect publish
```

*or*

```
npm run deploy
```

> Note that you will have to change the server in the Reflect constructor to point to your remote Reflect server (i.e., `https://my-app-my-user.reflect-server.net`).

We do this [in ./src/state](./src/state.ts#L19)
```js
const serverURL = (import.meta.env.DEV ?
    'http://localhost:8080' :
    'https://reflection-nichoth.reflect-server.net/')
```

The frontend is automatically deployed on any git push via Netlify.


## queries
[hello.reflect.net/subscriptions#queries](https://hello.reflect.net/subscriptions#queries)

> The function that is passed to subscribe is called a query

So in our example,
```js
reflect.subscribe(tx => tx.get('count'), (count) => {
    console.log('subscription', count)
    state.reflection.value = (count as number ?? 0)
})
```

> to subscribe to all incomplete todos:
```js
r.subscribe(
    async (tx) => {
        const todos = await tx.scan({ prefix: `/todo/` }).toArray();
        return todos.filter((t) => !t.complete);
    },
    (todos) => {
        // render todos
    }
);
```
