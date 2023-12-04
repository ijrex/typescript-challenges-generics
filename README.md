# TypeScript Generic Challenges

**This project features a set of challenges to help developers get to grip with TypeScript generics.**

# Getting Started

```bash
$ npm i
```

_Node v18 or higher is recommended._

**Prerequisites:**

-   Working knowledge of JavaScript, Node.js & NPM
-   Basic knowledge of TypeScript types
-   VSCode with ESlint plugins

# Introduction

Generics greatly expand the reusability of functions and variables written with TypeScript. They remove the constraints of explicitly defined definitions (`string`, `number`, `object`, etc) without compromising type safety. Generics use the following syntax:

```typescript
function identity<Type>(arg: Type): Type {
    return arg
}
```

https://www.typescriptlang.org/docs/handbook/2/generics.html

A common use case for generics is API responses. Let's say we have a simple utility function that fetches different API endpoints from a URL:

```typescript
const fetchAPIData = async (endpoint: string): any => {
    return await fetch(`https://company.com${endpoint}`)
}
```

The utility function gets reused multiple times:

```typescript
const { users } = await fetchAPIData('/users')
const { ids } = await fetchAPIData('/ids')
```

How can we let TypeScript know that the response varies depending on the endpoint? If we hardcode the return type for `/users` into the `fetchAPIData` function definition then it can't be re-used to fetch `/ids`.

Fortunately, generics remediate this scenario (plus many more). With generics properly implimented the response can be assigned in-situ, making the code reusable and the function type safe.

```typescript
type UserResponse = {
    users: string[]
}
type IDsResponse = {
    ids: number[]
}

const { users } = fetchAPIData<UserResponse>('/users')
const { ids } = fetchAPIData<IDsResponse>('/ids')
```

# The Challenges

Challenges can be found in `./challenges`

The solutions are fairly simple (if you know how). The accompanying guides for each challenge describe tasks and where to research solutions.

Since they focus on developing with TypeScript, most challenges don't require the runtime environment. They should be executed with `ts-node` when required:

```bash
$ npx ts-node ./challenges/[CHALLENGE_NAME].ts
```

If you are really stuck, answers are available in `./answers`.

# Feedback

I hope you find these challenges interesting and useful. Please forward any feedback or comments: ijrexweb@gmail.com.
