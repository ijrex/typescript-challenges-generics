////////////////////////////////////////////////////
// 05 - Fine-tuning array type definitions
////////////////////////////////////////////////////

/* Edit between these lines only >>>>>>>>>>>>>>>>>>> */

const errorIfFirstItemIsUndefined = <T1, T2>(
    arr: [NonNullable<T1>, ...T2[]]
) => {
    const firstItem = arr[0]

    if (firstItem === null || firstItem === undefined) {
        throw new Error('Arr[0] must be defined!')
    }
}

/* <<<<<<<<<<<<<<<<<<<< Edit between these lines only */

// Scenarios should pass:
errorIfFirstItemIsUndefined([1, 2, 3])
errorIfFirstItemIsUndefined(['a', 'b', 'c'])
errorIfFirstItemIsUndefined([{ a: 1 }, { a: 2 }, { a: 3 }])
errorIfFirstItemIsUndefined(['a'])
errorIfFirstItemIsUndefined([0])
errorIfFirstItemIsUndefined([false])
errorIfFirstItemIsUndefined([1, 'a', false])

// Scenarios should have warnings:
errorIfFirstItemIsUndefined([])
errorIfFirstItemIsUndefined([null])
errorIfFirstItemIsUndefined([undefined])
errorIfFirstItemIsUndefined([null, 1])
errorIfFirstItemIsUndefined([null, 1, 'a'])

export default {}
