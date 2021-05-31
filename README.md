This sample app demonstrate a bug in testcafe

# Start up

Build and run app (http://localhost:8080):

```
yarn install
yarn dev
```

Start the sample test:

```
yarn test
```

# Application overview

It's an SPA where each route requires user to be logged in.
There are 2 routes:

- home page ("/")
- "some route" ("/some-route")

There is also a login route ("/login") which can be accessed without being logged in.

## Authentication logic

When user access a route without being logged in. The app saves the requested route in localStorage ("post_login_redirect" key) then redirect the user to "/login".

Once the login is done, the app checks if there's a "post_login_redirect" key in storage and redirects the user to it. If there is no such key, the user is redirected to "/"

See [src/routes/login.tsx](src/routes/login.tsx) and [src/guard.tsx](src/guard.tsx)

# Reproducing the bug

OK: Launch the app, go to "/some-route", you should be catched and redirected to "/login". Click the login button, you should be redirected to "/some-route"

KO: Launch the test that does exactly the same using a Role, it will fail
