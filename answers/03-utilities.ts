////////////////////////////////////////////////////
// 03 - Simplifying types with utilities
////////////////////////////////////////////////////

/* Edit between these lines only >>>>>>>>>>>>>>>>>>> */

type BespokeDyeColours =
    | 'SunsetOrange'
    | 'CanaryYellow'
    | 'EmeraldGreen'
    | 'CobaltBlue'
    | 'LemonadePink'
    | 'ChestnutBrown'
    | 'MidnightBlack'
    | 'SmokeWhite'

type BespokeDyeMixProperties = Array<{
    component: string
    quantityInLtrs: number
}>

type BespokeDyeMixes = Record<BespokeDyeColours, BespokeDyeMixProperties>

type DyeStockStatusProperties = {
    batchDate: Date
    quantityAvailableInLtrs: number
}

type DyeStockStatus = Record<BespokeDyeColours, DyeStockStatusProperties>

type ProductProperties = {
    stock: number
    priceInGbp: number
    userRating: 1 | 2 | 3 | 4 | 5
}

type ColouredPens = Record<BespokeDyeColours, ProductProperties>

type PhoneCases = Record<
    Exclude<BespokeDyeColours, 'ChestnutBrown' | 'CanaryYellow'>,
    ProductProperties
>

/* <<<<<<<<<<<<<<<<<<<< Edit between these lines only */

const dyeMixes: BespokeDyeMixes = {
    SunsetOrange: [
        { component: 'Conchineal', quantityInLtrs: 0.2 },
        { component: 'mixing agent', quantityInLtrs: 0.8 },
    ],
    CanaryYellow: [
        { component: 'Tartrazine', quantityInLtrs: 0.3 },
        { component: 'mixing agent', quantityInLtrs: 0.7 },
    ],
    EmeraldGreen: [
        { component: 'Goldenrod', quantityInLtrs: 0.5 },
        { component: 'mixing agent', quantityInLtrs: 0.5 },
    ],
    CobaltBlue: [
        { component: 'Indigo', quantityInLtrs: 0.2 },
        { component: 'Woad', quantityInLtrs: 0.3 },
        { component: 'mixing agent', quantityInLtrs: 0.5 },
    ],
    LemonadePink: [
        { component: 'Rubia tinctorum', quantityInLtrs: 0.2 },
        { component: 'mixing agent', quantityInLtrs: 0.8 },
    ],
    ChestnutBrown: [
        { component: 'Coffee grounds', quantityInLtrs: 0.2 },
        { component: 'mixing agent', quantityInLtrs: 0.8 },
    ],
    MidnightBlack: [
        { component: 'Charcoal', quantityInLtrs: 0.5 },
        { component: 'mixing agent', quantityInLtrs: 0.5 },
    ],
    SmokeWhite: [
        { component: 'Charcoal', quantityInLtrs: 0.1 },
        { component: 'mixing agent', quantityInLtrs: 0.9 },
    ],
}

const dyeStockStatus: DyeStockStatus = {
    SunsetOrange: {
        batchDate: new Date('2023-03-17'),
        quantityAvailableInLtrs: 102,
    },
    CanaryYellow: {
        batchDate: new Date('2022-02-01'),
        quantityAvailableInLtrs: 51,
    },
    EmeraldGreen: {
        batchDate: new Date('2023-04-22'),
        quantityAvailableInLtrs: 162,
    },
    CobaltBlue: {
        batchDate: new Date('2023-12-07'),
        quantityAvailableInLtrs: 202,
    },
    LemonadePink: {
        batchDate: new Date('2023-05-19'),
        quantityAvailableInLtrs: 98,
    },
    ChestnutBrown: {
        batchDate: new Date('2022-10-05'),
        quantityAvailableInLtrs: 50,
    },
    MidnightBlack: {
        batchDate: new Date('2023-04-16'),
        quantityAvailableInLtrs: 19,
    },
    SmokeWhite: {
        batchDate: new Date('2023-02-15'),
        quantityAvailableInLtrs: 345,
    },
}

const colouredPens: ColouredPens = {
    SunsetOrange: {
        priceInGbp: 2.37,
        stock: 221,
        userRating: 4,
    },
    CanaryYellow: {
        priceInGbp: 2.14,
        stock: 123,
        userRating: 5,
    },
    EmeraldGreen: {
        priceInGbp: 2.13,
        stock: 594,
        userRating: 3,
    },
    CobaltBlue: {
        priceInGbp: 1.95,
        stock: 31,
        userRating: 5,
    },
    LemonadePink: {
        priceInGbp: 2.22,
        stock: 221,
        userRating: 4,
    },
    ChestnutBrown: {
        priceInGbp: 2.87,
        stock: 374,
        userRating: 2,
    },
    MidnightBlack: {
        priceInGbp: 2.01,
        stock: 191,
        userRating: 4,
    },
    SmokeWhite: {
        priceInGbp: 1.39,
        stock: 56,
        userRating: 5,
    },
}

const phoneCases: PhoneCases = {
    SunsetOrange: {
        priceInGbp: 22.99,
        stock: 12,
        userRating: 4,
    },
    EmeraldGreen: {
        priceInGbp: 22.99,
        stock: 11,
        userRating: 2,
    },
    CobaltBlue: {
        priceInGbp: 22.99,
        stock: 63,
        userRating: 5,
    },
    LemonadePink: {
        priceInGbp: 22.99,
        stock: 46,
        userRating: 4,
    },
    MidnightBlack: {
        priceInGbp: 22.99,
        stock: 96,
        userRating: 3,
    },
    SmokeWhite: {
        priceInGbp: 22.99,
        stock: 5,
        userRating: 5,
    },
}

console.log('dyeMixes', dyeMixes)
console.log('dyeStockStatus', dyeStockStatus)
console.log('colouredPens', colouredPens)
console.log('phoneCases', phoneCases)

export {}
