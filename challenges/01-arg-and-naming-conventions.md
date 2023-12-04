# 01 - Use a generic to get the function argument type

`logArgAndReturn` is a simple function that returns its given argument with the
side effect of logging it to the console.

```typescript
const logArgAndReturn = (arg: unknown) => {
    console.log('argument: ', arg)
    return arg
}

logArgAndReturn('a') // "a"
logArgAndReturn(1) // 1
logArgAndReturn(undefined) // undefined
```

It currently uses the `unknown` type for `arg`, meaning TypeScript can't ensure type
safety on the returned value. Hover over the warnings in your IDE to get a clear picture of
the issue.

-   We could type `arg` as `any` but the compiler will error in a less
    meaningful way and the runtime code will error.

-   We could type out all possible `arg` types but that would be highly laborious.

## Task A

Try using a generic so TypeScript can infer the `arg` type and clear the warnings.
Once passing, hover over the variable types to view improved code suggestions in your
IDE. https://www.typescriptlang.org/docs/handbook/2/generics.html

## Task B

Just like in JavaScript, generics variables names are chosen by the developer. A common convention is single letters in alphabetical order (`T`, `U`, `V`, `W`) with abbreviations like (`K`, `V`) for `Key`, `Value`.

Some people find this clean, others find it hard to read and prefer more readable variable names such as `Type`, `Response`, `Key`, `Value`.

Your generics variable naming conventions should conform to whatever works best for you and your team. If, like me, you prefer to let the experts decide - here's an article from Stefan Baumgartner:

https://fettblog.eu/tidy-typescript-name-your-generics/

Have a think about your generic variable name, should it be `T`, `Type` or something else?

## Pass Conditions

1. `logAndReturnArg` infers argument type with a generic
1. Generic variable name has been carefully considered
1. Code executes without TypeScript warnings
