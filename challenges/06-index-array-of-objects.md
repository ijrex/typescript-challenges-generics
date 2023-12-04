# 06- Indexing an array of objects

`mapAllPropFromArray` is an arbitary function that maps over an array of objects and returns an array with a chosen key.

```typescript
mapAllPropFromArray(
    [
        { id: 123, description: 'example1' },
        { id: 456, description: 'example2' },
        { id: 789, description: 'example3' },
    ],
    'description'
)
// ['example1', 'example2', 'example3']
```

Looking at the challenge file - we have TypeScript warnings in the function definition, since TypeScript can't safely iterate over an `unknown` type.

Generic definitions will help TypeScript link the `object` and `object key` function parameters together, providing auto-suggestions for existing prop keys, or warnings for non-existant ones.

Hard-coded type definitions from previous tasks won't suffice here, we need Generic Constraints:\
https://www.typescriptlang.org/docs/handbook/2/generics.html

## Task

Create a TypeScript generic for `mapAllPropFromArray` that passes/fails assertions as required.

## Pass Conditions

1. Task complete
1. TypeScript warnings on 'warning scenarios only
