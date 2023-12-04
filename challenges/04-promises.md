# 04- Typing API promise responses

This project has an API that returns a list of characters and statistics from the sitcom Spaced.

**> Run the below command in your terminal to start the server:**

```bash
$ npx ts-node ./server/server.ts

# http://localhost:3000/characters
# http://localhost:3000/episodes
```

`fetchFromAPIEndpoint` is a general function that returns the response and extracted JSON from http endpoints.

Without proper typing however, TypeScript can't extrapolate information about the returned data shape; the subsequent `allAges` and `allGenders` expressions warn because we can't perform precise actions on `unknown` objects.

A generic for `fetchFromAPIEndpoint` will help us out here, enabling us to type the JSON response for separate API calls and safely work with the retuned data.

## Task A

Create types for both `/character` and `/episodes` API endpoints. You can view directly in your web browser, or as logged API responses in a new terminal window in your console while the server is running. _(Or if you really want to break the illusion, just see the prepared responses in `../server/server.ts`)._

```
$ npx ts-node ./challenges/04-promises.ts
```

Create types for the `characters` and `episodes` responses.

```typescript
type Character = {
    /* [...] */
}
type Episodes = {
    /* [...] */
}
```

## Task B

Add a TypeScript generic parameter onto the `fetchFromAPIEndpoint` function. Instead of `unknown`, the `res.json()` result should be customisable.

Apply your generic wherever `fetchFromAPIEndpoint` gets called with the newly created `Character[]` and `Episodes[]` types. The syntax will look something like this:

```typescript
fetchFromAPIEndpoint<ResponseType>('/endpoint')
```

## Pass Conditions

1. Task A & B complete
1. Code executes with no TypeScript warnings
