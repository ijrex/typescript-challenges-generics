# 03- Simplifying types with utilities

The accompanying challenge presents a set of types for a company that sells products in their set of bespoke colours.

Somebody tried typing the data structures required for the company backend:

-   `BespokeDyeMixes` - ingredients to make dyes
-   `DyeStockStatus` - up-to-date stock info for dyes
-   `ColouredPens` - stock info for coloured pens they sell

They manually declared every product key on every object, resulting in code repetition and increased risk of human error:

```typescript
type BespokeDyeMixes = {
    SunsetOrange: BespokeDyeMixProperties
    CanaryYellow: BespokeDyeMixProperties
    EmeraldGreen: BespokeDyeMixProperties
    // [...]
}

type DyeStockStatus = {
    SunsetOrange: DyeStockStatusProperties
    CanaryYellow: DyeStockStatusProperties
    EmeraldGreen: DyeStockStatusProperties
    // [...]
}
```

Fortunately, there is a better way. TypeScript has us covered with its native utility functions.

## Task A

Using a TypeScript utility function, update the code so the colour options (`SunsetOrange`, `CanaryYellow`, `EmeraldGreen`, etc) are only declared once.

https://www.typescriptlang.org/docs/handbook/utility-types.html

## Task B

Create the type for a new product `PhoneCases`.

-   All colour options are available except `ChestnutBrown` and `CanaryYellow`
-   Properties are of type `ColouredProductProperties`

## Pass Conditions

1. Task A & B complete
1. Code executes with no TypeScript warnings
