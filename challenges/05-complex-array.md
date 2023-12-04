# 05- Fine-tuning array type definitions

`errorIfFirstItemIsUndefined` takes an array as a parameter and throws an error if the first indexed item is nullable.

```typescript
checkFirstItemOfArrayIsDefined([1, 2, 3]) // pass
checkFirstItemOfArrayIsDefined(['a']) // pass
checkFirstItemOfArrayIsDefined([0]) // pass

checkFirstItemOfArrayIsDefined([]) // Error
checkFirstItemOfArrayIsDefined([null]) // Error
checkFirstItemOfArrayIsDefined([undefined]) // Error
```

It would be useful to capture this error scenario as a TypeScript warning during development.

For this task, we need to take a fresh look at TypeScript's [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) and be familiar with [rest parameters and arguments](https://www.typescriptlang.org/docs/handbook/utility-types.html).

## Task

Create a generic for `errorIfFirstItemIsUndefined` that matches the pass/fail assertions below the function.

## Pass Conditions

1. Task complete
1. TypeScript warnings on 'warning scenarios only
