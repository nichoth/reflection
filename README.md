# reflection ![tests](https://github.com/nichoth/reflection/actions/workflows/nodejs.yml/badge.svg)

Trying [Reflect](https://hello.reflect.net/add-to-existing)

Created with
```
npx @rocicorp/reflect@latest init
```

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

> Note that you will have to change the server in the Reflect constructor to point to your remote Reflect server (i.e., https://my-app-my-user.reflect-server.net).
