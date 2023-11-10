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

The frontend is automatically deployed on any git push via Netlify.
