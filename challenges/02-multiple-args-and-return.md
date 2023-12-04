# 02 - Use a generic to get multiple function argument types & declare return type

`putArgsIntoTuple` is another simple function that returns its arguments in a tuple with the side-effect of logging to the console.

```typescript
const putArgsIntoTuple = (arg1: unknown, arg2: unknown) => {
    console.log('arguments: ', arg1, arg2)
    return [arg1, arg2]
}

putArgsIntoTuple(1, 2) // [1,2]
putArgsIntoTuple('foo', 'bar') // ["foo", "bar"]
putArgsIntoTuple('foo', 1) // ["foo", 1]
```

Once again, it uses the `unknown` type for the function args, preventing TypeScript from inferring the returned tuple types.

## Task

Building on skills applied in the previous task, assign both args with a TypeScript generic to clear the warnings.

TypeScript needs more info than just the args to effectively infer the returned tuple however, you'll also need to define the return type with your generics included.

https://www.typescriptlang.org/docs/handbook/2/generics.html

## Pass Conditions

1. `putArgsIntoArray` infers argument types with a generic
1. `putArgsIntoArray` infers return tuple types from generics
1. Code executes with no TypeScript warnings
